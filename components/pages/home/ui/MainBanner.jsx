import Image from "next/image";
import Link from "next/link";

export default function MainBanner() {
  return (
    <div className="max-w-screen-lg m-auto px-6 lg:px-0">
      <div className="m-auto px-6 lg:px-8 p-6 lg:mt-16 relative h-[335px] lg:h-[172px] flex flex-col gap-4">
        <div className="w-full h-80 transition-opacity duration-700 ease-in-out opacity-100">
          <Link href="/" className="absolute h-full w-full top-0 right-0">
            <div
              style={{
                background: "linear-gradient(to left, #670707, #f36b6b)",
              }}
              className="h-full w-full flex flex-col lg:flex-row justify-between items-center px-[9px] lg:px-14 rounded-[27px]"
            >
              <Image
                src="/images/mainBanner/banner1.png"
                width={300}
                height={300}
                alt="بننر"
                className="w-[229.33px] h-[172px] object-cover scale-x-[-1]"
              />
              <div className="max-lg:w-full flex flex-col gap-4 lg:gap-1 text-center max-lg:mb-7">
                <h3 className="hidden lg:block font-[900] text-[40px] leading-[62px] text-white max-lg:w-full max-lg:py-2">
                  مکمل های Creativity
                </h3>
                <h3
                  className="block lg:hidden font-bold text-[32px] leading-[49.6px] text-white max-lg:w-full rounded-[14px] max-lg:py-2"
                  style={{ backgroundColor: "#550000" }}
                >
                  مکمل های Creativity
                </h3>
                <p className="text-[20px] leading-[31px] text-white font-normal">
                  ارسال به سراسر ایران{" "}
                </p>
                <p className="text-[15px] leading-[23.25px] text-white">
                  {" "}
                  با مجوز غذا و دارو
                </p>
              </div>
              <Image
                src="/images/mainBanner/banner1.png"
                width={300}
                height={300}
                alt="بننر"
                className="hidden lg:block w-[229.33px] h-[172px] object-cover"
              />
            </div>
          </Link>
        </div>
        <div className="block lg:hidden absolute top-44 -left-0 overflow-visible -z-50 w-1 h-1 bg-bgcColor4 rounded-full shadow-bgcShadow5"></div>
      </div>
    </div>
  );
}
