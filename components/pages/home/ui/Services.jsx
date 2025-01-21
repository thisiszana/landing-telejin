import { servicesEl } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <div className="max-w-screen-lg xl:max-w-screen-xl m-auto px-0 lg:px-8 max-lg:pb-4">
      <div className="flex lg:justify-center mt-0 lg:mt-[64px] max-xl:px-6">
        <h2 className="hidden lg:block text-2xl text-[#2c0767] font-semibold ">
          ویزیت آنلاین و سایر خدمات
        </h2>
        <h2 className="block lg:hidden text-[16px] text-[#2c0767] font-semibold relative leading-[24.8px] top-[24px]">
          ویزیت آنلاین
        </h2>
      </div>
      <div className="pt-6 pb-8 max-lg:overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex justify-start w-fit lg:justify-center flex-row-reverse gap-4 lg:w-full mt-3 lg:mt-8 scroll-smooth max-lg:px-6">
          {servicesEl.map((ser) => (
            <Link
              href={ser.href}
              key={ser.id}
              className="inline-block font-medium transition-all"
            >
              <div className="flex flex-col items-center shadow-headerShadow py-2 lg:py-4 min-w-[140px] lg:w-[190px] h-[205px] lg:h-[280px]  bg-white rounded-[20px] overflow-hidden  headerShadow">
                <div className="relative w-[113px] h-[110px] lg:w-[134.34px] lg:h-[134px] overflow-hidden group">
                  <Image
                    src={ser.image}
                    width={250}
                    height={250}
                    alt={ser.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-[2px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-90 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h5 className="font-bold  text-[#2c0767] text-[10px] lg:text-[14px] leading-[21.7px] mt-1 lg:mt-2">
                  {ser.title}
                </h5>
                <p className="text-[10px] leading-[15.5px] py-1 text-[#ac95d1] max-lg:p-0">
                  {ser.count} مورد
                </p>
                <button className="rounded-[50px] flex justify-center items-center hover:ring transition-all cursor-pointer bg-primary text-white text-[10px] lg:text-[13px] leading-[15.5px] lg:leading-[20.15px] w-[86px] lg:w-[118.97px] h-[24px] lg:h-[32.71px] mt-2">
                  مشاهده
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
