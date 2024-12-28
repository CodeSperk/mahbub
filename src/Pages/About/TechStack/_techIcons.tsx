import React from "react";
import TeactStackIcons from "./__techIcon";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { FaCss3Alt, FaHtml5, FaReact, FaShopify } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMui, SiTailwindcss } from "react-icons/si";
import { BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io";
import { TbSql } from "react-icons/tb";
import TeachIcon from "./__techIcon";

const TechIcons = () => {
  return (
    <div>
      <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-4 lg:gap-6 max-w-4xl">
        <TeachIcon Icon={RiNextjsFill} />
        <TeachIcon Icon={FaReact} />
        <TeachIcon Icon={RiJavascriptFill} />
        <TeachIcon Icon={SiTailwindcss} />
        <TeachIcon Icon={BiLogoTypescript} />
        <TeachIcon Icon={SiExpress} />
        <TeachIcon Icon={IoLogoNodejs} />
        <TeachIcon Icon={SiMui} />
      </div>

      <div className="flex flex-wrap justify-center gap-5 lg:gap-6 mt-6 max-w-2xl">
        <TeachIcon Icon={FaHtml5} />
        <TeachIcon Icon={FaCss3Alt} />
        <TeachIcon Icon={SiMongodb} />
        <TeachIcon Icon={TbSql} />
        <TeachIcon Icon={BiLogoFirebase} />
        <TeachIcon Icon={FaShopify} />
      </div>
    </div>
  );
};

export default TechIcons;
