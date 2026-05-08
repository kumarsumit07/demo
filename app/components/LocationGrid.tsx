import Link from "next/link";

const locations = [
  { city: "Delhi", icon: "🏛️" },
  { city: "Agra", icon: "🕌" },
  { city: "Mumbai", icon: "🌆" },
  { city: "Amritsar", icon: "⛪" },
  { city: "Jaipur", icon: "🏰" },
  { city: "Pune", icon: "🏙️" },
  { city: "Hyderabad", icon: "🕍" },
  { city: "Chennai", icon: "🏖️" },
  { city: "Kolkata", icon: "🌉" },
];

function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main building */}
      <rect x="7" y="10" width="22" height="22" rx="1" stroke="#3B5998" strokeWidth="1.5" fill="none" />
      {/* Roof */}
      <polyline points="5,12 18,3 31,12" stroke="#3B5998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Door */}
      <rect x="15" y="24" width="6" height="8" rx="0.5" stroke="#3B5998" strokeWidth="1.2" fill="none" />
      {/* Windows */}
      <rect x="9" y="15" width="4" height="3" rx="0.5" stroke="#3B5998" strokeWidth="1" fill="none" />
      <rect x="16" y="15" width="4" height="3" rx="0.5" stroke="#3B5998" strokeWidth="1" fill="none" />
      <rect x="23" y="15" width="4" height="3" rx="0.5" stroke="#3B5998" strokeWidth="1" fill="none" />
      <rect x="9" y="21" width="4" height="3" rx="0.5" stroke="#3B5998" strokeWidth="1" fill="none" />
      <rect x="23" y="21" width="4" height="3" rx="0.5" stroke="#3B5998" strokeWidth="1" fill="none" />
    </svg>
  );
}

export default function LocationGrid() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Select Locations</h2>

      {/* Scrollable row */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
        {locations.map((loc) => (
          <Link
            key={loc.city}
            href="#"
            className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-[#C89B3C] hover:-translate-y-1 transition-all duration-300 shrink-0 w-[100px] group"
            aria-label={`Browse properties in ${loc.city}`}
          >
            <div className="group-hover:scale-110 transition-transform duration-300">
              <BuildingIcon className="w-10 h-10" />
            </div>
            <span className="text-xs font-bold text-gray-700 group-hover:text-[#C89B3C] transition-colors text-center leading-tight">
              {loc.city}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
