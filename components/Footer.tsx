"use client";
import React from "react";
import Image from "next/image";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#6b3e26] text-white pt-16 pb-10" id="contact">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ---------- Logo & Contact ---------- */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/kplogo.jpg"
              alt="KP Culinary Enterprises Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-2xl font-bold">KPC Enterprises</span>
          </div>
          <p>
            Plot 2, 37th Street, DDPA Ugborikoko, Uvwie, Delta State — Nigeria
          </p>
          <p className="flex items-center gap-2">
            <MdEmail className="text-[#d4af37]" size={20} />
            <a href="mailto:kpc.enterprises@gmail.com" className="underline">
              kpc.enterprises@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <MdPhone className="text-[#d4af37]" size={20} />
            <a href="tel:+2347080215998" className="underline">
              07080215998
            </a>
          </p>
        </div>

        {/* ---------- Why Choose Us ---------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-[#d4af37] inline-block pb-1">
            Why Choose Us
          </h3>
          <ul className="flex flex-col gap-2 text-[#fff7e6]">
            <li>✨ Exquisite Menu</li>
            <li>✨ High-Quality Ingredients</li>
            <li>✨ Professional Services</li>
            <li>✨ Highly Equipped</li>
          </ul>
        </div>

        {/* ---------- Quick Links ---------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-[#d4af37] inline-block pb-1">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-[#fff7e6]">
            <li>
              <a
                href="#menu"
                className="hover:text-[#d4af37] transition-colors"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-[#d4af37] transition-colors"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#d4af37] transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#d4af37] transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#d4af37] transition-colors">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-[#d4af37] pt-6 text-center text-sm text-[#fff7e6]">
        © {new Date().getFullYear()} KP Culinary Enterprises All rights reserved
      </div>
    </footer>
  );
}
