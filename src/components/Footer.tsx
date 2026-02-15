"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Phone } from "lucide-react";

export default function PremiumFooter() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-purple-600 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue-600 blur-[160px] rounded-full" />
      </div>

      {/* GRID */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-3 gap-12 border-b border-white/10">

        {/* COMPANY */}
        <FooterCol title="Company">
          <FooterLink href="/about">About us</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
        </FooterCol>

        {/* SHOP */}
        <FooterCol title="Shop">
          <FooterLink href="/shop">Buy Phones</FooterLink>
          <FooterLink href="/sell">Sell Phone</FooterLink>
          <FooterLink href="/repair">Repair Service</FooterLink>
          <FooterLink href="/accessories">Accessories</FooterLink>
        </FooterCol>

        {/* CONTACT */}
        <FooterCol title="Contact">
          <p className="text-sm text-zinc-400">
            St. Michael Chowk, Ramnagar, Chandrapur
          </p>
          <p className="text-sm text-zinc-400 mt-2">
            +91 8888108103
          </p>
          <p className="text-sm text-zinc-400 mt-1">
            instylemobile@gmail.com
          </p>

          <div className="flex gap-3 mt-5">
            <Social><Facebook size={16} /></Social>
            <Social><Instagram size={16} /></Social>
            <Social><Youtube size={16} /></Social>
          </div>
        </FooterCol>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-sm">

        <div>
          <p>© 2026 InStyle Mobile. All rights reserved.</p>
          <p className="text-xs mt-1">Built by CodewithAshX</p>
        </div>

        <div className="flex items-center gap-4 opacity-80">
          <Image src="/payments/upi.png" alt="UPI" width={40} height={24}/>
          <Image src="/payments/visa.png" alt="Visa" width={40} height={24}/>
        </div>
      </div>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/918888108103"
        target="_blank"
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition"
      >
        <Phone size={18} />
        Chat Us
      </a>

    </footer>
  );
}


/* ---------- COMPONENTS ---------- */

function FooterCol({ title, children }: any) {
  return (
    <div>
      <h3 className="font-semibold mb-4 tracking-wide">{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="text-zinc-400 text-sm hover:text-white transition w-fit"
    >
      {children}
    </Link>
  );
}

function Social({ children }: any) {
  return (
    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center
    hover:bg-white hover:text-black transition cursor-pointer">
      {children}
    </div>
  );
}
