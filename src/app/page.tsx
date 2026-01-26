"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

/* ================= TYPES ================= */

type Property = {
  id: number;
  title: string;
  city: string;
  location: string;
  beds: number;
  baths: number;
  price: number;
  image: string;
};

type Category = {
  title: string;
  image: string;
};

type Testimonial = {
  name: string;
  role: string;
  rating: number;
  text: string;
};

/* ================= DATA ================= */

const FEATURED_PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Luxury Apartment",
    city: "Mumbai",
    location: "Andheri",
    beds: 3,
    baths: 2,
    price: 125,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=70",
  },
  {
    id: 2,
    title: "Premium Villa",
    city: "Hyderabad",
    location: "Gachibowli",
    beds: 4,
    baths: 4,
    price: 320,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=70",
  },
  {
    id: 3,
    title: "Residential Plot",
    city: "Bangalore",
    location: "Whitefield",
    beds: 0,
    baths: 0,
    price: 90,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=70",
  },
];

const CATEGORIES: Category[] = [
  {
    title: "Apartments",
    image:
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?w=800&q=70",
  },
  {
    title: "Villas",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=70",
  },
  {
    title: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=70",
  },
  {
    title: "Plots",
    image:
      "https://images.unsplash.com/photo-1592595896616-c37162298647?w=800&q=70",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rahul Sharma",
    role: "Apartment Buyer • Mumbai",
    rating: 5,
    text:
      "Very transparent process and excellent construction quality. Delivered exactly what was promised.",
  },
  {
    name: "Anjali Verma",
    role: "Villa Owner • Hyderabad",
    rating: 5,
    text:
      "Professional team, timely delivery, and great support even after possession.",
  },
  {
    name: "Suresh Reddy",
    role: "Investor • Bangalore",
    rating: 4,
    text:
      "Good ROI-focused projects and honest guidance. One of the most reliable builders.",
  },
  {
    name: "Neha Kapoor",
    role: "First-time Buyer • Pune",
    rating: 5,
    text:
      "Buying my first home felt stress-free thanks to their clear communication.",
  },
];

/* ================= PAGE ================= */

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] bg-black overflow-hidden">
        {/* Mobile Image */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/HERO.PNG"
            alt="Riddhi Builders premium real estate"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Desktop Video */}
        <video
          className="absolute inset-0 hidden md:block w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        >
          <source src="/back.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Riddhi Builders
          </h1>

          <p className="max-w-md text-gray-200 text-sm sm:text-base mb-7">
            Premium residential & commercial properties across India
          </p>

          <button
            onClick={() => router.push("/listings")}
            className="w-full max-w-xs rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Explore Properties
          </button>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <Section
  title="Featured Properties"
  subtitle="Handpicked homes & smart investments across top Indian cities"
>
  {/* Section meta */}
  <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    <p className="text-sm text-gray-600 max-w-xl">
      Explore our most in-demand residential and investment-ready properties,
      curated by market experts for long-term value and lifestyle comfort.
    </p>

    <button
      onClick={() => router.push("/listings")}
      className="self-start sm:self-auto text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition"
      aria-label="View all featured properties"
    >
      View all →
    </button>
  </div>

  {/* Horizontal cards */}
  <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
    {FEATURED_PROPERTIES.map((property) => (
      <PropertyCard key={property.id} data={property} />
    ))}
  </div>
</Section>


      {/* ================= CATEGORIES ================= */}
      <Section
        title="Browse by Category"
        subtitle="Choose the property type that fits your needs"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="relative h-40 sm:h-56 overflow-hidden rounded-xl border border-gray-200"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width:640px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 flex h-full items-center justify-center">
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ================= TESTIMONIALS ================= */}
      <Testimonials />

      {/* ================= CTA ================= */}
      <CTA />

      {/* ================= MOBILE CALL ================= */}
      <a
        href="tel:+919876543210"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-emerald-600 px-5 py-3 text-white shadow-xl md:hidden"
        aria-label="Call Now"
      >
        📞 Call Now
      </a>
    </>
  );
}

/* ================= COMPONENTS ================= */

type SectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function PropertyCard({ data }: { data: Property }) {
  const router = useRouter();

  return (
    <div
      className="
        snap-start min-w-[88%] sm:min-w-[340px]
        bg-white border border-gray-200 rounded-2xl
        overflow-hidden
        transition-transform duration-300
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative">
        <Image
          src={data.image}
          alt={data.title}
          width={400}
          height={260}
          sizes="(max-width: 640px) 88vw, 340px"
          className="h-56 w-full object-cover"
          priority={false}
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Featured
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title + Location */}
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {data.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          {data.location}, {data.city}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-gray-100" />

        {/* Specs */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{data.beds} Beds</span>
          <span>•</span>
          <span>{data.baths} Baths</span>
          <span>•</span>
          <span>Ready</span>
        </div>

        {/* Price */}
        <p className="mt-4 text-xl font-bold text-emerald-600">
          ₹{data.price} Lakhs
        </p>

        {/* CTA */}
        <button
          onClick={() => router.push(`/properties/${data.id}`)}
          className="
            mt-5 w-full rounded-lg
            bg-emerald-600 py-2.5
            text-white font-semibold
            hover:bg-emerald-700 transition
          "
          aria-label={`View details for ${data.title}`}
        >
          View Details
        </button>
      </div>
    </div>
  );
  <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
  {[
    { label: "Verified Listings", value: "100%" },
    { label: "Avg ROI", value: "12–18%" },
    { label: "Cities Covered", value: "12+" },
    { label: "Happy Clients", value: "1,500+" },
  ].map((item) => (
    <div key={item.label}>
      <p className="text-xl font-bold text-gray-900">{item.value}</p>
      <p className="text-xs text-gray-600 mt-1">{item.label}</p>
    </div>
  ))}
</div>

}


function Testimonials() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Google Reviews
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Trusted by real homeowners & investors
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-5 review-scroll hover:[animation-play-state:paused]">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="min-w-[85%] sm:min-w-[320px] lg:min-w-[360px] rounded-xl border border-gray-200 bg-gray-50 p-6"
              >
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                      key={idx}
                      className={`text-sm ${
                        idx < t.rating
                          ? "text-emerald-500"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  “{t.text}”
                </p>

                <p className="text-sm font-semibold text-gray-900">
                  {t.name}
                </p>
                <p className="text-xs text-gray-600">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes reviewScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .review-scroll {
          animation: reviewScroll 26s linear infinite;
        }
      `}</style>
    </section>
  );
}

function CTA() {
  const router = useRouter();

  return (
    <section className="bg-gray-900 py-20 text-center">
      <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-white">
        Ready to Find Your Dream Property?
      </h2>

      <p className="mx-auto mb-7 max-w-md text-gray-400">
        Verified listings • Trusted experts • Best market deals
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => router.push("/contact")}
          className="rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          Talk to an Expert
        </button>

        <button
          onClick={() => router.push("/listings")}
          className="rounded-lg border border-gray-600 px-8 py-3 text-white transition hover:bg-white hover:text-gray-900"
        >
          Browse Properties
        </button>
      </div>
    </section>
  );
}
