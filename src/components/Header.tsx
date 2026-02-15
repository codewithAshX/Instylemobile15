"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Store", href: "/" },
  { name: "Buy", href: "/shop" },
  { name: "Repair", href: "/repair" },
  { name: "Sell", href: "/sell" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  /* close dropdown on outside click */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[64px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-white font-semibold text-lg tracking-tight">
          In<span className="text-zinc-400">Style Mobile Services</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium">

          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-zinc-400 hover:text-white transition"
              >
                {link.name}
                {active && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-white"
                  />
                )}
              </Link>
            );
          })}

          {/* TOOLS DROPDOWN */}
          <div ref={toolsRef} className="relative">
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              className="text-zinc-400 hover:text-white transition"
            >
              Tools
            </button>

            <AnimatePresence>
              {toolsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="absolute top-full right-0 mt-4 w-52"
                >
                  <div className="bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl">

                    <Link
                      href="/tools/emi"
                      onClick={() => setToolsOpen(false)}
                      className="block px-5 py-3 text-sm text-zinc-300 hover:bg-white/5"
                    >
                      EMI Calculator
                    </Link>

                    <Link
                      href="/sell"
                      onClick={() => setToolsOpen(false)}
                      className="block px-5 py-3 text-sm text-zinc-300 hover:bg-white/5"
                    >
                      Trade-in Value
                    </Link>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-10 text-3xl font-semibold md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/tools/emi"
              onClick={() => setOpen(false)}
              className="text-zinc-400"
            >
              EMI Tool
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
