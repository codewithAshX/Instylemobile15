import Image from "next/image";

const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-IN").format(n);

/* Dummy inventory — later we connect DB */
const products = [
  {
    slug: "iphone-15-pro",
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 99999,
    originalPrice: 119999,
    battery: "92%",
    warranty: "6 Months",
    img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=900",
    description:
      "Fully tested device with original parts, Face ID working, no repairs.",
  },
  {
    slug: "s24-ultra",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 109999,
    originalPrice: 124999,
    battery: "95%",
    warranty: "Brand Warranty",
    img: "https://images.unsplash.com/photo-1709744326866-0a4b4c2c27b1?q=80&w=900",
    description:
      "Like new condition, includes box, cable & warranty card.",
  },
];

export default function ProductPage({ params }: any) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    return <div className="p-20 text-center">Product not found</div>;
  }

  const whatsapp = `https://wa.me/91XXXXXXXXXX?text=Hi,%20I%20want%20${encodeURIComponent(product.name)}`;

  return (
    <main className="bg-zinc-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* IMAGE */}
        <div className="relative h-[450px] bg-white rounded-3xl p-10">
          <Image
            src={product.img}
            alt={product.name}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>

        {/* INFO */}
        <div>
          <p className="uppercase text-zinc-400 font-bold text-sm">
            {product.brand}
          </p>

          <h1 className="text-4xl font-black mt-2">
            {product.name}
          </h1>

          <p className="text-zinc-500 mt-6">
            {product.description}
          </p>

          <div className="mt-8">
            <p>Battery Health: {product.battery}</p>
            <p>Warranty: {product.warranty}</p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="text-4xl font-black">
              ₹{formatPrice(product.price)}
            </span>
            <span className="text-lg text-zinc-400 line-through">
              ₹{formatPrice(product.originalPrice)}
            </span>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            className="mt-10 inline-block bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold uppercase"
          >
            Order on WhatsApp
          </a>
        </div>

      </div>
    </main>
  );
}
