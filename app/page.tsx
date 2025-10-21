import React from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonial";

export default function Page() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <Nav />
      <Hero />
      <Services />
      <Menu />
      <CTA />
      <Gallery />
      <Testimonials />

      <Footer />
    </main>
  );
}
