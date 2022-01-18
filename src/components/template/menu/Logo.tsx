import React from "react";

const Logo = () => {
  return (
    <div
      className={`bg-white h-12 w-12 rounded-full flex flex-col justify-center items-center`}
    >
      <div className="h-3 w-3 rounded-full bg-red-600"></div>
      <div className="flex">
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
};

export default Logo;
