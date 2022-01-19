import React from 'react';
import useAuth from '../../../data/hook/useAuth';
import { IconBell, IconHome, IconLogout, IconSettings } from '../../icons';
import Logo from './Logo';
import MenuItem from './MenuItem';

const Menu = () => {
  const { logout } = useAuth();

  return (
    <aside
      className="flex flex-col 
                    bg-gray-200 text-gray-900 
                    dark:bg-gray-900 dark:text-gray-200 "
    >
      <div
        className={`h-20 w-20 bg-gradient-to-tr from-indigo-500 
                  to-purple-800 flex flex-col justify-center 
                  items-center`}
      >
        <Logo />
      </div>
      <ul className="flex-1">
        <MenuItem url="/" text="Início" icon={IconHome} />
        <MenuItem url="/settings" text="Ajustes" icon={IconSettings} />
        <MenuItem url="/news" text="Notificações" icon={IconBell} />
      </ul>
      <ul>
        <MenuItem
          onClick={logout}
          text="Sair"
          icon={IconLogout}
          className="text-red-600 
                    hover:bg-red-400 
                    hover:text-white 
                    dark:text-red-400
                    dark:hover:text-white"
        />
      </ul>
    </aside>
  );
};

export default Menu;
