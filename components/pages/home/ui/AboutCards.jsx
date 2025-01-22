import Image from "next/image";

export default function AboutCards() {
  return (
    <div className="max-w-screen-lg mx-auto px-6 lg:px-8 xl:max-w-screen-lg xl:p-0 mt-10 lg:mt-20 relative">
      <div className="absolute bottom-40 lg:top-40 right-0 lg:-right-24 -z-50 w-1 h-1 bg-bgcColor6 rounded-full shadow-bgcShadow7"></div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="max-lg:order-2 lg:h-[525px] grid grid-rows-3 gap-6">
          <div className="flex justify-between items-center max-sm:flex-col-reverse max-sm:gap-4 rounded-[30px] backdrop-blur-[107] shadow-headerShadow bg-none lg:bg-white p-4 sm:p-10">
            <div className="max-sm:text-center">
              <h6 className="font-bold text-[20px] leading-[31px] text-black">
                حفظ حریم شخصی و اطلاعات کاربر
              </h6>
              <p className="text-[20px] leading-[31px] font-bold py-2 text-primary max-sm:pb-0">
                امن و سریع
              </p>
            </div>
            <Image
              alt="حریم شخصی"
              src="/images/aboutCards/privacy.webp"
              width={200}
              height={190}
              className="w-20 sm:w-24"
            />
          </div>

          <div className="flex justify-between items-center max-sm:flex-col-reverse max-sm:gap-4 shadow-headerShadow rounded-[30px] backdrop-blur-[107] bg-none lg:bg-white p-4 sm:p-10">
            <div className="max-sm:text-center">
              <h6 className="font-bold text-[20px] leading-[31px] text-black">
                دریافت خدمات در کمترین زمان ممکن
              </h6>
              <p className="text-[20px] leading-[31px] font-bold py-2 max-sm:pb-0 text-primary">
                بدون اتلاف زمان و هزینه
              </p>
            </div>
            <Image
              alt="خدمات سریع"
              src="/images/aboutCards/time.webp"
              width={200}
              height={197}
              className="w-20 sm:w-24"
            />
          </div>

          <div className="flex justify-between items-center max-sm:flex-col-reverse max-sm:gap-4 shadow-headerShadow rounded-[30px] backdrop-blur-3xl bg-none lg:bg-white p-4 sm:p-10">
            <div className="max-sm:text-center">
              <h6 className="font-bold text-[20px] leading-[31px] text-black">
                دسترسی به تمام پزشکان ایران
              </h6>
              <p className="text-[20px] leading-[31px] font-bold py-2 max-sm:pb-0 text-primary">
                تنها با چند کلیک
              </p>
            </div>
            <Image
              alt="دسترسی به پزشکان"
              src="/images/aboutCards/location.webp"
              width={201}
              height={194}
              className="w-20 sm:w-24"
            />
          </div>
        </div>

        <div className="max-lg:order-1 lg:h-[526px] lg:w-[505px] h-full w-full backdrop-blur-[107] flex flex-row-reverse lg:flex-col items-center justify-between lg:justify-center lg:gap-6 shadow-headerShadow rounded-[30px] bg-white max-sm:pl-2 max-sm:pr-5 max-lg:px-8 max-lg:py-6">
          <div className="relative w-[203px] h-[199.21px] lg:w-[286px] lg:h-[280.65px] overflow-hidden">
            <Image
              alt="ویزیت تلفنی"
              src="/images/aboutCards/doctor.png"
              width={286}
              height={286}
              className="absolute inset-0 w-full h-full object-cover rounded-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-100"></div>
          </div>
          <div className="flex flex-col items-start lg:items-center justify-center gap-3 ">
            <h4 className="font-bold text-[15px] lg:text-[24px] leading-[24.8px] lg:leading-[37.2px] text-black">
              ویزیت تلفنی و یا گفت گوی متنی
            </h4>
            <p className="font-bold text-[16px] lg:text-[20px] leading-[24.8px] lg:leading-[31px] text-primary">
              با تعرفه‌های اقتصادی
            </p>
            <button className="font-bold bg-primary px-10 py-2 text-white rounded-[50px]">
              تعرفه ها
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
