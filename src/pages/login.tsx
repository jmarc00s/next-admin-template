import Image from 'next/image';
import React, { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';
import { IconWarning } from '../components/icons';
import useAuth from '../data/hook/useAuth';

const Login = () => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { authGoogle, authWithEmailPassword, createWithEmailPassword } =
    useAuth();

  async function onSubmit() {
    try {
      if (mode === 'signin') {
        await signIn(email, password);
        return;
      }
      await signUp(email, password);
    } catch (error: any) {
      showError(error?.message ?? 'Não foi possível realizar a operação.');
    }
  }

  async function signIn(email: string, password: string) {
    if (authWithEmailPassword) {
      await authWithEmailPassword(email, password);
    }
  }

  async function signUp(email: string, password: string) {
    if (createWithEmailPassword) {
      await createWithEmailPassword(email, password);
    }
  }

  function showError(message: string, timeInSeconds = 5) {
    setError(message);
    setTimeout(() => setError(''), timeInSeconds * 1000);
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div
        className={`hidden md:flex-1 md:flex justify-center items-center xl:w-2/3`}
      >
        {/* <Image
          src="https://source.unsplash.com/random"
          alt="Auth image"
          layout="fill"
        /> */}
        <h3>Imagem</h3>
      </div>
      <div className={`p-3 md:p-10 md:w-1/2 xl:w-1/3`}>
        <h1 className={`text-3xl font-bold mb-5`}>
          {mode === 'signin'
            ? 'Entre com sua conta'
            : 'Cadastre-se na plataforma'}
        </h1>

        {error !== '' ? (
          <div className="bg-red-400 text-white py-3 px-5 flex rounded-lg border items-center">
            {IconWarning} <span className="ml-3 font-semibold">{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="Email"
          value={email}
          onChange={setEmail}
          type="email"
          required
        />
        <AuthInput
          label="Senha"
          value={password}
          onChange={setPassword}
          type="password"
          required
        />
        <button
          className={`w-full bg-indigo-500 
        text-white rounded-lg hover:bg-indigo-400
        px-4 py-3 mt-6`}
          onClick={onSubmit}
        >
          {mode === 'signin' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          className={`w-full bg-red-500 
        text-white rounded-lg hover:bg-red-400
        px-4 py-3`}
          onClick={authGoogle}
        >
          Entrar com Google
        </button>

        {mode === 'signin' ? (
          <p className="mt-8 text-center">
            Novo por aqui ?
            <a
              onClick={() => setMode('signup')}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-2`}
            >
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8 text-center">
            Já faz parte da nossa comunidade ?
            <a
              onClick={() => setMode('signin')}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-2`}
            >
              Entre com suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
