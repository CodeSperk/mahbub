import NavItems from "./--navItems";
const Navbar = () => {
  return (
    <nav className="fixed z-10 right-0 top-1/2 -translate-y-1/2 py-6">
      <NavItems/>
    </nav>
  );
};

export default Navbar;