"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap, Battery } from "lucide-react";
import EmiCalculator from "@/components/EmiCalculator";

export default function FeaturedPhone() {
  return (
    <section className="bg-black py-32 text-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}
        <div className="relative h-[480px] w-full">
          <Image
            src="https://i.imgur.com/JqEuJ6t.png"
            alt="Featured iPhone"
            fill
            priority
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.08)]"
          />
        </div>

        {/* DETAILS */}
        <div>
          <p className="text-sm text-zinc-500 mb-4">
            Featured device
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            iPhone Pro Series
          </h2>

          <p className="text-zinc-400 mt-6 text-lg max-w-lg">
            Certified flagship device with full warranty, verified authenticity,
            and express delivery from our store.
          </p>

          {/* PRICE */}
          <div className="mt-10 flex items-end gap-5">
            <span className="text-4xl font-semibold">
              ₹1,49,999
            </span>
            <span className="text-zinc-500 line-through text-lg">
              ₹1,69,999
            </span>
          </div>

          {/* EMI */}
          <div className="mt-6">
            <EmiCalculator price={149999} />
          </div>

          {/* FEATURES */}
          <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-zinc-300">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-zinc-400" size={18} />
              1 year warranty
            </div>

            <div className="flex items-center gap-3">
              <Battery className="text-zinc-400" size={18} />
              Battery guarantee
            </div>

            <div className="flex items-center gap-3">
              <Zap className="text-zinc-400" size={18} />
              Express delivery
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/918888108103?text=I%20want%20this%20featured%20phone"
            target="_blank"
            className="mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black text-sm font-medium hover:bg-zinc-200 transition"
          >
            Chat to reserve <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
