import React, { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';

const Login = () => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit() {
    if (mode === 'signin') {
      console.log('logar');
      return;
    }

    console.log('Cadastrar');
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className={`w-1/2`}>
        <h1 className={`text-xl font-bold mb-5`}>
          {mode === 'signin'
            ? 'Entre com sua conta'
            : 'Cadastre-se na plataforma'}
        </h1>
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
          onClick={onSubmit}
        >
          Entrar com Google
        </button>
      </div>
    </div>
  );
};

export default Login;
