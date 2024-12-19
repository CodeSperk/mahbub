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
  return(
    <button className="text-xl text-neutral-900 hover:text-neutral-700" onClick={handleClick}>
      {label}
    </button>
  )
}

export default RoutPages;