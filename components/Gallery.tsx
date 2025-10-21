"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Gallery() {
  const images = [
    "/event1.jpg",
    "/event2.jpg",
    "/kp5.jpg",
    "/food.jpg",
    "/burger.jpg",
    "/kp4.jpg",
  ];
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-10 text-center"
          style={{ fontFamily: "var(--display-font)" }}
        >
          Our Culinary <span className="text-[#d4af37]">Gallery</span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1.15}
          spaceBetween={18}
          centeredSlides
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.3 },
          }}
          pagination={{
            clickable: true,
            el: paginationRef.current, // point to external element
            renderBullet: (index, className) => {
              return `<span class="${className} !bg-[#6b3e26] !opacity-70 hover:!opacity-100"></span>`;
            },
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.pagination.el = paginationRef.current;
          }}
          className="pb-2"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src={src}
                  alt={`gallery-${i}`}
                  width={1200}
                  height={800}
                  className="object-cover w-full h-64 sm:h-80 lg:h-96"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination tracker below images */}
        <div
          ref={paginationRef}
          className="flex justify-center mt-6 space-x-2"
        ></div>
      </div>
    </section>
  );
}
