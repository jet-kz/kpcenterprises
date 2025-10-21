"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  MdCake,
  MdEvent,
  MdRestaurant,
  MdLocalShipping,
  MdPeople,
} from "react-icons/md";

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* ---------- TEXT SECTION ---------- */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }} // 👈 Animate every time visible
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900"
            variants={fadeInLeft}
          >
            Culinary Artistry <span className="text-[#d4af37]">Tailored</span>{" "}
            to Your Occasion
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            From intimate dinners to grand weddings and corporate events, we
            craft culinary experiences that taste as exquisite as they look.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <a
              href={`https://wa.me/2347080125998?text=${encodeURIComponent(
                "Hello 👋, I’d like to place an order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#6b3e26] text-white font-medium rounded-full hover:bg-[#8b542d] hover:scale-105 transition-transform duration-300"
            >
              Place an Order
            </a>

            <a
              href="#menu"
              className="inline-block text-sm underline underline-offset-4 text-[#d4af37] hover:text-[#6b3e26] transition-colors"
            >
              Explore Menu
            </a>
          </motion.div>
        </motion.div>

        {/* ---------- IMAGE SECTION ---------- */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }} // 👈 Animate every scroll entry
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/kp.jpeg"
                alt="KP Culinary Showcase"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
