"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Listings", href: "/listings" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
<Link href="/" className="flex items-center gap-2">
  <Image
    src="/Riddhi-Builders-4-1-1024x611.PNG"
    alt="Riddhi Builders Logo"
    width={140}
    height={50}
    priority
    className="object-contain"
  />
</Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative uppercase tracking-wide transition
                    ${
                      active
                        ? "text-orange-500"
                        : "text-gray-700 hover:text-orange-500"
                    }
                  `}
                >
                  {active && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-orange-500">
                      ⌂
                    </span>
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
            aria-label="Toggle Menu"
          >
            <span className="w-6 h-0.5 bg-gray-800" />
            <span className="w-6 h-0.5 bg-gray-800" />
            <span className="w-6 h-0.5 bg-gray-800" />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block text-sm font-semibold uppercase
                  ${
                    pathname === link.href
                      ? "text-orange-500"
                      : "text-gray-700"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
