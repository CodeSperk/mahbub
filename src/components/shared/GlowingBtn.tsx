import React from "react";
import "@/styles/btnAnimation.css";
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
  const baseClasses = `glow-button px-4 py-2 inline-flex items-center justify-center gap-2 rounded-md ${className || ''}`;

  if (href) {
    return (
      <Link
        href={href}
        {...(props as Omit<ButtonAsLink, keyof CommonProps | 'href' | 'download'>)}
        className={baseClasses}
        download={download}
      >
        {icon && <span>{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      {...(props as ButtonAsButton)}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default GlowingBtn;