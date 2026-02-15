"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, BedDouble, Bath, Square, ArrowRight, Filter } from "lucide-react";

/* ================= DATA ================= */

const ALL_PROPERTIES = [
  {
    id: 1,
    title: "The Obsidian Atrium",
    price: 8500000,
    location: "Banjara Hills",
    image: "https://images.unsplash.com/photo-1600607687940-4e2303697a6b?w=1200",
    city: "Hyderabad",
    status: "Ready to Move",
    type: "Penthouse",
    beds: 4,
    baths: 4,
    area: "4,200 sq ft",
    tag: "Exclusive"
  },
  {
    id: 2,
    title: "Emerald Estate",
    price: 4200000,
    location: "Financial District",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
    city: "Hyderabad",
    status: "Under Construction",
    type: "Villa",
    beds: 3,
    baths: 3,
    area: "2,800 sq ft",
    tag: "New Launch"
  },
  {
    id: 3,
    title: "Skyline Manor",
    price: 12000000,
    location: "Worli Sea Face",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
    city: "Mumbai",
    status: "Ready to Move",
    type: "Luxury Suite",
    beds: 5,
    baths: 6,
    area: "6,500 sq ft",
    tag: "Prime Asset"
  },
];

/* ================= MAIN PAGE ================= */

export default function ListingsClient() {
  const searchParams = useSearchParams();

  const filters = {
    city: searchParams.get("city"),
    status: searchParams.get("status"),
    type: searchParams.get("type"),
    price: Number(searchParams.get("price") || 999999999),
  };

  const filteredProperties = ALL_PROPERTIES.filter((p) => {
    return (
      (!filters.city || p.city === filters.city) &&
      (!filters.status || p.status === filters.status) &&
      (!filters.type || p.type === filters.type) &&
      p.price <= filters.price
    );
  });

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= HEADER ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <span className="text-emerald-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
              Global Inventory
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-none">
              Curated <span className="italic font-serif text-emerald-100">Assets.</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-2">
            <Filter size={14} />
            <span>Showing {filteredProperties.length} Properties</span>
          </div>
        </motion.div>

        {/* ================= GRID ================= */}
        <AnimatePresence mode="wait">
          {filteredProperties.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-40 border border-dashed border-white/5 rounded-3xl"
            >
              <p className="text-zinc-500 font-serif italic text-2xl mb-6">No assets match your criteria.</p>
              <Link href="/listings" className="text-emerald-500 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors">
                Reset Selection —
              </Link>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProperties.map((p) => (
                <PropertyCard key={p.id} data={p} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ================= CARD COMPONENT ================= */

function PropertyCard({ data }: { data: any }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      className="group bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          <span className="bg-emerald-600 text-white text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full">
            {data.tag}
          </span>
          <span className="bg-black/60 backdrop-blur-md text-zinc-300 text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-white/10">
            {data.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-light text-white mb-1 group-hover:text-emerald-400 transition-colors">
              {data.title}
            </h3>
            <div className="flex items-center gap-2 text-zinc-500 text-xs">
              <MapPin size={12} className="text-emerald-500" />
              <span>{data.location}, {data.city}</span>
            </div>
          </div>
        </div>

        <div className="text-2xl font-light text-white mb-8">
          ₹{(data.price / 10000000).toFixed(2)} <span className="text-sm uppercase tracking-tighter text-zinc-500 font-bold ml-1 text-emerald-500">Cr</span>
        </div>

        {/* Property Features */}
        <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 mb-8 text-zinc-500">
          <div className="flex flex-col gap-1">
            <BedDouble size={14} className="text-zinc-300" />
            <span className="text-[10px] uppercase font-bold tracking-widest">{data.beds} Beds</span>
          </div>
          <div className="flex flex-col gap-1">
            <Bath size={14} className="text-zinc-300" />
            <span className="text-[10px] uppercase font-bold tracking-widest">{data.baths} Baths</span>
          </div>
          <div className="flex flex-col gap-1">
            <Square size={14} className="text-zinc-300" />
            <span className="text-[10px] uppercase font-bold tracking-widest">{data.area}</span>
          </div>
        </div>

        <Link
          href={`/properties/${data.id}`}
          className="flex items-center justify-between w-full bg-white text-black py-4 px-6 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-emerald-500 hover:text-white transition-all group/btn"
        >
          View Portfolio Asset
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}