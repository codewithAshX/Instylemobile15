"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

/* ================= DATA ================= */

const ALL_PROPERTIES = [
  {
    id: 1,
    title: "Modern Apartment",
    price: 500000,
    location: "Downtown",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    city: "Mumbai",
    status: "Ready",
    type: "Apartment",
    beds: 2,
    baths: 2,
    area: "1,200 sq ft",
  },
  {
    id: 2,
    title: "Cozy House",
    price: 750000,
    location: "Suburb",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    city: "Delhi",
    status: "Ready",
    type: "House",
    beds: 3,
    baths: 2,
    area: "2,000 sq ft",
  },
  {
    id: 3,
    title: "Luxury Villa",
    price: 1200000,
    location: "Countryside",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    city: "Bangalore",
    status: "Under Construction",
    type: "Villa",
    beds: 4,
    baths: 3,
    area: "3,500 sq ft",
  },
];

/* ================= PAGE ================= */

export default function ListingsClient() {
  const searchParams = useSearchParams();

  const filters = {
    city: searchParams.get("city"),
    location: searchParams.get("location"),
    status: searchParams.get("status"),
    type: searchParams.get("type"),
    beds: searchParams.get("beds"),
    baths: searchParams.get("baths"),
    price: Number(searchParams.get("price") || 9999999),
  };

  const filteredProperties = ALL_PROPERTIES.filter((p) => {
    return (
      (!filters.city || p.city === filters.city) &&
      (!filters.location || p.location === filters.location) &&
      (!filters.status || p.status === filters.status) &&
      (!filters.type || p.type === filters.type) &&
      (!filters.beds || p.beds === Number(filters.beds)) &&
      (!filters.baths || p.baths === Number(filters.baths)) &&
      p.price <= filters.price
    );
  });

  return (
    <section className="min-h-screen bg-gray-50 py-20 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold mb-3">
            Property <span className="text-emerald-600">Listings</span>
          </h1>
          <p className="text-gray-600">
            Browse verified properties that match your preferences
          </p>
        </div>

        {/* EMPTY STATE */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500 mb-3">
              😕 No properties found
            </p>
            <Link
              href="/"
              className="inline-block mt-4 text-emerald-600 font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((p) => (
              <PropertyCard key={p.id} data={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function PropertyCard({ data }: { data: any }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
      <img
        src={data.image}
        alt={data.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {data.title}
        </h3>

        <p className="text-sm text-gray-600">
          {data.location}, {data.city}
        </p>

        <p className="text-emerald-600 font-bold mt-3">
          ₹{(data.price / 100000).toFixed(2)} Lakh
        </p>

        <p className="text-sm text-gray-600 mt-2">
          {data.beds} Beds • {data.baths} Baths • {data.area}
        </p>

        <Link
          href={`/properties/${data.id}`}
          className="block mt-4 text-center bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
