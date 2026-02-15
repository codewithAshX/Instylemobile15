"use client";

import { ShieldCheck, Zap, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-32 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-24">
          <p className="text-sm text-zinc-500 mb-4">
            Why choose us
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Built around trust,
            <br /> not promises.
          </h2>

          <p className="text-zinc-400 mt-6 text-lg">
            Every repair, device and interaction is designed to be
            transparent, reliable and fast.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          <Card
            icon={<ShieldCheck size={28} />}
            title="Certified inspections"
            text="Every device goes through a full hardware and battery check before reaching you."
          />

          <Card
            icon={<Clock size={28} />}
            title="Quick repairs"
            text="Most screen and battery repairs are completed within an hour."
          />

          <Card
            icon={<Zap size={28} />}
            title="Same-day dispatch"
            text="Available phones are packed and shipped the same day."
          />

        </div>

        {/* LARGE TRUST STRIP */}
        <div className="mt-20 rounded-[2rem] bg-[#0b0b0b] border border-white/5 p-12 flex flex-col md:flex-row items-center justify-between gap-10">

          <div>
            <Star className="text-yellow-500 mb-4" fill="currentColor" />
            <h3 className="text-3xl font-semibold mb-2">
              Trusted by thousands of customers
            </h3>
            <p className="text-zinc-400">
              We’ve helped customers repair, upgrade and protect their devices
              for years with consistent service quality.
            </p>
          </div>

          <div className="flex gap-10 text-center">
            <Metric value="4.9★" label="Average rating" />
            <Metric value="10k+" label="Devices serviced" />
            <Metric value="6 mo" label="Warranty" />
          </div>

        </div>

      </div>
    </section>
  );
}

function Card({ icon, title, text }:{icon:any,title:string,text:string}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-[#0b0b0b] border border-white/5 rounded-[2rem] p-10 transition hover:border-white/10"
    >
      <div className="text-zinc-300 mb-6">{icon}</div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
}

function Metric({ value, label }:{value:string,label:string}) {
  return (
    <div>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-xs text-zinc-500 mt-1">{label}</p>
    </div>
  );
}
