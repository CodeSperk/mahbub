import React from "react";

type TProps = {
  Icon : React.ElementType;
}

const TeachIcon  = ({Icon}: TProps) => {
  return (
    <div className="w-16 h-16 rounded-xl transition-colors border border-[#4d204d] bg-[#4d204d50] hover:bg-[#4d204d] cursor-pointer flex justify-center items-center">
      <Icon className="text-white text-4xl"/>
    </div>
  );
};

export default TeachIcon;
