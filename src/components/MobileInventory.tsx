"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";

const phones = [
  {
    name: "iPhone 15 Pro Max",
    price: "₹1,09,999",
    old: "₹1,29,999",
    battery: "94%",
    warranty: "6 Months",
    img: "/iphoen15promax.png",
  },
  {
    name: "Samsung S24 Ultra",
    price: "₹99,999",
    old: "₹1,19,999",
    battery: "97%",
    warranty: "Brand Warranty",
    img: "/25ultra.png",
  },
  {
    name: "OnePlus 12",
    price: "₹64,999",
    old: "₹74,999",
    battery: "96%",
    warranty: "6 Months",
    img: "/oneplus.png",
  },
  {
    name: "Pixel 8 Pro",
    price: "₹72,999",
    old: "₹84,999",
    battery: "95%",
    warranty: "6 Months",
    img: "/iphone-17-pro.png",
  },
];

export default function MobileInventory() {
  return (
    <section className="bg-black py-32 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="text-sm text-zinc-500 mb-3">Refurbished Collection</p>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Certified premium phones.
          </h2>

          <p className="text-zinc-400 mt-6 max-w-xl mx-auto text-lg">
            Fully tested devices with battery guarantee, warranty and fast delivery.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

          {phones.map((p, i) => (
            <div
              key={i}
              className="group bg-[#0b0b0b] border border-white/5 rounded-[2rem] p-8 hover:border-white/10 hover:-translate-y-1 transition"
            >

              {/* IMAGE */}
              <div className="relative h-64 mb-8">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-contain group-hover:scale-[1.03] transition duration-500"
                />
              </div>

              {/* NAME */}
              <h3 className="text-lg font-medium tracking-tight">
                {p.name}
              </h3>

              {/* BADGES */}
              <div className="flex gap-2 mt-3 text-xs text-zinc-400">
                <span className="px-3 py-1 rounded-full bg-white/5">
                  Battery {p.battery}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5">
                  {p.warranty}
                </span>
              </div>

              {/* PRICE */}
              <div className="mt-6">
                <p className="text-2xl font-semibold">{p.price}</p>
                <p className="text-sm text-zinc-500 line-through">{p.old}</p>
              </div>

              {/* BUTTON */}
              <a
                href={`https://wa.me/918888108103?text=I%20want%20${encodeURIComponent(
                  p.name
                )}`}
                target="_blank"
                className="mt-8 block w-full text-center py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-zinc-200 transition flex items-center justify-center gap-2"
              >
                <MessageCircle size={16}/> Chat to Buy
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
