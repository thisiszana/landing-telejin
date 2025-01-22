import Image from "next/image";
import Link from "next/link";

export default function Expertises() {
  const expertisesEl = Array(5)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      image: "/images/liver.jfif",
      title: "کبد و غدد",
      href: "/",
    }));

  return (
    <div className="max-w-screen-lg xl:max-w-screen-xl m-auto px-0 lg:px-8 max-lg:pb-[42px]">
      <div className="flex lg:justify-center mt-[30px] lg:mt-[64px] px-6">
        <h2 className="text-[16px] leading-[24.8px] lg:text-2xl text-[#2c0767] font-semibold relative top-6 ">
          تخصص‌های پردرخواست
        </h2>
      </div>
      <div className="pt-6 pb-8 max-lg:overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex justify-start w-fit lg:justify-center flex-row-reverse gap-4 lg:w-full mt-4 lg:mt-12 scroll-smooth relative max-lg:px-6">
          <div className="hidden lg:block absolute -bottom-[80px] -right-[100px] -z-50 w-1 h-1 bg-bgcColor3 rounded-full shadow-bgcShadow4"></div>
          {expertisesEl.map((ser) => (
            <Link
              href={ser.href}
              key={ser.id}
              className="inline-block font-medium transition-all"
            >
              <div className="flex flex-col items-center justify-around shadow-headerShadow px-1 pt-4 lg:pt-6  min-w-[140px] lg:w-[190px] h-[200px] lg:h-[220px]  bg-white rounded-[20px] overflow-hidden  headerShadow">
                <Image
                  src={ser.image}
                  width={250}
                  height={250}
                  alt={ser.title}
                  className="w-[82px] h-[82px] border-2 border-primary rounded-full p-[2px]"
                />
                <div className="mb-2">
                  <h4 className="font-bold text-black text-[16px] lg:text-[20px] leading-[24.8px] lg:leading-[31px] mt-3 text-center">
                    {ser.title}
                  </h4>
                  <button className="rounded-[50px] flex justify-center items-center transition-all cursor-pointer bg-primary text-white text-[10px] lg:text-[13px] leading-[15.5px] lg:leading-[20.15px] w-[118.97px] h-[32.71px] mt-2">
                    مشاهده
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
