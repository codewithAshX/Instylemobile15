"use client";

import { useState } from "react";
import { CreditCard, Landmark, CalendarDays, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function EmiCalculator({ price }: { price: number }) {
  const [months, setMonths] = useState(12);
  const [down, setDown] = useState(Math.round(price * 0.2)); // Default 20% down
  const [rate, setRate] = useState(10.5);

  const principal = price - down;
  const r = rate / 12 / 100;

  const emi =
    principal > 0
      ? (principal * r * Math.pow(1 + r, months)) /
        (Math.pow(1 + r, months) - 1)
      : 0;

  return (
    <div className="mt-12 w-full max-w-2xl mx-auto bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-2 overflow-hidden shadow-2xl">
      <div className="bg-[#111111] rounded-[2.2rem] p-8 md:p-12">
        
        {/* TOP BADGE */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-zinc-900 px-4 py-1.5 rounded-full border border-white/5 shadow-inner">
            <Landmark size={14} className="text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Financing Plans</span>
          </div>
        </div>

        {/* MAIN DISPLAY */}
        <div className="text-center mb-12">
          <p className="text-zinc-500 text-sm font-medium mb-1">Estimated Monthly Payment</p>
          <motion.h3 
            key={emi}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold text-white tracking-tighter"
          >
            ₹{Math.round(emi).toLocaleString("en-IN")}
            <span className="text-xl text-zinc-600 ml-2 font-medium italic">/mo.</span>
          </motion.h3>
        </div>

        {/* INPUTS GRID */}
        <div className="grid grid-cols-1 gap-10">
          
          {/* DOWN PAYMENT */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-[11px] font-black uppercase tracking-widest text-zinc-500">Down Payment</label>
              <span className="text-xl font-bold text-white tracking-tight">₹{down.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min="0"
              max={price}
              step="1000"
              value={down}
              onChange={(e) => setDown(Number(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white hover:accent-emerald-500 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* TENURE */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-[11px] font-black uppercase tracking-widest text-zinc-500">Tenure</label>
                <span className="text-xl font-bold text-white tracking-tight">{months} Months</span>
              </div>
              <input
                type="range"
                min="3"
                max="36"
                step="3"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white transition-all"
              />
            </div>

            {/* INTEREST */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-[11px] font-black uppercase tracking-widest text-zinc-500">Interest Rate</label>
                <span className="text-xl font-bold text-white tracking-tight">{rate}%</span>
              </div>
              <input
                type="range"
                min="8"
                max="18"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white transition-all"
              />
            </div>
          </div>
        </div>

        {/* FOOTER STATS */}
        <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
          <StatBox icon={CalendarDays} label="End Date" value={`Feb ${2026 + Math.floor(months/12)}`} />
          <StatBox icon={CreditCard} label="Loan Amount" value={`₹${principal.toLocaleString("en-IN")}`} />
          <StatBox icon={Activity} label="Processing" value="0%" />
        </div>
      </div>
    </div>
  );
}

function StatBox({ icon: Icon, label, value }: any) {
  return (
    <div className="text-center group">
      <div className="flex justify-center mb-2">
        <Icon size={16} className="text-zinc-700 group-hover:text-emerald-500 transition-colors" />
      </div>
      <p className="text-[9px] font-black uppercase tracking-tighter text-zinc-600">{label}</p>
      <p className="text-sm font-bold text-zinc-300">{value}</p>
    </div>
  );
}