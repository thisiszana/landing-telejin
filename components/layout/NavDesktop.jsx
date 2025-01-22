"use client";

import { images, navElSection1, navElSection2 } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavDesktop() {
  const pathname = usePathname();
  return (
    <nav className="max-w-screen-xl bg-white hidden lg:flex items-center justify-between h-[74px] rounded-[20px] z-50 shadow-headerShadow">
      <div className="w-full grid grid-cols-12 px-5">
        <div className="col-span-5 flex mx-4 items-center">
          <ul className="w-full flex justify-between">
            {navElSection1.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`inline-block font-[700] text-base transition-all ${
                    pathname === item.href ? "text-primaryHover" : "text-black"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 flex justify-center items-center">
          <Link href="/" className="w-[74.85px] h-[56px]">
            <Image src={images.logo} width={100} height={100} alt="لوگو" />
          </Link>
        </div>

        <div className="col-span-5 flex justify-between items-center gap-6 xl:gap-10">
          <ul className="w-full flex justify-between">
            {navElSection2.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`inline-block font-bold text-[16px] leading-[24.8px] transition-all ${
                    pathname === item.href ? "text-primaryHover" : "text-black"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-60 h-9">
            <div>
              <button className="rounded-[10px] text-[13px] leading-[20.15px] font-bold flex justify-center transition-all cursor-pointer bg-primary text-white w-full lg:w-36 h-12 lg:h-9 items-center">
                ورود / ثبت نام
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
