import React from "react";

type TProps = {
  icon: React.ElementType;
  title: string;
  className?: string
};

const Button = ({ icon: Icon, title, className }: TProps) => {
  return (
    <div className={`flex gap-2 items-center bg-[#1a0712] hover:bg-[#3e102b] border border-[#2a0c1e] p-2 px-4 xl:px-6 rounded-md text-lg ${className}`}>
      <Icon className="text-primary" />
      <button>{title}</button>
    </div>
  );
};

export default Button;
