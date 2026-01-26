"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Modern Apartment",
    price: "$500,000",
    location: "Downtown",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200",
    description:
      "This modern apartment offers premium interiors, excellent connectivity, and city views. Perfect for young professionals looking for urban living.",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq ft",
    yearBuilt: 2020,
    features: ["Balcony", "Gym Access", "Parking", "High-Speed Internet"],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
    ],
  },
  {
    id: 2,
    title: "Cozy House",
    price: "$750,000",
    location: "Suburb",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200",
    description:
      "A charming family home located in a peaceful residential suburb. Ideal for families seeking a quiet neighborhood with good schools nearby.",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,000 sq ft",
    yearBuilt: 2015,
    features: ["Garden", "Garage", "Fireplace", "School Nearby"],
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    ],
  },
  {
    id: 3,
    title: "Luxury Villa",
    price: "$1,200,000",
    location: "Countryside",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
    description:
      "A premium villa with spacious interiors and world-class amenities. Perfect for those seeking luxury living in a serene environment.",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,500 sq ft",
    yearBuilt: 2018,
    features: ["Private Pool", "Garden", "Home Office", "Security System"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    ],
  },
];

export default function PropertyDetails({
  params,
}: {
  params: { id: string };
}) {
  const property = properties.find(
    (p) => p.id === Number(params.id)
  );

  if (!property) notFound();

  return (
    <section className="min-h-screen bg-gray-50 py-20 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Back Button */}
        <Link
          href="/listings"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
        >
          ← Back to Listings
        </Link>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          {/* Main Image */}
          <div className="relative h-[500px]">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
                {property.title}
              </h1>

              <p className="text-gray-600 text-xl mb-4">
                {property.location}
              </p>

              <p className="text-emerald-600 text-3xl font-bold">
                {property.price}
              </p>
            </div>

            {/* Property Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Property Details</h2>
                <div className="space-y-2">
                  <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                  <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
                  <p><strong>Area:</strong> {property.area}</p>
                  <p><strong>Year Built:</strong> {property.yearBuilt}</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Features</h2>
                <ul className="list-disc list-inside space-y-1">
                  {property.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Image Gallery */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Gallery</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {property.images.map((img, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${property.title} ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}