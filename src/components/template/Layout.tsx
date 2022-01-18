import React from "react";
import Content from "./Content";
import Header from "./Header";
import Menu from "./Menu";

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: any;
}

const Layout = ({ title, subTitle, children }: LayoutProps) => {
  return (
    <div>
      <Menu />
      <Header title={title} subTitle={subTitle} />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
