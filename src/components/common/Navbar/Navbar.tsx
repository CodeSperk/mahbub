import NavItems from "./--navItems";
const Navbar = () => {
  return (
    <nav className="fixed z-10 top-0 left-1/2 -translate-x-1/2 py-6">
      <NavItems/>
    </nav>
  );
};

export default Navbar;