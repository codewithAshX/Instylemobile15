"use client";

import { motion } from "framer-motion";
import {
  Building2,
  KeyRound,
  Wrench,
  TrendingUp,
  Scale,
  FileText,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Services() {
  const services = [
    {
      title: "Property Sales",
      icon: Building2,
      description:
        "Expert assistance in buying and selling residential and commercial properties with complete market insight.",
      features: ["Market analysis", "Property valuation", "Negotiation support", "Legal documentation"],
    },
    {
      title: "Property Rentals",
      icon: KeyRound,
      description:
        "End-to-end rental solutions for landlords, from tenant sourcing to lease management.",
      features: ["Tenant screening", "Lease agreements", "Rent collection", "Property marketing"],
    },
    {
      title: "Property Management",
      icon: Wrench,
      description:
        "Stress-free property ownership with professional maintenance and tenant handling.",
      features: ["Maintenance coordination", "Rent collection", "Tenant communication", "Financial reporting"],
    },
    {
      title: "Investment Consulting",
      icon: TrendingUp,
      description:
        "Data-driven investment strategies to maximize ROI and reduce risk.",
      features: ["Portfolio analysis", "Market research", "Risk assessment", "Investment strategies"],
    },
    {
      title: "Property Valuation",
      icon: Scale,
      description:
        "Accurate and transparent property valuation backed by local market intelligence.",
      features: ["Comparative analysis", "Income approach", "Cost approach", "Market trends"],
    },
    {
      title: "Legal Support",
      icon: FileText,
      description:
        "Secure and compliant transactions through expert legal guidance.",
      features: ["Contract review", "Due diligence", "Title search", "Closing assistance"],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-emerald-600">Services</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions designed to deliver value,
            transparency, and long-term growth.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Accent Bar */}
                <div className="absolute top-0 left-0 h-1 w-full bg-emerald-500 rounded-t-xl" />

                {/* ICON */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  <Icon size={26} />
                </div>

                <h2 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm text-gray-700">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
