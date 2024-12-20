"use client"
import RoutPages from "./routes";

const Sidebar = () => {
  return (
    <nav className="flex gap-6 text-white py-4 px-8 rounded-full">
        <RoutPages href="/" label="Home"/>
        <RoutPages href="/about" label="About"/>
        <RoutPages href="/portfolio" label="Portfolio"/>
        <RoutPages href="/blog" label="Blog"/>
        <RoutPages href="/contact" label="Contact"/>
  </nav>
  );
};

export default Sidebar;