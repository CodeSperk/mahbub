import { BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaReact, FaShopify } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMui, SiTailwindcss } from "react-icons/si";
import { TbSql } from "react-icons/tb";

type IconType= {
  name: string;
  icon: React.ComponentType;
}

 const iconsData: IconType[] = [
  {
    name: "Next.js",
    icon: RiNextjsFill
  },
  {
    name: "React",
    icon: FaReact
  },
  {
    name: "JavaScript",
    icon: RiJavascriptFill
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss
  },
  {
    name: "TypeScript",
    icon: BiLogoTypescript
  },
  {
    name: "Express",
    icon: SiExpress
  },
  {
    name: "Node.js",
    icon: IoLogoNodejs
  },
  {
    name: "Material-UI",
    icon: SiMui
  },
  {
    name: "HTML5",
    icon: FaHtml5
  },
  {
    name: "CSS3",
    icon: FaCss3Alt
  },
  {
    name: "MongoDB",
    icon: SiMongodb
  },
  {
    name: "SQL",
    icon: TbSql
  },
  {
    name: "Firebase",
    icon: BiLogoFirebase
  },
  {
    name: "Shopify",
    icon: FaShopify
  }
];

export default iconsData;