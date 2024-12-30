import React from "react";
import "@/styles/btnStyles.css";
import Link from "next/link";

type CommonProps = {
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  download?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = CommonProps & {
  href: string;
  download?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | 'href' | 'download'>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const GlowingBtn: React.FC<ButtonProps> = ({ href, download, icon, className, children, ...props }) => {
  const baseClasses = `glow-button px-4 py-2 flex items-center justify-center gap-2 rounded-md ${className || ''}`;

  if (href) {
    return (
      <Link
        href={href}
        {...(props as Omit<ButtonAsLink, keyof CommonProps | 'href' | 'download'>)}
        className={baseClasses}
        download={download}
      >
        {children}
        {icon && <span>{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      {...(props as ButtonAsButton)}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default GlowingBtn;