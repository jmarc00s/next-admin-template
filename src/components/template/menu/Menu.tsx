import React from "react";
import { IconBell, IconHome, IconSettings } from "../../icons";
import MenuItem from "./MenuItem";

interface MenuProps {}

const Menu = () => {
  return (
    <aside>
      <ul>
        <MenuItem url="/" text="Início" icon={IconHome} />
        <MenuItem url="/settings" text="Ajustes" icon={IconSettings} />
        <MenuItem url="/news" text="Notificações" icon={IconBell} />
      </ul>
    </aside>
  );
};

export default Menu;
