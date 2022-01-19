import route from 'next/router';
import { createContext, useState } from 'react';
import firebase from '../../firebase';
import UserModel from '../../model/User';

interface AuthContextProps {
  user?: UserModel;
  authGoogle?: () => Promise<void>;
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

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserModel | undefined>(undefined);

  async function authGoogle() {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    const user = await normalizeUser(response.user);

    if (user) {
      setUser(user);
      route.push('/');
    }
  }

  return (
    <AuthContext.Provider value={{ user, authGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
