import HeroSection from "./ui/HeroSection";
import Services from "./ui/Services";
import OtherServices from "./ui/OtherServices";
import Expertises from "./ui/Expertises";
import MainBanner from "./ui/MainBanner";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-screen-xl">
      <HeroSection />
      <section className="relative">
        <Services />
        <OtherServices />
        <div className="block lg:hidden absolute bottom-[112px] right-5 -z-50 bg-bgcColor1 rounded-full shadow-bgcShadow3"></div>
      </section>
      <Expertises />
      <MainBanner />
    </main>
  );
}
