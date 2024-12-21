import NavItems from "./--navItems";
const Navbar = () => {
  return (
    <nav className="fixed h-[100vh] top-0 left-1/2 z-50 -translate-x-1/2 py-6">
      <NavItems/>
    </nav>
  );
};

export default Navbar;