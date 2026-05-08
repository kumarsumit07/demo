"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface Property {
  id: number;
  title: string;
  type: string;
  price: string;
  sqft: string;
  furnishing: string;
  floor: string;
  available: string;
  location: string;
  image: string;
  badge?: "scheduled" | "top";
}

interface PropertyCardProps {
  property: Property;
  variant?: "scheduled" | "top";
  priority?: boolean;
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24"
      fill={filled ? "#ef4444" : "none"}
      stroke={filled ? "#ef4444" : "#555"}
      strokeWidth={2} aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.948-1.42A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth={2} aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="#C89B3C" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function SqftIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1" />
    </svg>
  );
}

function FurnishIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth={1.8} aria-hidden="true">
      <path d="M3 11V17H21V11" />
      <path d="M3 11C3 9.34 4.34 8 6 8H18C19.66 8 21 9.34 21 11" />
      <path d="M5 17V19M19 17V19" />
    </svg>
  );
}

function FloorIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth={1.8} aria-hidden="true">
      <path d="M3 21H21" />
      <path d="M3 16H21" />
      <path d="M3 11H21" />
      <path d="M3 6H21" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export default function PropertyCard({
  property,
  variant = "top",
  priority = false,
}: PropertyCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
      {/* Image Container */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <Image
          src={property.image}
          alt={`${property.title} - ${property.type}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
        />

        {/* Dark gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        {/* Heart Button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-sm hover:bg-white transition-colors hover:scale-110 duration-200"
          aria-label={liked ? "Remove from favourites" : "Add to favourites"}
        >
          <HeartIcon filled={liked} />
        </button>

        {/* More Details pill */}
        <Link
          href="#"
          className="absolute bottom-2.5 left-2.5 flex items-center gap-1 bg-black/55 hover:bg-black/75 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full transition-colors"
        >
          More Details
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Price chip */}
        <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
          ₹ {property.price}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[15px] font-bold text-gray-900 leading-tight line-clamp-1 flex-1">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <LocationPinIcon />
            <span className="text-xs font-medium text-gray-500">{property.location}</span>
          </div>
        </div>

        {/* Property meta chips */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
            <SqftIcon />
            {property.sqft} sqft
          </span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
            <FurnishIcon />
            {property.furnishing}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
            <FloorIcon />
            {property.floor}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
            <CalendarIcon />
            Available From {property.available}
          </span>
        </div>

        {/* CTA Row */}
        <div className="flex items-center gap-2 mt-auto pt-2">
          {variant === "scheduled" ? (
            <button className="flex-1 py-2 text-[10px] font-bold bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white rounded-lg hover:shadow-md transition-all duration-300 uppercase tracking-wide leading-tight">
              JOIN OPEN HOUSE TODAY BETWEEN 11 – 6 PM
            </button>
          ) : (
            <button className="flex-1 py-2 text-[11px] font-bold bg-gradient-to-r from-[#C89B3C] to-[#E6B84A] text-white rounded-lg hover:shadow-md transition-all duration-300 uppercase tracking-wide">
              SCHEDULE A VISIT
            </button>
          )}

          <button
            className="p-2 rounded-full border border-gray-100 bg-gray-50 hover:border-green-400 hover:bg-green-50 transition-all duration-300 shrink-0 shadow-sm"
            aria-label="Share on WhatsApp"
          >
            <WhatsAppIcon />
          </button>
          <button
            className="p-2 rounded-full border border-gray-100 bg-gray-50 hover:border-gray-400 hover:bg-gray-100 transition-all duration-300 shrink-0 shadow-sm"
            aria-label="Share property"
          >
            <ShareIcon />
          </button>
        </div>
      </div>
    </article>
  );
}
