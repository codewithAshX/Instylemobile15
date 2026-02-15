"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Building2,
  KeyRound,
  Wrench,
  TrendingUp,
  Scale,
  FileText,
  ArrowRight,
} from "lucide-react";

/* ================= ANIMATION VARIANTS ================= */

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // ✅ required for Vercel build
    },
  },
};


/* ================= DATA ================= */

const SERVICES = [
  {
    title: "Strategic Acquisitions",
    icon: Building2,
    tagline: "High-yield Property Sales",
    description:
      "Our acquisition desk moves beyond standard listings. We utilize proprietary market data and off-market networking to identify residential and commercial assets with significant upside potential.",
    features: [
      "Market Valuation",
      "Growth Forecasting",
      "Due Diligence",
      "Portfolio Matching",
    ],
  },
  {
    title: "Capital Appreciation",
    icon: TrendingUp,
    tagline: "Investment Consulting",
    description:
      "Real estate is the cornerstone of generational wealth. Our consultants provide a macro-view of the markets, helping you hedge against inflation through diversified property portfolios.",
    features: ["ROI Modeling", "Exit Planning", "Wealth Advisory", "Risk Analysis"],
  },
  {
    title: "Asset Stewardship",
    icon: Wrench,
    tagline: "Premium Management",
    description:
      "We treat your property as an asset, not just a building. Our management division handles technical maintenance and vendor management ensuring your property remains pristine.",
    features: ["24/7 Support", "Maintenance", "Financial Reporting", "Tenant Care"],
  },
  {
    title: "Yield Management",
    icon: KeyRound,
    tagline: "End-to-End Rentals",
    description:
      "Maximize occupancy rates with our digital-first rental ecosystem. We vet tenants through a rigorous multi-point check and handle lease cycles with legal precision.",
    features: [
      "Tenant Vetting",
      "Rent Disbursement",
      "Lease Management",
      "Market Pricing",
    ],
  },
];

const STEPS = [
  {
    number: "01",
    title: "Strategic Briefing",
    description:
      "Intensive discovery session to align with your financial objectives and legacy goals.",
  },
  {
    number: "02",
    title: "Market Intelligence",
    description:
      "Deep-dive into regional data, infrastructure projects, and historical price trends.",
  },
  {
    number: "03",
    title: "Structural Excellence",
    description:
      "High-grade materials and sustainable engineering with regular digital updates.",
  },
  {
    number: "04",
    title: "Legal Fortification",
    description:
      "Meticulous filing of RERA documents, tax clearance, and occupancy certificates.",
  },
  {
    number: "05",
    title: "Asset Handover",
    description:
      "Seamless transition into our management ecosystem for long-term prosperity.",
  },
];

/* ================= PROCESS ================= */

function ProcessTimeline() {
  return (
    <section className="bg-[#0a0a0a] py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-left">
          <span className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-xs">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-white mt-4">
            The Riddhi{" "}
            <span className="italic font-serif text-emerald-100">Protocol</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="relative group">
              <div className="text-6xl font-serif italic text-white/5 mb-6 group-hover:text-emerald-500/20 transition-colors">
                {step.number}
              </div>

              <div className="absolute top-8 left-0 h-px w-full bg-gradient-to-r from-emerald-500/40 to-transparent hidden md:block" />

              <h4 className="text-xl font-bold text-white mb-4 relative z-10">
                {step.title}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= PAGE ================= */

export default function ServicesPage() {
  return (
    <div className="bg-zinc-950 text-zinc-300 selection:bg-emerald-500">

      {/* HERO */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />

        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className="text-emerald-500 uppercase tracking-[0.5em] text-xs font-bold mb-6 block">
            Capabilities & Expertise
          </span>
          <h1 className="text-5xl md:text-8xl font-light text-white tracking-tighter mb-8 leading-none">
            Integrated <br />
            <span className="italic font-serif text-emerald-100">
              Solutions.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed">
            From initial land acquisition to long-term asset management,
            RiddhiBuilders provides a 360-degree ecosystem.
          </p>
        </motion.div>
      </section>

      {/* TIMELINE */}
      <ProcessTimeline />

      {/* SERVICES GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 p-8 md:p-12 transition-all hover:border-emerald-500/30 ${
                index === 0 || index === 3
                  ? "md:col-span-7"
                  : "md:col-span-5"
              }`}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-zinc-800 text-emerald-400">
                    <service.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold bg-zinc-800/50 px-3 py-1 rounded-full">
                    {service.tagline}
                  </span>
                </div>

                <h2 className="text-3xl font-light text-white mb-6">
                  {service.title}
                </h2>

                <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/5">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500"
                    >
                      <div className="h-1 w-1 rounded-full bg-emerald-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* LEGAL */}
      <section className="py-32 bg-white text-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-light tracking-tighter mb-12">
              The <span className="italic font-serif">In-House</span> <br />
              Legal & Valuation Desk
            </h2>

            <div className="space-y-12">
              <div className="flex gap-6">
                <Scale className="text-emerald-600" />
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Rigorous Due Diligence
                  </h4>
                  <p className="text-zinc-600 text-sm">
                    Our legal team performs exhaustive title searches ensuring your investment is shielded from litigation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <FileText className="text-emerald-600" />
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Transparent Valuations
                  </h4>
                  <p className="text-zinc-600 text-sm">
                    We utilize comparative, income, and cost analysis for accurate market pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-zinc-950 text-white px-10 py-5 rounded-full flex items-center gap-4 hover:bg-emerald-600 transition-all">
              Consult an Expert <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
