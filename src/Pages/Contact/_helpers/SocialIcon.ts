import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export type SocialP = {
  icon: React.ElementType;
  href: string;
}

export const socialIcon : SocialP[] =[
  {
    href: "Phone:",
    icon: FaLinkedinIn
  },
  {
    href: "Email:",
    icon: FaGithub
  },
  {
    href: "https://wa.me/8801521251146",
    icon: FaWhatsapp
  }
]