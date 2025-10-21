"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-[#3a1d06]/95 backdrop-blur-sm shadow-lg text-white"
          : "bg-transparent text-white"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* ✅ Logo */}
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-[#d4af37] to-amber-600 p-[2px]">
            <div className="h-full w-full bg-black flex items-center justify-center rounded-full overflow-hidden">
              <Image
                src="/kplogo1.jpg"
                alt="KP Logo"
                width={70}
                height={70}
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <div className="text-lg font-semibold tracking-wide text-[#d4af37]">
            KP-Culinary
          </div>
        </div>

        {/* ✅ Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {["Home", "Gallery", "Contact"].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium hover:text-[#d4af37] transition-colors"
                  >
                    {item}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:text-[#d4af37]">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white text-amber-900 p-4 rounded-lg shadow-lg">
                  <div className="grid gap-3 w-[220px]">
                    {[
                      "Private Dining",
                      "Weddings",
                      "Corporate Events",
                      "Buffets & Outdoor Service",
                      "Personal Chef Hire",
                    ].map((s) => (
                      <NavigationMenuLink
                        key={s}
                        href="#contact"
                        className="hover:text-[#d4af37]"
                      >
                        {s}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Menu Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:text-[#d4af37]">
                  Menu
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white text-amber-900 p-4 rounded-lg shadow-lg">
                  <div className="grid gap-3 w-[250px]">
                    {[
                      "Grilled Suya Platter",
                      "Jollof Rice Royale",
                      "Ofada Rice & Ayamase",
                      "Seafood Pasta",
                      "Chicken Caesar Salad",
                      "Goat Meat Pepper Soup",
                      "Egusi Soup & Pounded Yam",
                      "Grilled Salmon Delight",
                      "Classic Cheeseburger",
                      "Chocolate Lava Cake",
                    ].map((m) => (
                      <NavigationMenuLink
                        key={m}
                        href={`#${m.toLowerCase().replace(/\s+/g, "-")}`}
                        className="hover:text-[#d4af37]"
                      >
                        {m}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* ✅ CTA + Mobile */}
        <div className="flex items-center gap-3">
          <a href="#contact">
            <Button
              className={clsx(
                "hidden md:inline-flex font-semibold rounded-full transition-all shadow-md",
                scrolled
                  ? "bg-[#d4af37] text-black hover:bg-amber-500"
                  : "bg-[#d4af37] text-black hover:bg-amber-500"
              )}
            >
              Book Event
            </Button>
          </a>

          {/* ✅ Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="mobile menu"
                className="md:hidden px-3 py-2 rounded-lg text-white"
              >
                <MenuIcon size={24} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-[#2b1302] text-white border-l border-[#d4af37]/30 p-6"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                  <Image
                    src="/kplogo1.jpg"
                    alt="KP Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="text-lg font-semibold text-[#d4af37]">
                    KP-Culinary
                  </span>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 text-lg font-medium">
                {["Home", "Services", "Menu", "Gallery", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={handleLinkClick}
                      className="hover:text-[#d4af37] transition-colors"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-[#d4af37]/40"></div>

              {/* CTA */}
              <a href="#contact" onClick={handleLinkClick}>
                <Button className="bg-[#d4af37] text-black w-full py-6 font-semibold text-base rounded-full hover:bg-amber-500 transition-all">
                  Book Event
                </Button>
              </a>

              {/* Footer inside nav */}
              <div className="mt-10 text-xs text-gray-300 text-center">
                <p>© {new Date().getFullYear()} KP Culinary Enterprise</p>
                <p className="text-[#d4af37] mt-1">Crafted with Passion 🍽️</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
