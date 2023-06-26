import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-[90vh] relative">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
