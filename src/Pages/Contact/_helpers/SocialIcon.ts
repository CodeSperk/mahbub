import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export type SocialP = {
  icon: React.ElementType;
  href: string;
}

export const socialIcon : SocialP[] =[
  {
    href: "https://www.linkedin.com/in/mahbub692",
    icon: FaLinkedinIn
  },
  {
    href: "https://github.com/CodeSperk",
    icon: FaGithub
  },
  {
    href: "https://wa.me/8801521251146",
    icon: FaWhatsapp
  }
]