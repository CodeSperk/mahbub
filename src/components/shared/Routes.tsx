"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animation";

interface Props {
  href: string;
  label: string;
  icon: React.ReactNode; 
}

const RoutPages = ({ href, label, icon }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(router, pathName);

  const handleClick = () => {
    if (pathName !== href) {
      animatePageOut(href, router);
    }
  };

  const isActive = pathName === href;
  return (
    <button
      className={`text-xl hover:bg-highlight p-3 rounded-full ${
        isActive ? "bg-highlight" : "bg-[#261f0e]"
      }`}
      onClick={handleClick}
    >
      {/* <span className="hidden hover:block">{label}</span> */}
      {icon} <span className="hidden">{label}</span>
    </button>
  );
};

export default RoutPages;
