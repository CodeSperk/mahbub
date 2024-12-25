import { FaBlogger, FaHome } from "react-icons/fa";
import RoutPages from "../../shared/Routes";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { MdContacts } from "react-icons/md";

const NavItems = () => {
  return (
    <ul className="flex flex-col gap-2 bg-gray-950 text-white py-4 px-8 rounded-full">
      <RoutPages href="/" label="Home" icon={<FaHome />} />
      <RoutPages href="/about" label="About" icon={<BsPersonWorkspace />} />
      <RoutPages href="/portfolio" label="Portfolio" icon={<GrWorkshop />} />
      <RoutPages href="/blog" label="Blog" icon={<FaBlogger />} />
      <RoutPages href="/contact" label="Contact" icon={<MdContacts />} />
    </ul>
  );
};

export default NavItems;
