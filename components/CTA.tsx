"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CTA() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    location: "",
    time: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `👋 Hi, my name is ${formData.firstName} ${
      formData.lastName
    }.
I’d like to book your catering service for a *${formData.eventType}*.

Here are my details:
---------------------------------
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🗓️ Date: ${formData.eventDate}
🕒 Time: ${formData.time}
👥 Guests: ${formData.guests}
📍 Location: ${formData.location}

📝 Additional Details:
${formData.details || "N/A"}

Please get back to me with a quote. Thank you! 🙏`;

    const whatsappNumber = "2347080215998"; // Your WhatsApp number with country code
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="cta"
      className="py-16 bg-gradient-to-b from-white via-[#fffbe6] to-[#f1e7bd]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-10 items-center">
        {/* ---------- TEXT SECTION ---------- */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-black">
            Ready to plan your event?
          </h3>
          <p className="mt-3 text-gray-600 max-w-md mx-auto lg:mx-0">
            Let’s craft a menu and experience that fits your story. Fill out the
            form below and we’ll reach out to you on WhatsApp.
          </p>
        </motion.div>

        {/* ---------- FORM SECTION ---------- */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex-1 rounded-2xl p-6 bg-white shadow-xl border border-[#f2e2c4]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              required
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] outline-none"
              placeholder="First Name"
            />
            <input
              required
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] outline-none"
              placeholder="Last Name"
            />
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] outline-none"
              placeholder="Email Address"
            />
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] outline-none"
              placeholder="Phone Number"
            />
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] outline-none"
              required
            >
              <option value="">Select Event Type</option>
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Birthday</option>
              <option>Private Dinner</option>
              <option>Outdoor Party</option>
              <option>Others</option>
            </select>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] outline-none"
              required
            />
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] outline-none"
              placeholder="Number of Guests"
              min={1}
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] outline-none"
              required
            />
          </div>

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] outline-none w-full"
            placeholder="Event Location"
            required
          />

          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="mt-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] outline-none w-full"
            placeholder="Additional Details or Requests"
            rows={4}
          ></textarea>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-black/70 backdrop-blur-lg text-white font-medium hover:bg-[#28211d] hover:scale-105 transition-transform duration-300"
            >
              Send via WhatsApp
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
