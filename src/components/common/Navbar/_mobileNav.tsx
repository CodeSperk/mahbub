"use client";
import { socialIcon } from "@/Pages/Contact/_helpers/SocialIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const MobileNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathName = usePathname();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden"; // Disable page scroll
    } else {
      document.body.style.overflow = "auto"; // Enable page scroll
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen]);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div onClick={toggleDrawer} aria-label="Open Menu">
      <FiMenu className="text-2xl" />

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Drawer Background Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-75"
          onClick={toggleDrawer}
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-page-bg shadow-lg text-white transform transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } overflow-y-auto scroll-smooth`}
        >
          <div className="flex justify-between items-center p-4 border-b border-[#300f2d]">
            <h3 className="text-highlight text-lg uppercase">Mahbub</h3>
            <button onClick={toggleDrawer} aria-label="Close Menu">
              <IoMdClose className="text-2xl" />
            </button>
          </div>
          <ul className="flex flex-col gap-6 py-4 items-center">
            {menuItems.map((item, idx) => (
              <li key={idx} className="w-full text-center">
                <Link
                  href={item.href}
                  className={`block py-2 ${
                    pathName === item.href
                      ? " text-highlight border-r-2 px-4 border-highlight"
                      : "hover:text-highlight"
                  }`}
                  onClick={toggleDrawer}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="mt-4">
              <div className="flex justify-center gap-4 text-xl">
                {socialIcon.map((icon, idx) => (
                  <Link
                    key={idx}
                    href={icon.href}
                    target="_blank"
                    className="p-3 rounded-full bg-icon-hover-bg hover:scale-110 hover:text-highlight border-2 border-button duration-300"
                  >
                    <icon.icon />
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
