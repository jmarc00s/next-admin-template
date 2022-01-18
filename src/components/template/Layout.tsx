import React from "react";
import Content from "./Content";
import Header from "./Header";
import Menu from "./menu/Menu";

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: any;
}

const Layout = ({ title, subTitle, children }: LayoutProps) => {
  return (
    <main className="flex h-screen w-screen dark ">
      <Menu />
      <div className="flex flex-col flex-1 bg-gray-300 p-7 dark:bg-gray-800">
        <Header title={title} subTitle={subTitle} />
        <Content>{children}</Content>
      </div>
    </main>
  );
};

export default Layout;
