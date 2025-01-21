import { icons, images } from "@/constant";
import { sp } from "@/utils/fn";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <conrainer className="max-w-screen-xl m-auto px-6 lg:px-8 ">
      <div className="relative">
        <div className="max-lg:mt-8 lg:h-[300px] relative flex justify-center max-lg:flex-col lg:items-end">
          {/* Elemans Start */}
          <div className="sm:mb-2 lg:absolute right-[192px] xl:right-[224px] top-[56px]">
            <div>
              <h2 className="text-base sm:text-lg lg:text-2xl font-medium mb-1 max-lg:h-[48] text-textPurple">
                دریافت هرگونه خدمات <br />
                پزشکی، پرستاری و مراقبتی بصورت آنلاین
              </h2>
            </div>
            <div className="hidden lg:block">
              <div>{/* Arro Icon not found  */}</div>
            </div>
          </div>
          <div className="lg:w-[539px] lg:h-[87px] max-lg:mt-6 relative flex items-center justify-center cursor-pointer">
            <div className="hidden lg:block absolute -bottom-[29px] w-[740px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30">
                <path
                  className="rotating-border"
                  strokeWidth="0.15"
                  stroke="#000"
                  fill="transparent"
                  strokeDasharray="2.129 2.9"
                  d="M21.3 14 H20 C11.4 14 11.4 26.5 20 26.5 H80 C89 26.5 89 14 80.8 14z"
                />
              </svg>
            </div>
            <div className="w-full h-[47px] lg:w-[480px] px-6 flex items-center gap-3 bg-white lg:justify-center shadow-inputShadow rounded-full">
              <span>{icons.search}</span>
              <p className="text-[14px] leading-[21.7px] py-2 text-[#565656] font-medium">
                جستجو در تخصص، پزشکان و مراکز
              </p>
            </div>
          </div>
          <div className="hidden lg:block absolute right-8">
            <p className="text-2xl font-medium mb-1 text-[#B7821B]">
              چت و گفتگو آنلاین
            </p>
            <p className="text-2xl font-medium text-[#B7821B]">با پزشک معالج</p>
          </div>
          <div className="hidden lg:block absolute left-[193px] top-[48px] xl:left-[225px]">
            <div className="flex items-end gap-2">
              <p className="text-2xl font-medium mb-1 text-[#d87cc9]">بیش از</p>
              <p className="text-4xl font-bold mb-1 text-[#997cd8]">۲,۰۰۰</p>
            </div>
            <p className="text-[24px] text-[#d87cc9] font-medium py-2 ">
              درخواست ویزیت آنلاین
            </p>
          </div>
          <div className="hidden lg:block absolute left-0 xl:left-5 bottom-14">
            <div className="flex items-end gap-4">
              <p className="text-3xl font-semibold mb-1 text-[#7CA1D8]">بیش از</p>
              <p className="text-4xl font-bold mb-1 text-[#74CDF2]">25000</p>
            </div>
            <p className="text-2xl font-medium text-[#7CA1D8]">
              پزشک، روانشناس و ماما
            </p>
          </div>
          {/* Elemans End */}
          {/* BGC Start */}
          <div className="hidden lg:block absolute bottom-8 right-5 -z-50 w-1 h-1 bg-bgcColor1 rounded-full shadow-bgcShadow1"></div>
          <div className="absolute top-0 left-[40] lg:top-[-15px] lg:left-[-5px] -z-50 w-0 h- bg-bgcColor2 rounded-full shadow-bgcShadow2"></div>
          {/* BGC End */}
        </div>
      </div>
    </conrainer>
  );
}
