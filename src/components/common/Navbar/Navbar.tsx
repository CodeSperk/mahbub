import RoutPages from "@/components/shared/Routes";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { MdContacts } from "react-icons/md";
import MobileNav from "./_mobileNav";

const Navbar = () => {
  
  return (
    <nav>
      {/* Mobile device */}
      <div className="absolute md:hidden z-50 top-0 left-0 text-white w-full max-width mx-auto flex justify-between items-center py-4 border-b border-[#300f2d]">
        <h3 className="text-highlight uppercase">Mahbub</h3>
        <MobileNav/>
      </div>

      {/* large devices */}
      <div className="hidden md:flex fixed z-10 right-0 top-1/2 -translate-y-1/2 py-6">
        <ul className="flex flex-col gap-6 py-4 px-2 pr-8 rounded-full">
          <RoutPages href="/" label="Home" icon={<FaHome />} />
          <RoutPages href="/about" label="About" icon={<BsPersonWorkspace />} />
          <RoutPages
            href="/portfolio"
            label="Portfolio"
            icon={<GrWorkshop />}
          />
          <RoutPages href="/contact" label="Contact" icon={<MdContacts />} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
