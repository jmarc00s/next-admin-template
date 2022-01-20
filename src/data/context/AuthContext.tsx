import route from 'next/router';
import { createContext, useEffect, useState } from 'react';
import firebase from '../../firebase';
import UserModel from '../../model/User';
import Cookies from 'js-cookie';

const AUTH_COOKIE = 'admin-template-auth';
interface AuthContextProps {
  user?: UserModel;
  authGoogle?: () => Promise<void>;
  authWithEmailPassword?: (email: string, password: string) => Promise<void>;
  createWithEmailPassword?: (email: string, password: string) => Promise<void>;
  logout?: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps>({ loading: true });
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
    route.push('/login');

    return false;
  }

  async function authGoogle() {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      if (response.user) {
        await configureSession(response.user);
        route.push('/');
      }
    } finally {
      setLoading(false);
    }
  }

  async function authWithEmailPassword(email: string, password: string) {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (response.user) {
        await configureSession(response.user);
        route.push('/');
      }
    } finally {
      setLoading(false);
    }
  }

  async function createWithEmailPassword(email: string, password: string) {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (response.user) {
        await configureSession(response.user);
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
    setLoading(false);
    route.push('/login');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authGoogle,
        logout,
        loading,
        authWithEmailPassword,
        createWithEmailPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
