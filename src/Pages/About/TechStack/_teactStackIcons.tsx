import React from "react";

type TProps = {
  Icon : React.ElementType;
}

const TeactStackIcons  = ({Icon}: TProps) => {
  return (
    <div className="w-16 h-16 rounded-xl transition-colors border border-[#82528e] bg-purple-900/30 hover:bg-[#82528e] cursor-pointer flex justify-center items-center">
      <Icon className="text-white text-4xl"/>
    </div>
  );
};

export default TeactStackIcons;
