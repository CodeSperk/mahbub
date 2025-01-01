import React from "react";
import "@/styles/btnStyles.css";

type TProps = {
  icon: React.ElementType;
  title: string;
  className?: string
};

const Button = ({ icon: Icon, title, className }: TProps) => {
  return (
    <div className={`glow-button  ${className}`}>
      <Icon className="" />
      <button>{title}</button>
    </div>
  );
};

export default Button;
