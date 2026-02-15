"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      setSent(true);
      setTimeout(()=>setSent(false),3000);
    },1200);
  };

  return (
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="py-40 text-center border-b border-white/10">

        <motion.p 
          initial={{opacity:0,y:10}}
          animate={{opacity:1,y:0}}
          className="text-sm text-zinc-500 mb-6"
        >
          Contact InStyle Mobile
        </motion.p>

        <motion.h1
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          className="text-5xl md:text-7xl font-semibold tracking-tight"
        >
          Let’s get your device sorted.
        </motion.h1>

        <p className="text-zinc-400 mt-8 max-w-2xl mx-auto text-lg">
          Whether you need repairs, want to upgrade, or just have a question —
          we’re here to help.
        </p>

        {/* PRIMARY CTA */}
        <a
          href="https://wa.me/918888108103"
          target="_blank"
          className="inline-flex items-center gap-3 mt-12 bg-white text-black px-10 py-5 rounded-full text-sm font-medium hover:bg-zinc-200 transition"
        >
          <MessageCircle size={18}/> Chat on WhatsApp
        </a>

      </section>

      {/* ================= CONTACT GRID ================= */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">

        {/* LEFT — FORM */}
        <div>
          <h2 className="text-4xl font-semibold mb-10">
            Send us a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <Input label="Name" placeholder="Your name" />
            <Input label="Phone" placeholder="+91..." />
            <Input label="Email" placeholder="email@example.com" />

            <textarea
              required
              placeholder="Tell us what you need help with"
              className="w-full bg-[#0b0b0b] border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-white/20 outline-none resize-none h-40"
            />

            <button
              disabled={loading}
              className="bg-white text-black px-10 py-4 rounded-xl font-medium hover:bg-zinc-200 transition"
            >
              {loading ? "Sending…" : sent ? "Sent ✓" : "Send message"}
            </button>

          </form>
        </div>

        {/* RIGHT — INFO */}
        <div className="space-y-12">

          <ContactBlock icon={<MapPin size={20}/>}>
            St. Michael Chowk, Ramnagar, Chandrapur
          </ContactBlock>

          <ContactBlock icon={<Phone size={20}/>}>
            +91 8888108103
          </ContactBlock>

          <ContactBlock icon={<Mail size={20}/>}>
            instylemobile@gmail.com
          </ContactBlock>

          {/* HOURS */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-zinc-500 mb-3">Store hours</p>
            <p className="text-zinc-300">Mon – Sat: 10am – 8pm</p>
            <p className="text-zinc-600 text-sm">Sunday closed</p>
          </div>

        </div>

      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="py-28 bg-[#0b0b0b] text-center">
        <p className="text-zinc-500 mb-4">Why customers contact us</p>

        <h2 className="text-4xl md:text-5xl font-semibold">
          Repairs. Upgrades. Honest advice.
        </h2>

        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
          Thousands of customers trust our technicians and verified devices.
          We keep things simple and transparent.
        </p>
      </section>

      {/* ================= MAP ================= */}
      <section className="h-[420px] w-full bg-[#0b0b0b] flex items-center justify-center text-zinc-500">
        Google Map embed here
      </section>

    </div>
  );
}


/* ---------- COMPONENTS ---------- */

function Input({ label, placeholder }: any) {
  return (
    <div>
      <p className="text-xs text-zinc-500 mb-2">{label}</p>
      <input
        required
        placeholder={placeholder}
        className="w-full bg-[#0b0b0b] border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-white/20 outline-none"
      />
    </div>
  );
}

function ContactBlock({ icon, children }: any) {
  return (
    <div className="flex gap-5 items-start">
      <div className="w-12 h-12 rounded-2xl bg-[#0b0b0b] border border-white/5 flex items-center justify-center text-zinc-300">
        {icon}
      </div>
      <p className="text-lg text-white">{children}</p>
    </div>
  );
}
