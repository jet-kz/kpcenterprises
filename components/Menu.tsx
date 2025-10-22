"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdRestaurantMenu, MdBakeryDining, MdPublic } from "react-icons/md";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

export default function Menu() {
  const categories = [
    {
      name: "Main Course",
      icon: <MdRestaurantMenu size={22} />,
      dishes: [
        {
          name: "Grilled Chicken Suya",
          price: "₦9,500",
          desc: "Tender chicken skewers with signature suya spice blend.",
        },
        {
          name: "Seafood Risotto",
          price: "₦13,000",
          desc: "Creamy risotto with prawns, calamari, and a hint of lemon zest.",
        },
        {
          name: "Beef Tenderloin",
          price: "₦14,500",
          desc: "Charred to perfection with herb jus and mashed yam puree.",
        },
      ],
    },
    {
      name: "Intercontinental",
      icon: <MdPublic size={22} />,
      dishes: [
        {
          name: "Pasta Alfredo",
          price: "₦8,000",
          desc: "Classic creamy sauce with parmesan and grilled chicken.",
        },
        {
          name: "Thai Coconut Curry",
          price: "₦10,500",
          desc: "Spicy coconut curry with vegetables and jasmine rice.",
        },
        {
          name: "Steak Frites",
          price: "₦12,000",
          desc: "Seared sirloin served with crispy fries and peppercorn sauce.",
        },
      ],
    },
    {
      name: "Pastries & Drinks",
      icon: <MdBakeryDining size={22} />,
      dishes: [
        {
          name: "Chocolate Lava Cake",
          price: "₦4,000",
          desc: "Rich molten chocolate center with vanilla drizzle.",
        },
        {
          name: "Berry Parfait",
          price: "₦3,500",
          desc: "Layered yogurt, granola, and seasonal berries.",
        },
        {
          name: "Tropical Mocktails",
          price: "₦2,500",
          desc: "Refreshing blends of pineapple, mint, and citrus.",
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Main Course");

  const active = categories.find((cat) => cat.name === activeCategory)!;

  return (
    <section
      id="menu"
      className="py-20 bg-gradient-to-b from-white via-[#fffbe6] to-[#f1e7bd]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-black"
        >
          Our Signature Menu
        </motion.h2>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our diverse culinary offerings handcrafted to delight every
          palate.
        </p>

        {/* Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
            ${
              activeCategory === cat.name
                ? "bg-black/70 backdrop-blur-lg text-white shadow-md"
                : "bg-white border border-[#ffe8a3] text-black hover:bg-[#f4f4a0]"
            }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Dish List */}
        <motion.div
          key={activeCategory}
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {active.dishes.map((dish) => (
            <motion.div
              key={dish.name}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-[#ffe8a3]"
              whileHover={{ y: -6 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-black">
                  {dish.name}
                </h3>
                <span className="text-[#d4af37] font-medium">{dish.price}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{dish.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
