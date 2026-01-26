"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const defaultProperties = [
  {
    id: 1,
    title: "Modern Apartment",
    price: "$500,000",
    location: "Downtown",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq ft",
  },
  {
    id: 2,
    title: "Cozy House",
    price: "$750,000",
    location: "Suburb",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,000 sq ft",
  },
  {
    id: 3,
    title: "Luxury Villa",
    price: "$1,200,000",
    location: "Countryside",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,500 sq ft",
  },
];

export default function PropertiesPage({ properties = defaultProperties }) {
  return (
    <section className="min-h-screen bg-gray-50 py-20 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
          Our Properties
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-56">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-1">
                  {property.title}
                </h2>

                <p className="text-gray-600 mb-2">
                  {property.location}
                </p>

                <div className="text-sm text-gray-500 mb-3">
                  <span>{property.bedrooms} beds • {property.bathrooms} baths • {property.area}</span>
                </div>

                <p className="text-emerald-600 font-bold text-lg mb-4">
                  {property.price}
                </p>

                <Link
                  href={`/properties/${property.id}`}
                  className="block text-center bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
