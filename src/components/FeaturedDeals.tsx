"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";

const phones = [
  {
    name: "iPhone 15 Pro",
    price: "₹99,999",
    old: "₹1,19,999",
    img: "https://i.imgur.com/6VBx3io.png",
  },
  {
    name: "Galaxy S24 Ultra",
    price: "₹1,09,999",
    old: "₹1,24,999",
    img: "https://i.imgur.com/2yaf2wb.png",
  },
  {
    name: "OnePlus 12",
    price: "₹64,999",
    old: "₹69,999",
    img: "https://i.imgur.com/3ZQ3Z6P.png",
  },
  {
    name: "Pixel 8 Pro",
    price: "₹72,999",
    old: "₹79,999",
    img: "https://i.imgur.com/7Zp3L7E.png",
  },
  {
    name: "Nothing Phone 2",
    price: "₹39,999",
    old: "₹45,999",
    img: "https://i.imgur.com/4NQ0v2G.png",
  },
];

export default function FeaturedDeals() {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-6xl font-black mb-16">
          Featured <span className="text-emerald-500">Deals</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {phones.map((p, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-white/5 rounded-3xl p-6 hover:border-emerald-500/50 transition"
            >
              <div className="relative h-56">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>

              <h3 className="mt-6 text-xl font-black">{p.name}</h3>

              <div className="flex items-center gap-3 mt-2">
                <span className="text-emerald-400 font-black text-xl">
                  {p.price}
                </span>
                <span className="line-through text-zinc-500">
                  {p.old}
                </span>
              </div>

              <a
                href={`https://wa.me/91YOURNUMBER?text=I%20want%20${encodeURIComponent(
                  p.name
                )}`}
                target="_blank"
                className="mt-6 flex items-center justify-center gap-2 bg-zinc-800 py-3 rounded-xl text-xs font-bold uppercase hover:bg-emerald-600 hover:text-black transition"
              >
                <MessageCircle size={16} /> WhatsApp Buy
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
