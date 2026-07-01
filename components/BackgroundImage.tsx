// components/BackgroundImage.tsx

"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BackgroundImage() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }
  a;

  return (
    <div
      className="fixed top-0 left-0 w-full z-[-1] overflow-hidden"
      style={{ height: "900px" }}
    >
      <Image
        src={"/trees.jpg"}
        alt="Tree background"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-90"
        quality={90}
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#3D2D4A]/95 via-[#5F395E]/92 to-[#C35E66]/80" />
    </div>
  );
}
