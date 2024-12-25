"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animation";

interface Props {
  href: string;
  label: string;
  icon?: JSX.Element; // Change the type of `icon` to `JSX.Element`
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
      className={`flex gap-2 items-center justify-end p-1 py-4 text-3xl ${
        isActive ? "text-[#FFB400] font-bold" : "text-[#fefef5] hover:text-[#FFB400]"
      }`}
      onClick={handleClick}
    >
      <span className="hidden hover:block">{label}</span>
      {icon} 
    </button>
  );
};

export default RoutPages;
