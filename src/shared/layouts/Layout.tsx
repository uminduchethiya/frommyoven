import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import ScrollToTop from "../components/ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-sand">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingContact />
      <ScrollToTop />
    </div>
  );
}
