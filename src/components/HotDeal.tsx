"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutServices() {
  const cards = [
    {
      title: "Repair Service",
      desc: "Screen, battery, camera and motherboard repairs with warranty.",
      img: "/repair-phone.png",
      href: "/repair",
    },
    {
      title: "Buy & Sell Phones",
      desc: "Upgrade to certified refurbished devices or sell your old one instantly.",
      img: "/sell-phone.png",
      href: "/sell",
    },
  ];

  return (
    <section className="bg-black py-32 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT TEXT */}
          <div>
            <p className="text-sm text-zinc-500 mb-6">
              About our store
            </p>

            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              Your trusted place for
              <br /> premium mobile care.
            </h2>

            <p className="text-zinc-400 mt-8 text-lg max-w-xl">
              We help you repair, upgrade, sell and buy smartphones with complete
              transparency. Every device is tested, every repair is certified,
              and every customer gets expert support.
            </p>
          </div>

          {/* CLICKABLE CARDS */}
          <div className="grid sm:grid-cols-2 gap-8">

            {cards.map((card, i) => (
              <Link key={i} href={card.href} className="group">

                <div className="bg-[#0b0b0b] border border-white/5 rounded-[2rem] p-8 h-full transition
                                hover:border-white/10 hover:-translate-y-1
                                hover:shadow-[0_20px_60px_rgba(255,255,255,0.05)]">

                  {/* IMAGE */}
                  <div className="relative h-52 mb-6">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-contain group-hover:scale-[1.03] transition duration-500"
                    />
                  </div>

                  {/* TEXT */}
                  <h3 className="text-2xl font-medium mb-2">
                    {card.title}
                  </h3>

                  <p className="text-zinc-400 text-sm mb-6">
                    {card.desc}
                  </p>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={16}/>
                  </span>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
