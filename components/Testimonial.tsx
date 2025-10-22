"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const quotes = [
    {
      who: "Oluchi — Bride",
      text: "They made our wedding evening unforgettable, every dish was a memory.",
    },
    {
      who: "Tunde — MD",
      text: "Professional, punctual and delicious. Highly recommend for corporate events.",
    },
  ];

  return (
    <section className="py-16 bg-[#f2f2b7] backdrop-blur-sm relative overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-[#6b3e26]/10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-black text-center"
        >
          What People Say
        </motion.h2>

        <div className="mt-10 grid gap-8">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white/30 bg-white/30 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.15)] transition-shadow duration-300"
            >
              <div className="text-gray-800 italic text-lg">“{q.text}”</div>
              <div className="mt-4 font-semibold text-black">{q.who}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
