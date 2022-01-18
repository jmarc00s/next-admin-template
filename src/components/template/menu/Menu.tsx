import React from "react";
import { IconBell, IconHome, IconSettings } from "../../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

interface MenuProps {}

const Menu = () => {
  return (
    <aside>
      <div
        className={`h-20 w-20 bg-gradient-to-tr from-indigo-500 
                  to-purple-800 flex flex-col justify-center 
                  items-center`}
      >
        <Logo />
      </div>
      <ul>
        <MenuItem url="/" text="Início" icon={IconHome} />
        <MenuItem url="/settings" text="Ajustes" icon={IconSettings} />
        <MenuItem url="/news" text="Notificações" icon={IconBell} />
      </ul>
    </aside>
  );
};

export default Menu;
