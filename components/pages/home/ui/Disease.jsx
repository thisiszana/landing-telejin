import Image from "next/image";
import Link from "next/link";

export default function Disease() {
  const diseaseEl = Array(9)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      image: "/images/disease.png",
      title: "سرماخوردگی ویروسی",
      btnTitle: "شروع درمان",
      href: "/",
    }));
  return (
    <div className="max-w-screen-lg mx-auto relative">
      <div className="hidden lg:block absolute top-0 left-0 -z-50 w-1 h-1 bg-bgcColor5 rounded-full shadow-bgcShadow6"></div>
      <div className="flex justify-center mt-[48px] lg:mt-[65px] ">
        <h2 className="font-bold text-[16px] lg:text-[24px] leading-[24.8px] lg:leading-[37.2px] text-[#2c0767]">
          علائم و بیماری های شایع
        </h2>
      </div>
      <div className="max-sm:overflow-x-auto no-scrollbar py-8 mt-2">
        <div className="max-sm:w-[730px] grid grid-cols-3 gap-4 lg:gap-5 max-xl:px-6 ">
          {diseaseEl.map((dis) => (
            <Link href={dis.href} key={dis.id}>
              <div className="shadow-headerShadow w-full h-[103px] lg:h-[114px] flex justify-between items-center gap-2 lg:gap-[10px] rounded-[20px] bg-none lg:bg-[#ffffff91] max-lg:backdrop-blur-[107.4] px-3 lg:px-8">
                <Image
                  src={dis.image}
                  width={70}
                  height={70}
                  alt={dis.title}
                  className="w-[72px] h-[72px] border-[2px] rounded-full border-primary"
                />
                <div>
                  <h4 className="font-bold text-[14px] leading-[21.7px] lg:text-[20px] lg:leading-[31px] text-black mb-1">
                    {dis.title}
                  </h4>
                  <div className="flex items-center gap-2 max-sm:mr-2">
                    <span className="text-[11px] leading-[17.5px] lg:text-[13px] lg:leading-[20.15px] text-primary font-bold">
                      {dis.btnTitle}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 13"
                      width="15"
                      fill="none"
                      stroke="#000"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                        d="m1.088 6.5 5 5m-5-5 5-5m-5 5h8.75m4.584 0h-2.084"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="hidden rounded-[50px] lg:flex items-center justify-center cursor-pointer bg-primary text-white text-[13px] w-[126.97px] h-[36.89px] leading-[20.15px] mt-2">
          مشاهده بیشتر
        </button>
      </div>
      <div className="block lg:hidden absolute bottom-10 right-16 overflow-visible -z-50 w-1 h-1 bg-bgcColor3 rounded-full shadow-bgcShadow4"></div>
    </div>
  );
}
