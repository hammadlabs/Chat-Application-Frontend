import { type ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function HeaderFooterWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
