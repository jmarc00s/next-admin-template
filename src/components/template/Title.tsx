import React from "react";

interface TitleProps {
  title: string;
  subTitle: string;
}

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div>
      <h1 className="">{title}</h1>
      <h2 className="">{subTitle}</h2>
    </div>
  );
};

export default Title;
