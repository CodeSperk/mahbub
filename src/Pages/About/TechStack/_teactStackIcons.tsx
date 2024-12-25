import React from "react";

type TProps = {
  Icon : React.ElementType;
}

const TeactStackIcons  = ({Icon}: TProps) => {
  return (
    <div className="w-16 h-16 rounded-xl transition-colors border border-[#ffb3007c] bg-[#ffb30018] hover:bg-[#ffb300d4] cursor-pointer flex justify-center items-center">
      <Icon className="text-white text-4xl"/>
    </div>
  );
};

export default TeactStackIcons;
