"use client";
import Image from "next/image";

export default function MobileHero() {
  return (
    <section className="bg-black text-white pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADLINE */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          Smartphones
        </h1>

        <p className="text-zinc-400 text-xl md:text-2xl mt-4">
          Powerful devices. Certified quality. Premium experience.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition">
            Shop Phones
          </button>

          <button className="border border-zinc-600 text-white px-8 py-3 rounded-full font-medium hover:border-white transition">
            Book Repair
          </button>
        </div>

        {/* PRODUCT IMAGE ROW — Apple style */}
        <div className="mt-20 flex justify-center items-end gap-10 flex-wrap">

          <Image
            src="/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg"
            alt="phone"
            width={460}
            height={520}
            className="object-contain hover:scale-105 transition duration-500"
            priority
          />

          <Image
            src="/one.png"
            alt="phone"
            width={300}
            height={560}
            className="object-contain hover:scale-105 transition duration-500"
          />

          <Image
            src="/Galaxy-S24-series.png"
            alt="phone"
            width={360}
            height={520}
            className="object-contain hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
}
