import React from "react";
import Link from "next/link";

interface MenuItemProps {
  url: string;
  text: string;
  icon: any;
}

const MenuItem = ({ icon, url, text }: MenuItemProps) => {
  return (
    <li className="hover:bg-gray-100 ">
      <Link href={url}>
        <a className="flex flex-col justify-center items-center w-full h-20 px-3">
          {icon}
          <span className="text-xs font-light text-gray-600">{text}</span>
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
