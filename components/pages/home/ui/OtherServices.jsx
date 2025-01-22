import Image from "next/image";
import Link from "next/link";

export default function OtherServices() {
  return (
    <div className="max-w-screen-xl lg:max-w-screen-lg m-auto px-6 lg:px-8 xl:px-0 lg:mt-6">
      <h2 className="font-bold text-[16px] leading-[24.8px] text-start block lg:hidden text-[#2c0767]">
        درخواست سایر خدمات
      </h2>
      <div className="grid grid-cols-12 gap-4 max-lg:mt-3">
        <Link href="/" className="inline-block col-span-7 lg:col-span-4 flex-1">
          <div className="h-full lg:h-28 bg-[#fbe8e4] flex max-lg:flex-col justify-evenly items-center relative rounded-[20px] shadow-headerShadow">
            <div className="relative w-[72px] h-[74px] overflow-hidden group">
              <Image
                src="/images/otherServices/ser2.png"
                width={120}
                height={120}
                alt="other services image"
                className="absolute inset-0 w-full h-full object-cover rounded-[5px] z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#fceeea] via-[#fbebe8] to-[#fbeae6] opacity-90 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col items-center">
              <h5 className="font-bold text-[#2c0767] text-[13px] lg:text-[14px] leading-[20.15px] lg:leading-[21.7px] text-center ">
                خدمات زیبایی و جوانسازی
              </h5>
              <p className="text-[12px] py-2 text-[#2c0767] leading-[18.6px] max-lg:p-0 pb-0">
                ویژه بانوان و آقایان
              </p>
              <p className="text-[10px] leading-[15.5px] py-1 text-[#ac95d1] max-lg:p-0 mt-1">
                ۲۵۳۸ مورد
              </p>
            </div>
            <button className="rounded-[50px] flex justify-center items-center cursor-pointer bg-[#8000ff] text-white lg:hidden w-[86px] h-6  text-xs">
              مشاهده
            </button>
          </div>
        </Link>

        <div className="col-span-5 lg:col-span-8 flex flex-col gap-4 lg:flex-row">
          <Link href="/" className="inline-block flex-1">
            <div className="bg-white flex max-lg:flex-col justify-center gap-2 items-center h-[114px] relative rounded-[20px] shadow-headerShadow">
              <div className="relative">
                <Image
                  src="/images/otherServices/ser3.png"
                  width={120}
                  height={120}
                  alt="other services image"
                  className="w-[77px] h-[45px] lg:w-[107px] lg:h-[66px] z-10 relative"
                />
                <div className="absolute top-7 left-[55px] lg:top-7 lg:left-[45px] bg-cardColor1 rounded-full shadow-cardShadowSm1 lg:shadow-cardShadowMain1"></div>
              </div>
              <h5 className="font-bold text-[#2c0767] text-[13px] lg:text-[20px] leading-[20.15px] lg:leading-[31px] text-center">
                سفارش آنلاین دارو
              </h5>
            </div>
          </Link>
          <Link href="/" className="inline-block flex-1">
            <div className="bg-white flex max-lg:flex-col justify-center gap-2 items-center h-[114px] relative rounded-[20px] shadow-headerShadow">
              <div className="relative">
                <Image
                  src="/images/otherServices/ser1.png"
                  width={120}
                  height={120}
                  alt="other services image"
                  className="w-[89.82px] h-[52px] lg:w-[117px] lg:h-[70px] z-10 relative"
                />
                <div className="absolute top-[17px] left-[20px] bg-cardColor1 rounded-full shadow-cardShadowSm1 lg:shadow-cardShadowMain1"></div>
              </div>
              <h5 className="font-bold text-[#2c0767] text-[13px] lg:text-[20px] leading-[20.15px] lg:leading-[31px] text-center">
                آمبولانس
              </h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
