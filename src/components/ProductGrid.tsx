"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, DollarSign } from "lucide-react";

// Example Inventory Data
const inventory = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    storage: "256GB",
    condition: "Mint",
    price: 115000,
    image: "https://images.unsplash.com/photo-1696446851240-5229c1598177?q=80&w=600",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    storage: "512GB",
    condition: "Good",
    price: 85000,
    image: "https://images.unsplash.com/photo-1678228352605-65cf859b867c?q=80&w=600",
  },
  {
    id: 3,
    name: "iPhone 13",
    storage: "128GB",
    condition: "Fair",
    price: 42000,
    image: "https://images.unsplash.com/photo-1632192770512-c249466e3926?q=80&w=600",
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-zinc-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light tracking-tight text-zinc-900 sm:text-5xl mb-16">
          Certified <span className="font-serif italic text-emerald-700">Pre-Owned</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {inventory.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-6 border border-zinc-100 shadow-sm flex flex-col"
            >
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-zinc-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-zinc-900">{product.name}</h3>
                <span className="text-sm font-medium bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
                  {product.condition}
                </span>
              </div>
              
              <p className="text-sm text-zinc-500 mb-6">{product.storage}</p>
              
              <div className="mt-auto flex justify-between items-center pt-6 border-t border-zinc-100">
                <p className="text-2xl font-black text-zinc-950">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-500">
                  <DollarSign size={16} />
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}