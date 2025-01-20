import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

export default function PagesLayout({ children }) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
