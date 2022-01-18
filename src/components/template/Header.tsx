import React from "react";
import Title from "./Title";

interface HeaderProps {
  title: string;
  subTitle: string;
}

const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <div>
      <Title title={title} subTitle={subTitle} />
    </div>
  );
};

export default Header;
