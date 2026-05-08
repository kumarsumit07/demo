"use client";

import { useState } from "react";

const filterChips = [
  "2.5 BHK",
  "3 & 4 BHK",
  "4 & ABOVE BHK",
  "VILLA",
  "Apartment",
  "Rent",
  "Sell",
];

export default function SearchBar() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("Bengaluru");

  return (
    <section className="w-full bg-white pt-6 pb-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-4">
        {/* Search Row */}
        <div className="flex items-center rounded-xl bg-gray-100 overflow-hidden transition-all duration-300 focus-within:bg-gray-200">
          {/* City Selector */}
          <div className="relative shrink-0">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="appearance-none pl-4 pr-9 py-3 text-sm text-gray-700 font-semibold bg-transparent cursor-pointer focus:outline-none"
              aria-label="Select city"
            >
              <option>Bengaluru</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Pune</option>
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gray-300" />
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by project, property, or location"
            className="flex-1 px-6 py-3 text-sm text-gray-700 placeholder-gray-500 bg-transparent focus:outline-none"
            aria-label="Search properties"
          />

          {/* Search Icon */}
          <button
            className="px-5 py-3 hover:bg-gray-200 transition-colors"
            aria-label="Search"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
              />
            </svg>
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-3 flex-wrap pl-1">
          <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-gray-600 bg-gray-100 rounded-lg shrink-0">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4h18M8 12h8M11 20h2"
              />
            </svg>
            Filters
          </div>
          {filterChips.map((chip) => (
            <button
              key={chip}
              onClick={() => setActiveFilter(activeFilter === chip ? null : chip)}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition-all duration-300 ${
                activeFilter === chip
                  ? "bg-gradient-to-r from-[#C89B3C] to-[#E6B84A] text-white border-transparent shadow-sm"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:border-[#C89B3C] hover:text-[#C89B3C]"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
