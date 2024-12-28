import React from "react";
import "@/styles/btnAnimation.css";
// import { MdDownload } from "react-icons/md";
import Link from "next/link";

interface BtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  icon?: React.ReactNode;
  download?: string;
}

const GlowingBtn : React.FC<BtnProps> = ({href, icon, download, className, children, ...props}) => {
  if(href) {
    return (
      <Link
        href={href}
        download={download}
        className={`glow-button px-4 py-2 inline-flex items-center justify-center gap-2 rounded-md ${className}`}
        {...props}
      >
        {children}
        {icon && <span>{icon}</span>}

      </Link>
    )
  }

  return (
    <button
      className={`glow-button px-4 py-2 inline-flex items-center gap-2 rounded-md ${className}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
     {icon && <span>{icon}</span>}
     {children}
    </button>
  );
};

export default GlowingBtn;
