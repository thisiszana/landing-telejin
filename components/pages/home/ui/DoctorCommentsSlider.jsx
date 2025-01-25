"use client";

import { useState } from "react";
import Image from "next/image";
import { icons } from "@/constant";

export default function DoctorCommentsSlider() {
  const doctors = Array(5).fill({
    name: "دکتر شاه ویسی",
    specialty: "متخصص زیبایی",
    comment: "بخوا برا تله ژن، بهترین سایته، ناز و عظمت ... دیزاینه که‌ی خواس",
    image: "/images/comDoctor.png",
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % doctors.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  return (
    <div className="max-w-screen-lg m-auto lg:pb-8 relative px-6 lg:px-8 xl:px-0">
      <div className="flex max-lg:mb-[30px] justify-center mt-0 sm:mt-[64px] px-6">
        <h2 className="text-center lg:text-2xl text-[#2c0767] font-semibold">
          نظرات پزشکان درباره تله ژن
        </h2>
      </div>
      <div className="relative mt-[50px] lg:mt-[15px] flex justify-center items-center bg-sliderGradient sm:w-full h-[350px] sm:max-h-[172px] rounded-[27px] mx-auto">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "block" : "hidden"
            } p-6 text-white flex items-center w-full sm:flex-col sm:gap-8 relative`}
          >
            <Image
              src={doctor.image}
              width={200}
              height={200}
              alt={doctor.name}
              className="w-[191px] h-[191px] sm:w-[277px] sm:h-[277px] object-cover absolute -top-[95px] sm:-top-[110px] right-[50%] max-sm:translate-x-[50%] sm:right-[50px]"
            />

            <div className="flex-1 text-center lg:text-right max-sm:mt-[80px]">
              <h3 className="text-[32px] leading-[49.6px] font-bold">
                {doctor.name}
              </h3>
              <p className="text-[16px] leading-[24.8px] font-bold text-[#8bacff] max-sm:mt-2">
                {doctor.specialty}
              </p>
              <p className="text-[16px] leading-[24.8px] font-medium mt-4">
                {doctor.comment}
              </p>
            </div>
          </div>
        ))}
        <div className="absolute top-1/2 left-4 lg:left-8 -translate-y-1/2 cursor-pointer z-50">
          <button onClick={handlePrev}>
            <svg
              width="33"
              height="35"
              viewBox="0 0 33 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.2087 16.1001V18.9001C32.2087 19.673 31.9717 20.3329 31.4978 20.8798C31.0238 21.4267 30.4077 21.7001 29.6494 21.7001H14.2494L20.6587 28.1313C21.2129 28.6563 21.49 29.3126 21.49 30.1001C21.49 30.8876 21.2129 31.5438 20.6587 32.0688L19.0181 33.7313C18.4785 34.2709 17.8223 34.5407 17.0494 34.5407C16.291 34.5407 15.6275 34.2709 15.0587 33.7313L0.818103 19.4688C0.27852 18.9293 0.00872803 18.273 0.00872803 17.5001C0.00872803 16.7418 0.27852 16.0782 0.818103 15.5095L15.0587 1.29072C15.6129 0.736556 16.2764 0.459473 17.0494 0.459473C17.8077 0.459473 18.4639 0.736556 19.0181 1.29072L20.6587 2.90947C21.2129 3.46364 21.49 4.12718 21.49 4.9001C21.49 5.67301 21.2129 6.33656 20.6587 6.89072L14.2494 13.3001H29.6494C30.4077 13.3001 31.0238 13.5735 31.4978 14.1204C31.9717 14.6673 32.2087 15.3272 32.2087 16.1001Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 right-4 lg:right-8 -translate-y-1/2 cursor-pointer z-50">
          <button onClick={handleNext}>
            <svg
              width="33"
              height="35"
              viewBox="0 0 33 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00877762 16.1001V18.9001C0.00877762 19.673 0.245758 20.3329 0.719717 20.8798C1.19367 21.4267 1.80982 21.7001 2.56815 21.7001H17.9682L11.5588 28.1313C11.0046 28.6563 10.7275 29.3126 10.7275 30.1001C10.7275 30.8876 11.0046 31.5438 11.5588 32.0688L13.1994 33.7313C13.739 34.2709 14.3952 34.5407 15.1682 34.5407C15.9265 34.5407 16.59 34.2709 17.1588 33.7313L31.3994 19.4688C31.939 18.9293 32.2088 18.273 32.2088 17.5001C32.2088 16.7418 31.939 16.0782 31.3994 15.5095L17.1588 1.29072C16.6046 0.736556 15.9411 0.459473 15.1682 0.459473C14.4098 0.459473 13.7536 0.736556 13.1994 1.29072L11.5588 2.90947C11.0046 3.46364 10.7275 4.12718 10.7275 4.9001C10.7275 5.67301 11.0046 6.33656 11.5588 6.89072L17.9682 13.3001H2.56815C1.80982 13.3001 1.19367 13.5735 0.719717 14.1204C0.245758 14.6673 0.00877762 15.3272 0.00877762 16.1001Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden lg:flex justify-center lg:mt-6">
        {doctors.map((_, index) => (
          <button
            key={index}
            className={`w-[6px] h-[6px] rounded-full mx-1 ${
              index === currentSlide ? "bg-primary" : "bg-[#aaaaaa]"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      <div className="hidden sm:block absolute lg:top-[250px] lg:left-[-70px] -z-50 bg-bgcColor2 rounded-full shadow-bgcShadow2"></div>
      <div className="block sm:hidden absolute top- left-[90px] -z-50 bg-bgcColor7 rounded-full shadow-bgcShadow8"></div>
    </div>
  );
}
