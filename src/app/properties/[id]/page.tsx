"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, MapPin, BedDouble, Bath, Square, Calendar, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// In a real app, you'd fetch this from an API using the ID
const ALL_PROPERTIES = [
  {
    id: "1",
    title: "The Obsidian Atrium",
    price: "8.50 Cr",
    location: "Banjara Hills, Hyderabad",
    image: "https://images.unsplash.com/photo-1600607687940-4e2303697a6b?w=1200",
    beds: 4,
    baths: 4,
    area: "4,200 sq ft",
    description: "A masterclass in modern brutalist architecture, offering unparalleled views and custom marble finishes."
  },
  // ... add your other properties here with matching IDs
];

export default function PropertyDetailPage() {
  const params = useParams();
  const id = params.id;

  // Find the specific property based on the URL ID
  const property = ALL_PROPERTIES.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <p>Asset not found in our current portfolio.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 pb-20 pt-24">
      {/* ================= HEADER NAVIGATION ================= */}
      <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/listings" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-emerald-500 font-bold">
            <ChevronLeft size={14} /> Back to Inventory
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT: VISUALS & INFO */}
        <div className="lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-[500px] rounded-3xl overflow-hidden mb-12"
          >
            <Image src={property.image} alt={property.title} fill className="object-cover" />
          </motion.div>

          <h1 className="text-6xl font-light text-white tracking-tighter mb-4">{property.title}</h1>
          <div className="flex items-center gap-2 text-zinc-500 mb-8">
            <MapPin size={18} className="text-emerald-500" />
            <span className="text-lg">{property.location}</span>
          </div>

          <div className="grid grid-cols-3 gap-8 py-8 border-y border-white/5 mb-12">
            <div className="text-center">
              <BedDouble className="mx-auto mb-2 text-emerald-500" />
              <p className="text-white font-bold">{property.beds} Beds</p>
            </div>
            <div className="text-center">
              <Bath className="mx-auto mb-2 text-emerald-500" />
              <p className="text-white font-bold">{property.baths} Baths</p>
            </div>
            <div className="text-center">
              <Square className="mx-auto mb-2 text-emerald-500" />
              <p className="text-white font-bold">{property.area}</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-zinc-300 font-light italic">
            {property.description}
          </p>
        </div>

        {/* RIGHT: CONCIERGE BOX */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-zinc-900/50 border border-white/10 p-8 rounded-3xl">
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Price Upon Request</p>
            <h2 className="text-4xl font-serif text-white mb-8 italic">₹{property.price}</h2>
            
            <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] mb-4 transition-all">
              Request Private Showing
            </button>
            <button className="w-full bg-transparent border border-white/10 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}