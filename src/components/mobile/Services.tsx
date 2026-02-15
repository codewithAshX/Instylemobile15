"use client";

import {
  Wrench,
  Smartphone,
  ShieldCheck,
  Clock,
  ArrowRight,
  Repeat,
  Package
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Sell Your Device",
    desc: "Instant valuation and same-day payment for your old phone.",
    icon: Repeat,
    link: "/sell",
  },
  {
    title: "Repair & Service",
    desc: "Screens, batteries, cameras and more — certified parts with warranty.",
    icon: Wrench,
    link: "/repair",
  },
  {
    title: "Buy Refurbished",
    desc: "Premium refurbished phones tested and verified by experts.",
    icon: Smartphone,
    link: "/shop",
  },
  {
    title: "Accessories & Protection",
    desc: "Cases, chargers, screen guards and extended protection plans.",
    icon: Package,
    link: "/accessories",
  },
];

export default function Services() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* APPLE STYLE HEADER */}
        <div className="text-center mb-24">
          <p className="text-sm text-zinc-500 mb-4">Services</p>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Everything your phone needs.
          </h2>

          <p className="text-zinc-400 mt-6 max-w-xl mx-auto text-lg">
            From selling and repairs to certified refurbished devices —
            we handle your mobile experience end-to-end.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
              className="group p-12 rounded-[2rem] bg-[#0b0b0b] border border-white/5 hover:border-white/10 transition"
            >
              <item.icon
                size={32}
                className="text-zinc-300 mb-8 group-hover:text-white transition"
              />

              <h3 className="text-3xl font-semibold mb-4 tracking-tight">
                {item.title}
              </h3>

              <p className="text-zinc-400 mb-10 max-w-sm">
                {item.desc}
              </p>

              <Link
                href={item.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* TRUST BAR (APPLE STYLE) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">

          {[
            { icon: Clock, label: "Fast Repairs" },
            { icon: ShieldCheck, label: "Warranty Included" },
            { icon: Smartphone, label: "Certified Parts" },
            { icon: Wrench, label: "Expert Technicians" },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#0b0b0b] border border-white/5">
              <item.icon className="mx-auto mb-3 text-zinc-300" />
              <p className="text-sm text-zinc-400">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
