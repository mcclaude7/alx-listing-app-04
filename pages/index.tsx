
// import Card from "@/components/common/Card";
// import Button from "@/components/common/Button";
// import { ASSETS } from "../constants";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import Pill from "@/components/ui/Pill";

// const FILTERS = [
//   "Top Villa",
//   "Self Checkin",
//   "Beachfront",
//   "Pool",
//   "Pet Friendly",
//   "Mountain View",
// ];


// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-8">

//       {/* <Header /> */}
//       <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <Card imageSrc={ASSETS.images.house1} title="Maison Moderne" />
//         <Card imageSrc={ASSETS.images.house2} title="Villa avec Piscine" />
//         <Card imageSrc={ASSETS.images.house3} title="Appartement Chic" />
//       </main>

//       <div className="mt-8 flex justify-center">
//         <Button label="Voir Plus" onClick={() => alert("Chargement des propriétés...")} />
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// pages/index.tsx
import React, { useMemo, useState } from "react";
import { PROPERTYLISTINGSAMPLE, BACKGROUND_IMAGE } from "@/constants";
import type { PropertyProps } from "@/interfaces";
import Pill from "@/components/ui/Pill";

const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Beachfront",
  "Pool",
  "Pet Friendly",
  "Mountain View",
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const listings = useMemo(() => {
    let items = PROPERTYLISTINGSAMPLE;
    if (activeFilter) {
      items = items.filter((p) => p.category.some((c) => c.toLowerCase().includes(activeFilter.toLowerCase())));
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.address.city.toLowerCase().includes(q) ||
          p.address.country.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeFilter, query]);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-64 md:h-96 flex items-center"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/40 w-full h-full absolute inset-0" />
        <div className="container mx-auto relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Find your favorite place here!</h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            The best prices for over 2 million properties worldwide.
          </p>

          {/* hero search */}
          <div className="mt-6">
            <div className="flex items-center gap-2 max-w-xl">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search city, country or property..."
                className="w-full p-3 rounded-l-full outline-none bg-gray-100"
              />
              <button className="bg-indigo-600 text-white px-4 py-3 rounded-r-full">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <Pill
              key={f}
              label={f}
              active={activeFilter === f}
              onClick={() => setActiveFilter((curr) => (curr === f ? null : f))}
            />
          ))}
          <button className="ml-2 text-sm text-gray-600" onClick={() => setActiveFilter(null)}>
            Clear
          </button>
        </div>
      </section>

      {/* Listings */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((p: PropertyProps, idx) => (
            <article key={idx} className="border rounded-lg overflow-hidden shadow-sm bg-white">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {/* Use a real image URL for production */}
                <img src={p.image} alt={p.name} className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <div className="text-sm text-gray-600">{p.rating.toFixed(2)} ★</div>
                </div>
                <p className="text-sm text-gray-500 mt-1">{`${p.address.city}, ${p.address.country}`}</p>

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold">${p.price}</div>
                    {p.discount && <div className="text-sm text-green-600">{p.discount}% off</div>}
                  </div>
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded-md">View</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {listings.length === 0 && <p className="mt-6 text-center text-gray-500">No results found.</p>}
      </section>
    </div>
  );
}
