import { contactEl, images, otherPageEl, socialmedia } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="max-w-screen-xl m-auto px-6 mt-16 mb-4 sm:mt-24 sm:mb-10">
      <div className="lg:h-96 rounded-[43px] px-4 sm:p-8 lg:p-12 sm:bg-white sm:shadow-headerShadow">
        {/* Mobile breakpoint start */}
        <div className="flex flex-col items-center gap-10 sm:hidden mb-8">
          <Link href="/" className="w-[74.85px] h-[56px]">
            <Image src={images.logo} width={200} height={200} alt="لوگو" />
          </Link>
          <div className="w-[239.27px] h-[97px]">
            <Link href="/">
              <Image
                src={images.eNamad}
                width={300}
                height={300}
                alt="ای‌نماد"
                className="w-full h-full filter grayscale"
              />
            </Link>
          </div>
        </div>
        {/* Mobile breakpoint end */}
        <div className="flex justify-start sm:grid grid-cols-10 gap-12 sm:gap-16 h-full">
          <div className="hidden col-span-5 sm:flex lg:col-span-3 flex-col gap-4">
            <Link href="/" className="w-[74.85px] h-[56px]">
              <Image src={images.logo} width={200} height={200} alt="لوگو" />
            </Link>
            <div>
              <p className="text-black font-normal text-[15px] leading-[23.25px]">
                متنی درباره تله‌ژین برای سئو وبسایت در فوتر قراردارد.
              </p>
              <p className="text-black font-normal text-[15px] leading-[23.25px]">
                متنی درباره تله‌ژین برای سئو وبسایت در فوتر قراردارد.
              </p>
              <p className="text-black font-normal text-[15px] leading-[23.25px]">
                متنی درباره تله‌ژین برای سئو وبسایت در فوتر قراردارد.
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              {socialmedia.map((so) => (
                <Link
                  key={so.id}
                  href={so.href}
                  className="inline-block p-[10px] bg-primaryIcon rounded-full"
                >
                  <span className="text-primary text-[20px]">{so.icon}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-5 lg:col-span-2">
            <h6 className="text-[20px] leading-[31px] sm:text-[24px] sm:leading-[37.2px] text-black font-medium mb-6 sm:mb-10">
              راه های ارتباطی
            </h6>
            <ul className="flex flex-col gap-5">
              {contactEl.map((co) => (
                <li key={co.id}>
                  <Link
                    href={co.href}
                    className="inline-block font-normal text-[15px] leading-[23.25px] sm:text-[16px] sm:leading-[24.8px]"
                  >
                    {co.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-5 lg:col-span-2">
            <h6 className="text-[20px] leading-[31px] sm:text-[24px] sm:leading-[37.2px] text-black font-medium mb-6 sm:mb-10">
              دیگر صفحات
            </h6>
            <ul className="flex flex-col gap-5">
              {otherPageEl.map((co) => (
                <li key={co.id}>
                  <Link
                    href={co.href}
                    className="inline-block font-normal text-[15px] leading-[23.25px] sm:text-[16px] sm:leading-[24.8px]"
                  >
                    {co.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden sm:flex col-span-5 lg:col-span-3 lg:justify-end">
            <div className="w-[239.27px] h-[97px]">
              <Link href="/">
                <Image
                  src={images.eNamad}
                  width={300}
                  height={300}
                  alt="ای‌نماد"
                  className="w-full h-full filter grayscale"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile breakpoint start */}
        <div className="flex sm:hidden mb-5 mt-8 justify-center gap-2">
          <div className="flex gap-2 mt-4">
            {socialmedia.map((so) => (
              <Link
                key={so.id}
                href={so.href}
                className="inline-block p-[10px] bg-primaryIcon rounded-full"
              >
                <span className="text-primary text-[20px]">{so.icon}</span>
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile breakpoint end */}
        <div className="text-center mt-2">
          <p className="text-black text-[15px] leading-[23.25px] font-normal">
            تمامی حقوق متعلق به مامه سوران میباشد.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
