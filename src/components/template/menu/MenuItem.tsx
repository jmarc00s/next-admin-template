import React from "react";
import Link from "next/link";

interface MenuItemProps {
  text: string;
  icon: any;
  url?: string;
  onClick?: (event: any) => void;
  className?: string;
}

const MenuItem = ({ icon, url, text, onClick, className }: MenuItemProps) => {
  function renderLink() {
    return (
      <a
        className={`flex flex-col justify-center 
                    items-center w-20 h-20 px-3 
                    text-gray-600
                    ${className}`}
      >
        {icon}
        <span className="text-xs font-light ">{text}</span>
      </a>
    );
  }

  return (
    <li className={`hover:bg-gray-100 cursor-pointer`} onClick={onClick}>
      {url ? <Link href={url}>{renderLink()}</Link> : renderLink()}
    </li>
  );
};

export default MenuItem;
