import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Header() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-8 z-50 mt-6 lg:mt-[40px]">
      <NavDesktop />
      <NavMobile />
    </div>
  );
}
