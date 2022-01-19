import route from 'next/router';
import { createContext, useEffect, useState } from 'react';
import firebase from '../../firebase';
import UserModel from '../../model/User';
import Cookies from 'js-cookie';

const AUTH_COOKIE = 'admin-template-auth';
interface AuthContextProps {
  user?: UserModel;
  authGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});
interface AuthProviderProps {
  children?: any;
}

async function normalizeUser(
  firebaseUser: firebase.User | null
): Promise<UserModel | void> {
  if (!firebaseUser) {
    return;
  }

  const token = await firebaseUser.getIdToken();

  const { uid, displayName: name, email, photoURL: imageUrl } = firebaseUser;

  return {
    uid,
    name,
    email,
    token,
    provider: firebaseUser.providerData[0]?.providerId,
    imageUrl,
  };
}

function manageCookie(isAuthenticated: boolean) {
  if (isAuthenticated) {
    Cookies.set(AUTH_COOKIE, JSON.stringify(isAuthenticated), {
      expires: 7,
    });

    return;
  }

  Cookies.remove(AUTH_COOKIE);
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserModel | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  async function configureSession(firebaseUser: any) {
    if (firebaseUser?.email) {
      const user = await normalizeUser(firebaseUser);
      if (user) {
        setUser(user);
        manageCookie(true);
        setLoading(false);
      }

      return user?.email;
    }

    manageCookie(false);
    setUser(undefined);
    setLoading(false);

    return false;
  }

  async function authGoogle() {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      if (response.user) {
        configureSession(response.user);
        route.push('/');
      }
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configureSession(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (Cookies.get(AUTH_COOKIE)) {
      const unsubscribe = firebase.auth().onIdTokenChanged(configureSession);
      return () => unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, authGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
