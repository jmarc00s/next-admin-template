import React from "react";

interface ContentProps {
  children?: any;
}

const Content = ({ children }: ContentProps) => {
  return (
    <div className="flex flex-col mt-7 dark:text-gray-200">{children}</div>
  );
};

export default Content;
