"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// ✅ Animation for text
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const images = ["/bowl.jpg", "/kp6.jpg", "/kp4.jpg"];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden"
      id="home"
    >
      {/* ✅ Background slideshow */}
      {images.map((src, index) => (
        <motion.div
          key={src}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={src}
            alt="Culinary background"
            fill
            priority={index === 0}
            className="object-cover object-center brightness-[1.05] contrast-[1.1] saturate-[1.2]"
          />
          {/* ✅ Add a soft overlay for clarity */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
        </motion.div>
      ))}

      {/* ✅ Text Content */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="relative text-center max-w-3xl px-6 z-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#fef9c3] drop-shadow-2xl">
          Modern Catering <span className="text-[#d4af37]">Crafted</span> for
          Moments
        </h1>
        <p className="mt-4 text-lg text-gray-100 drop-shadow-lg">
          We design unforgettable dining experiences — private dinners,
          weddings, and bespoke events that delight every sense.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-[#d4af37] hover:bg-amber-500 text-black px-8 py-3 rounded-full font-semibold transition"
          >
            Start Planning
          </a>
          <a
            href="#menu"
            className="inline-block px-8 py-3 border border-white/70 rounded-full hover:bg-white/10 transition"
          >
            View Menu
          </a>
        </div>
      </motion.div>
    </section>
  );
}
