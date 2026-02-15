"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Got my iPhone screen replaced in under 40 minutes. Looks brand new. Very professional service.",
  },
  {
    name: "Sneha Patil",
    text: "Bought a refurbished Samsung here. Battery health was exactly as promised and price was great.",
  },
  {
    name: "Amit Verma",
    text: "Best mobile shop experience I've had. Transparent pricing and honest guidance.",
  },
  {
    name: "Pooja Mehta",
    text: "Sold my old phone and received payment instantly. Smooth and trustworthy process.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="bg-black py-32 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="text-sm text-zinc-500 mb-4">Customer stories</p>

        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-16">
          People trust our work.
        </h2>

        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-[#0b0b0b] border border-white/5 rounded-[2rem] p-12"
            >

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 max-w-2xl mx-auto">
                “{testimonials[index].text}”
              </p>

              {/* Name */}
              <p className="mt-8 text-sm text-zinc-500">
                {testimonials[index].name}
              </p>

            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-2 bg-zinc-700"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
