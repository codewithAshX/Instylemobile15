"use client";

import Image from "next/image";
import { X, ShoppingCart } from "lucide-react";

const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-IN").format(n);

export default function ProductModal({ product, onClose }: any) {
  const whatsapp = `https://wa.me/918888108103?text=Hi,%20I%20want%20${encodeURIComponent(
    product.name
  )}`;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center z-50 px-4">
      <div className="bg-white max-w-4xl w-full rounded-3xl overflow-hidden shadow-xl relative">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-zinc-100 p-2 rounded-full"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* IMAGE */}
          <div className="relative h-[350px] md:h-auto bg-zinc-50 p-10">
            <Image
              src={product.img}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* INFO */}
          <div className="p-8 flex flex-col">
            <p className="text-xs uppercase font-bold text-zinc-400">
              {product.brand}
            </p>

            <h2 className="text-2xl font-black mt-2">
              {product.name}
            </h2>

            <p className="text-zinc-500 mt-4 text-sm">
              {product.description}
            </p>

            <div className="mt-6">
              <p className="text-sm">Battery: {product.battery}</p>
              <p className="text-sm">Warranty: {product.warranty}</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-3xl font-black">
                ₹{formatPrice(product.price)}
              </span>
              <span className="line-through text-zinc-400">
                ₹{formatPrice(product.originalPrice)}
              </span>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              className="mt-8 bg-emerald-600 text-white py-4 rounded-xl font-bold uppercase flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} /> Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
