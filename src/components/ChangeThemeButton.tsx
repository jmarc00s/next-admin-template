import React from 'react';
import { IconMoon, IconSun } from './icons';

interface ChangeThemeButtonProps {
  theme: string;
  changeTheme: () => void;
}

const ChangeThemeButton = ({ theme, changeTheme }: ChangeThemeButtonProps) => {
  return theme === 'dark' ? (
    <div
      onClick={changeTheme}
      className={`
        hidden
        sm:flex items-center
        bg-gradient-to-r from-yellow-300 to-yellow-600 
        lg:w-24 w-14 h-8 cursor-pointer rounded-full p-1
      `}
    >
      <div
        className={`
            flex justify-center items-center 
            bg-white text-yellow-700
            w-6 h-6 rounded-full`}
      >
        {IconSun(3)}
      </div>
      <div className={`hidden lg:flex items-center ml-4 text-white`}>
        <span className="text-sm">Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={changeTheme}
      className={`
      hidden
      sm:flex items-center justify-end
      bg-gradient-to-r from-gray-500 to-gray-900 
      lg:w-24 w-14 h-8 cursor-pointer rounded-full p-1
    `}
    >
      <div className={`hidden lg:flex items-center mr-2 text-gray-300`}>
        <span className="text-sm">Escuro</span>
      </div>
      <div
        className={`
          flex justify-center items-center 
          bg-black text-yellow-300
          w-6 h-6 rounded-full`}
      >
        {IconMoon(3)}
      </div>
    </div>
  );
};

export default ChangeThemeButton;
