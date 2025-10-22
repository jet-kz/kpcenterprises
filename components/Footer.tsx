"use client";
import React from "react";
import Image from "next/image";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      className="relative backdrop-blur-xl bg-gradient-to-b from-[#0b0b0b]/95 via-[#111]/90 to-[#000]/95 text-gray-300 py-12 border-t border-[#d4af37]/30 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
      id="contact"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ---------- Logo & Contact ---------- */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-[#d4af37] to-amber-600 p-[2px] shadow-md shadow-[#d4af37]/20">
              <div className="h-full w-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/kplogo.jpg"
                  alt="KP Culinary Enterprises Logo"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <span className="text-2xl font-bold text-[#d4af37]">
              KPC Enterprises
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Plot 2, 37th Street, DDPA Ugborikoko, Uvwie, Delta State — Nigeria
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <MdEmail className="text-[#d4af37]" size={20} />
            <a
              href="mailto:kpc.enterprises@gmail.com"
              className="underline hover:text-[#d4af37] transition-colors"
            >
              kpc.enterprises@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <MdPhone className="text-[#d4af37]" size={20} />
            <a
              href="tel:+2347080215998"
              className="underline hover:text-[#d4af37] transition-colors"
            >
              07080215998
            </a>
          </p>
        </div>

        {/* ---------- Why Choose Us ---------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-[#d4af37]/60 inline-block pb-1 text-[#fff7e6]">
            Why Choose Us
          </h3>
          <ul className="flex flex-col gap-2 text-[#fff7e6]/90">
            <li>✨ Exquisite Menu</li>
            <li>✨ High-Quality Ingredients</li>
            <li>✨ Professional Services</li>
            <li>✨ Highly Equipped</li>
          </ul>
        </div>

        {/* ---------- Quick Links ---------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-[#d4af37]/60 inline-block pb-1 text-[#fff7e6]">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-[#fff7e6]/90">
            {["Menu", "Gallery", "Contact", "Privacy", "Terms"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- Bottom Section ---------- */}
      <div className="relative mt-12 border-t border-[#d4af37]/40 pt-6 text-center text-sm text-[#fff7e6]/90">
        <p>
          © {new Date().getFullYear()} KP Culinary Enterprises — All rights
          reserved
        </p>
        <p className="text-[#d4af37] mt-1 font-medium">
          Crafted with Passion 🍽️
        </p>
      </div>

      {/* Subtle golden glow accent line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent"></div>
    </footer>
  );
}
