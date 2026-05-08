"use client";

import { useRef } from "react";
import Link from "next/link";
import PropertyCard, { Property } from "./PropertyCard";

interface PropertySectionProps {
  title: string;
  properties: Property[];
  variant?: "scheduled" | "top";
  seeAllLabel?: string;
}

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}

export default function PropertySection({
  title,
  properties,
  variant = "top",
  seeAllLabel = "See All Properties",
}: PropertySectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">{title}</h2>
        <Link
          href="#"
          className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#C89B3C] transition-colors group"
        >
          {seeAllLabel}
          <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <ExternalLinkIcon />
          </span>
        </Link>
      </div>

      {/* Cards + Arrows */}
      <div className="relative">
        {/* Left Arrow — hidden on mobile, visible on lg+ */}
        <button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center hover:border-[#C89B3C] hover:text-[#C89B3C] transition-colors"
          aria-label="Previous properties"
        >
          <ChevronIcon direction="left" />
        </button>

        {/* Scrollable / Grid Row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible"
        >
          {properties.map((property, idx) => (
            <div key={property.id} className="min-w-[280px] sm:min-w-[300px] lg:min-w-0">
              <PropertyCard property={property} variant={variant} priority={idx === 0} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center hover:border-[#C89B3C] hover:text-[#C89B3C] transition-colors"
          aria-label="Next properties"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </section>
  );
}

