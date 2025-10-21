"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [showChat, setShowChat] = useState(false);

  const phoneNumber = "2347080215998"; // your WhatsApp number
  const message = `Hello 👋, my name is ______. 
I’d love to place an event booking or make an inquiry.`;

  useEffect(() => {
    if (showChat) {
      const timer = setTimeout(() => setShowChat(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showChat]);

  const handleOpenWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={() => setShowChat((prev) => !prev)}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
        animate={{
          y: [0, -12, 0, -8, 0, -6, 0], // bigger and smoother bounce
          rotate: [0, 5, -5, 3, -3, 0], // subtle rotation for liveliness
          scale: [1, 1.08, 1, 1.05, 1], // slight scaling
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 2.5, // slower for smoothness
          ease: "easeInOut",
        }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={30} />
      </motion.button>

      {/* WhatsApp Chat Popup */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-20 right-6 bg-white rounded-2xl shadow-xl w-72 p-4 border border-gray-200 z-50"
          >
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  Event Contact
                </h4>
                <p className="text-xs text-gray-500">
                  Typically replies within minutes
                </p>
              </div>
            </div>

            <div className="mt-3 text-sm text-gray-600 leading-relaxed">
              👋 Hi there! Click below to place an order or book your event.
            </div>

            <button
              onClick={handleOpenWhatsApp}
              className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
              Chat on WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
