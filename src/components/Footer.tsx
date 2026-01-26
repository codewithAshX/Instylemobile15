"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/* ================= FOOTER ================= */

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0f19] text-gray-300 overflow-hidden">

      {/* GLOW ACCENT */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2
                      h-64 w-64 bg-emerald-600/20 blur-[120px]" />

      {/* ================= TOP ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 py-20
                   grid grid-cols-1 md:grid-cols-4 gap-14"
      >
        {/* ================= BRAND ================= */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative h-16 w-28">
              <Image
                src="/Riddhi-Builders-4-1-1024x611.PNG"
                alt="Riddhi Builders Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <span className="text-lg font-bold text-white leading-tight">
             
            </span>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            A trusted real estate developer delivering premium residential
            and commercial spaces with transparency, innovation, and value.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-6">
            <SocialIcon href="https://facebook.com" Icon={Facebook} />
            <SocialIcon href="https://twitter.com" Icon={Twitter} />
            <SocialIcon href="https://linkedin.com" Icon={Linkedin} />
            <SocialIcon href="https://instagram.com" Icon={Instagram} />
            <SocialIcon href="https://youtube.com" Icon={Youtube} />
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/projects">Projects</FooterLink>
            <FooterLink href="/listings">Listings</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/nri">NRI Corner</FooterLink>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">
            Our Services
          </h4>

          <ul className="space-y-3 text-sm">
            <li>Residential Properties</li>
            <li>Commercial Spaces</li>
            <li>Open Plots</li>
            <li>Investment Consulting</li>
            <li>Property Management</li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">
            Contact Us
          </h4>

          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-emerald-500" />
              <span>
                Chandrapur, Maharashtra <br />
                India
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="text-emerald-500" />
              <a href="tel:+919549546568" className="hover:text-white">
                +91 95495 46568
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} className="text-emerald-500" />
              <a
                href="mailto:info@riddhibuilders.com"
                className="hover:text-white"
              >
                www.riddhibuilders.com
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-800">
        <div
          className="max-w-7xl mx-auto px-6 py-6
                     flex flex-col md:flex-row
                     justify-between items-center
                     text-sm text-gray-400"
        >
          <p>
            © {new Date().getFullYear()} Riddhi Builders. All Rights Reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Crafted with ❤️ by{" "}
            <span className="text-white font-semibold">
             CodewithAshX
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ================= HELPERS ================= */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="relative inline-block text-gray-400
                   after:absolute after:left-0 after:-bottom-1
                   after:h-px after:w-0 after:bg-emerald-500
                   after:transition-all hover:after:w-full
                   hover:text-white transition"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({
  href,
  Icon,
}: {
  href: string;
  Icon: any;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full
                 border border-gray-700
                 flex items-center justify-center
                 hover:bg-emerald-600 hover:border-emerald-600
                 hover:text-white transition"
    >
      <Icon size={18} />
    </a>
  );
}
