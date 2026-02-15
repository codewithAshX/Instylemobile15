import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle, ShieldCheck, Zap } from "lucide-react";
import EmiCalculator from "@/components/EmiCalculator";


const products = [
  {
    slug: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    price: 149999,
    originalPrice: 169999,
    stock: 3,
    image: "/iphone-17-pro.png",
    specs: [
      "6.9” Super Retina XDR Display",
      "A19 Pro Chip",
      "48MP Triple Camera",
      "Titanium Frame",
      "1 Year Apple Warranty",
    ],
  },
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE SIDE */}
        <div className="relative w-full h-[500px] bg-zinc-900 rounded-3xl p-10 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain drop-shadow-[0_0_60px_rgba(16,185,129,0.3)]"
          />
        </div>

        {/* DETAILS SIDE */}
        <div>

          {product.stock <= 3 && (
            <div className="inline-block bg-red-500/10 text-red-400 border border-red-500/30 px-4 py-2 rounded-full text-xs font-bold uppercase mb-6">
              Only {product.stock} left in stock
            </div>
          )}

          <h1 className="text-5xl font-black leading-tight">
            {product.name}
          </h1>

          <p className="text-zinc-400 mt-6 text-lg">
            Premium flagship device with certified zero wear and express delivery.
          </p>

          {/* PRICE */}
          <div className="mt-10 flex items-center gap-6">
            <span className="text-4xl font-black text-emerald-400">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-zinc-600 line-through text-xl">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          </div>
<EmiCalculator price={product.price} />

          {/* FEATURES */}
          <div className="mt-10 space-y-4">
            {product.specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-3 text-zinc-300">
                <CheckCircle size={18} className="text-emerald-500" />
                {spec}
              </div>
            ))}
          </div>

          {/* TRUST BADGES */}
          <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-emerald-500" />
              100% Genuine Product
            </div>
            <div className="flex items-center gap-3">
              <Zap size={20} className="text-emerald-500" />
              Express Delivery
            </div>
          </div>

          {/* BUY BUTTON */}
          <a
            href={`https://wa.me/918888108103?text=Hi,%20I%20want%20to%20buy%20${encodeURIComponent(product.name)}`}
            target="_blank"
            className="mt-12 inline-block bg-emerald-500 hover:bg-emerald-400 text-black px-10 py-4 rounded-2xl font-black uppercase transition"
          >
            Buy on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}
