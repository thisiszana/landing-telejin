import { icons, images } from "@/constant";
import { MenuBars } from "../icons/Icon";
import Link from "next/link";
import Image from "next/image";

export default function NavMobile() {
  return (
    <nav className="block lg:hidden">
      <div className="grid grid-cols-5">
        <div className="col-span-1 flex items-center">
          <button className="w-[30px] h-[30px] text-[30px]">
            {icons.menuBurger}
          </button>
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <Link href="/" className="w-[53.47px] h-[40px] flex flex-col items-center justify-center">
            <Image src={images.logo} width={100} height={100} alt="لوگو" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
