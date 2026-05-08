"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const societies = [
  { id: 1, name: "Green Valley", rating: "4.96", reviews: "20 reviews", image: "/society.png" },
  { id: 2, name: "Vibrant Vistas", rating: "4.96", reviews: "20 reviews", image: "/society.png" },
  { id: 3, name: "Sunrise Residency", rating: "4.96", reviews: "20 reviews", image: "/society.png" },
  { id: 4, name: "Royal Garden Society", rating: "4.96", reviews: "20 reviews", image: "/society.png" },
];

function StarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="#C89B3C" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function PremiumSocieties() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Premium Society in Bengaluru</h2>
        <Link
          href="#"
          className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#C89B3C] transition-colors group"
        >
          See All Society
          <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <ExternalLinkIcon />
          </span>
        </Link>
      </div>

      {/* Cards */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center hover:border-[#C89B3C] hover:text-[#C89B3C] transition-colors"
          aria-label="Previous societies"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-1 lg:grid lg:grid-cols-4 lg:overflow-visible"
        >
          {societies.map((society, idx) => (
            <article
              key={society.id}
              className="relative min-w-[200px] sm:min-w-[230px] lg:min-w-0 rounded-xl overflow-hidden group cursor-pointer flex-shrink-0"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Background Image */}
              <Image
                src={society.image}
                alt={`${society.name} premium society`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 200px, (max-width: 1200px) 25vw, 300px"
                loading={idx < 2 ? "eager" : "lazy"}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 flex flex-col gap-1">
                <h3 className="text-white font-bold text-sm leading-snug">{society.name}</h3>
                <div className="flex items-center gap-1">
                  <StarIcon />
                  <span className="text-white text-xs font-semibold">{society.rating}</span>
                  <span className="text-gray-300 text-xs">({society.reviews})</span>
                </div>
                <Link
                  href="#"
                  className="flex items-center gap-0.5 text-white text-xs font-medium hover:text-[#C89B3C] transition-colors mt-0.5 w-fit"
                >
                  More Details
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center hover:border-[#C89B3C] hover:text-[#C89B3C] transition-colors"
          aria-label="Next societies"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
