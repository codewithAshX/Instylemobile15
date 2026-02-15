"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ValueProps {
  title: string;
  text: string;
  delay?: number;
}

export default function AboutPage() {
  return (
    <div className="bg-black text-zinc-300 selection:bg-white selection:text-black">
      
      {/* ================= VIDEO HERO ================= */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black z-10" />
          <Image
            src="/store-hero.jpg"
            alt="Store intro"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6"
          >
            About InStyle Mobile
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-8xl font-semibold tracking-tighter text-white"
          >
            Built around trust. <br />
            <span className="text-zinc-500">Designed for you.</span>
          </motion.h1>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              We don’t just sell phones. <br />
              <span className="text-zinc-600">We support your digital life.</span>
            </h2>
            <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
              InStyle Mobile was built with one mission — to give customers
              a place where buying, repairing and upgrading devices feels
              transparent and reliable. Every phone we sell is tested.
              Every repair we perform is certified.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] group"
          >
            <Image
              src="/gr-1095-copy.jpg"
              alt="Our store"
              fill
              className="object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <Value 
            title="Certified devices" 
            text="Every refurbished phone passes a 65-point inspection before it reaches your hands." 
            delay={0.1}
          />
          <Value 
            title="Fast repairs" 
            text="Time is money. Most screen and battery replacements are finished in under 60 minutes." 
            delay={0.2}
          />
          <Value 
            title="Transparent pricing" 
            text="No hidden fees or 'diagnostic' surprises. The quote we give is the price you pay." 
            delay={0.3}
          />
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="py-40 px-6">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="max-w-4xl mx-auto text-center"
        >
          <blockquote className="text-3xl md:text-5xl font-light italic text-white leading-tight">
            “Great devices deserve great service. That’s what we deliver every single day.”
          </blockquote>
          <p className="mt-8 text-zinc-500 uppercase tracking-widest text-sm">— The InStyle Promise</p>
        </motion.div>
      </section>
    </div>
  );
}

function Value({ title, text, delay }: ValueProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="space-y-4"
    >
      <div className="h-px w-12 bg-zinc-700 mb-6" />
      <h3 className="text-xl font-medium text-white">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{text}</p>
    </motion.div>
  );
}