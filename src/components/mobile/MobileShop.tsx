"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Crown } from "lucide-react";
import Image from "next/image";

export default function HotDeal() {
  const originalPrice = 169999;
  const finalPrice = 149999;

  const [price, setPrice] = useState(originalPrice);
  const [dropped, setDropped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrice(finalPrice);
      setDropped(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-black py-28 overflow-hidden">

      {/* glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-[3rem] bg-gradient-to-b from-zinc-900 to-black border border-white/10 overflow-hidden">

          <div className="flex flex-col lg:flex-row items-center">

            {/* TEXT */}
            <div className="flex-1 p-10 md:p-16">

              <div className="inline-flex items-center gap-2 bg-white/5 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
                <Crown size={14} /> Featured Deal
              </div>

              <h2 className="text-5xl md:text-7xl font-black leading-[0.95]">
                iPhone 17 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Pro Max
                </span>
              </h2>

              <p className="text-zinc-400 mt-6 text-lg max-w-md">
                Certified flagship device with full warranty, verified authenticity,
                and express delivery. Limited units available.
              </p>

              {/* PRICE */}
              <div className="mt-10 flex items-center gap-10 flex-wrap">

                <div>
                  <span className="text-zinc-500 text-xs uppercase font-semibold block">
                    Deal Price
                  </span>

                  <div className="flex items-center gap-5 mt-1">

                    <motion.span
                      key={price}
                      initial={{ scale: 1.2, opacity: 0.6 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-4xl md:text-5xl font-black"
                    >
                      ₹{price.toLocaleString("en-IN")}
                    </motion.span>

                    <span className="text-zinc-600 line-through text-lg">
                      ₹{originalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {dropped && (
                    <p className="text-emerald-400 text-sm font-semibold mt-2">
                      🔥 Price dropped today
                    </p>
                  )}
                </div>

                <a
                  href={`https://wa.me/918888108103?text=${encodeURIComponent(
                    "I want the iPhone 17 Pro Max deal"
                  )}`}
                  target="_blank"
                  className="bg-emerald-500 text-black px-8 py-4 rounded-2xl font-bold uppercase flex items-center gap-3 hover:bg-emerald-400 transition"
                >
                  Secure Yours <ArrowRight size={18} />
                </a>

              </div>
            </div>

            {/* IMAGE */}
            <div className="flex-1 flex items-center justify-center p-10">
              <div className="relative w-[360px] h-[480px] md:w-[420px] md:h-[520px]">
                <Image
                  src="/iphone-17-pro.png"
                  alt="iPhone 17 Pro"
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
