import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import LocationGrid from "./components/LocationGrid";
import PropertySection from "./components/PropertySection";
import PremiumSocieties from "./components/PremiumSocieties";
import Footer from "./components/Footer";
import type { Property } from "./components/PropertyCard";

// ─── Mock Data ────────────────────────────────────────────────────────────────

const scheduledProperties: Property[] = [
  {
    id: 1,
    title: "Sobha Sentosa – 3 BHK Apartment",
    type: "3 BHK Apartment",
    price: "55,000",
    sqft: "1080",
    furnishing: "Semi Furnished",
    floor: "8th Floor",
    available: "20/12/2025",
    location: "Panther",
    image: "/apartment.png",
  },
  {
    id: 2,
    title: "Sobha Sentosa – 3 BHK Apartment",
    type: "3 BHK Apartment",
    price: "55,000",
    sqft: "1080",
    furnishing: "Semi Furnished",
    floor: "9th Floor",
    available: "20/12/2025",
    location: "Panther",
    image: "/apartment.png",
  },
  {
    id: 3,
    title: "Sobha Sentosa – 3 BHK Apartment",
    type: "3 BHK Apartment",
    price: "55,000",
    sqft: "1080",
    furnishing: "Semi Furnished",
    floor: "8th Floor",
    available: "20/12/2025",
    location: "Panther",
    image: "/apartment.png",
  },
];

const sarjapuraProperties: Property[] = [
  {
    id: 4,
    title: "Sobha Sentosa – 3 BHK Apartment",
    type: "3 BHK Apartment",
    price: "55,000",
    sqft: "1080",
    furnishing: "Semi Furnished",
    floor: "6th Floor",
    available: "20/12/2025",
    location: "Panther",
    image: "/apartment.png",
  },
  {
    id: 5,
    title: "Sobha Sentosa – 3 BHK Apartment",
    type: "3 BHK Apartment",
    price: "56,000",
    sqft: "1080",
    furnishing: "Semi Furnished",
    floor: "9th Floor",
    available: "20/12/2025",
    location: "Panther",
    image: "/apartment.png",
  },
  {
    id: 6,
    title: "Sobha Sentosa – 3 BHK Apartment",
    type: "3 BHK Apartment",
    price: "56,000",
    sqft: "1080",
    furnishing: "Semi Furnished",
    floor: "8th Floor",
    available: "20/12/2025",
    location: "Panther",
    image: "/apartment.png",
  },
];

const velendurProperties: Property[] = [
  {
    id: 7,
    title: "Sobha Sentosa – 3 BHK Apartment",
    type: "3 BHK Apartment",
    price: "55,000",
    sqft: "1080",
    furnishing: "Semi Furnished",
    floor: "9th Floor",
    available: "20/12/2025",
    location: "Panther",
    image: "/apartment.png",
  },
  {
    id: 8,
    title: "Sobha Sentosa – 3 BHK Apartment",
    type: "3 BHK Apartment",
    price: "55,000",
    sqft: "1080",
    furnishing: "Semi Furnished",
    floor: "9th Floor",
    available: "20/12/2025",
    location: "Panther",
    image: "/apartment.png",
  },
  {
    id: 9,
    title: "Sobha Sentosa – 3 BHK Apartment",
    type: "3 BHK Apartment",
    price: "55,000",
    sqft: "1080",
    furnishing: "Semi Furnished",
    floor: "9th Floor",
    available: "20/12/2025",
    location: "Panther",
    image: "/apartment.png",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Navbar />
      <SearchBar />

      <main>
        {/* Location Selector */}
        <LocationGrid />

        {/* Divider */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-gray-100" />
        </div>

        {/* Scheduled Visit Properties */}
        <PropertySection
          title="Scheduled Visit"
          properties={scheduledProperties}
          variant="scheduled"
          seeAllLabel="See All Properties"
        />

        {/* Divider */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-gray-100" />
        </div>

        {/* Top Properties in Sarjapura */}
        <PropertySection
          title="Top Properties in Sarjapura"
          properties={sarjapuraProperties}
          variant="top"
          seeAllLabel="See All Properties"
        />

        {/* Divider */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-gray-100" />
        </div>

        {/* Top Properties in Velendur */}
        <PropertySection
          title="Top Properties in Velendur"
          properties={velendurProperties}
          variant="top"
          seeAllLabel="See All Properties"
        />

        {/* Divider */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-gray-100" />
        </div>

        {/* Premium Societies */}
        <PremiumSocieties />
      </main>

      <Footer />
    </>
  );
}
