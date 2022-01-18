import React from "react";

interface TitleProps {
  title: string;
  subTitle: string;
}

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div>
      <h1 className="font-black text-3xl text-gray-900">{title}</h1>
      <h2 className="font-light text-sm text-gray-600">{subTitle}</h2>
    </div>
  );
};

export default Title;
