"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animation"

interface Props{
  href: string
  label: string
}

const RoutPages = ({href, label} : Props) => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(router, pathName);

  const handleClick = () => {
    if(pathName !== href ){
      animatePageOut(href, router)
    }
  }

  const isActive = pathName === href;
  return(
    <button className={`text-xl   ${isActive ? "text-[#FFB400] font-bold" : "text-[#fefef5] hover:text-[#FFB400]"}`} onClick={handleClick}>
      {label}
    </button>
  )
}

export default RoutPages;