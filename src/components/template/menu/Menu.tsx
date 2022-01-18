import React from "react";
import { IconBell, IconHome, IconLogout, IconSettings } from "../../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

interface MenuProps {}

const Menu = () => {
  return (
    <aside className="flex flex-col">
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
          onClick={() => console.log("logout")}
          text="Sair"
          icon={IconLogout}
          className="text-red-600 hover:bg-red-400 hover:text-white"
        />
      </ul>
    </aside>
  );
};

export default Menu;
