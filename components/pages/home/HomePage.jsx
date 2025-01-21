import React from "react";
import HeroSection from "./ui/HeroSection";
import Services from "./ui/Services";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-screen-xl">
      <HeroSection />
      <section className="relative">
        <Services />
      </section>
    </main>
  );
}
