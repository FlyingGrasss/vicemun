"use client"

import { usePathname } from "next/navigation"

const Footer = () => {
  const pathname = usePathname()

  if (pathname?.startsWith("/admin")) {
    return null
  }

  return (
    <p className="text-white text-center min-[1800px]:text-xl">
      &copy; 2026 VICEMUN, All Rights Reserved.{" "}
      <br className="sm:hidden" />{" "}
      <a
        href="https://emre-bozkurt.netlify.app"
        target="_blank"
        className="underline cursor-pointer"
      >
        Emre Bozkurt
      </a>
    </p>
  )
}

export default Footer
