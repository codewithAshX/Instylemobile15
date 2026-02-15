"use client";

const brands = [
  { name: "Apple", logo: "/brands/apple.png" },
  { name: "Samsung", logo: "/brands/samsung-8.svg" },
  { name: "OnePlus", logo: "/brands/oneplus.svg" },
  { name: "Xiaomi", logo: "/brands/miimages.png" },
  { name: "Realme", logo: "/brands/Realme_logo_SVG.svg.png" },
  { name: "Vivo", logo: "/brands/vivo.png" },
  { name: "Oppo", logo: "/brands/oppo.png" },
  { name: "Nothing", logo: "/brands/nothing.png" },
];

export default function BrandStrip() {
  return (
    <div className="bg-white py-10 overflow-hidden border-y border-zinc-200">

      <div className="flex w-max animate-scroll gap-20 px-6 items-center">

        {[...brands, ...brands].map((b, i) => (
          <div
            key={i}
            className="flex items-center justify-center opacity-60 hover:opacity-100 transition duration-300"
          >
            <img
              src={b.logo}
              alt={b.name}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        ))}

      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
