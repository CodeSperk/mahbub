import React from "react";

type TProps = {
  bg: string,
  title1: string
  title2: string
}

const PageTitle: React.FC<TProps> = ({bg, title1, title2}) => {
  return (
    <div className="py-10 my-10 md:my-16 text-center h-28 relative">
      <h3 className="text-[#1E253012] text-[64px] md:text-[110px] uppercase font-extrabold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center leading-none cursor-none">{bg}</h3>
      <h2 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-black text-[36px] md:text-[56px] uppercase leading-none">{title1} <span className="text-[#FFB400]">{title2}</span></h2>
    </div>
  );
};

export default PageTitle;