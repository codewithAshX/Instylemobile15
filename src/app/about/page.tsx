"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HEADER ================= */}
      <section className="pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          About <span className="text-emerald-600">Us</span>
        </h1>

        <div className="max-w-5xl mx-auto px-6 text-sm leading-7 text-gray-700 space-y-6">
          <p>
            RiddhiBuilders has a unique ethical and humanistic approach while
            operating in the real estate business. The company is supported by
            thousands of earnest employees and happy customers across the world.
            RiddhiBuilders strives to be the ideal destination that fulfills
            aspirations of our investors.
          </p>

          <p>
            Transparency and trust form the foundation of our operations.
            Our diverse teams across engineering, architecture, marketing,
            finance, and law work in harmony to create dream homes that stand
            as symbols of quality, innovation, and long-term value.
          </p>
        </div>
      </section>

      {/* ================= VISION / MISSION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-12 text-sm leading-7 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Our Vision
              </h2>
              <p>
                To be Hyderabad’s most trusted and valuable real estate
                developer, delivering luxury residential and commercial spaces
                that meet global standards while redefining urban living.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Our Mission
              </h2>
              <p className="mb-4">
                To transform customer aspirations into reality by developing
                premium projects that combine architectural excellence,
                sustainability, and innovation.
              </p>

              <p>
                We aim to create iconic landmarks through ethical practices,
                eco-friendly initiatives, and uncompromising quality across
                Telangana and Andhra Pradesh.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[420px] w-full">
            <Image
              src="/Riddhi-Builders-4-1-1024x611.PNG"
              alt="RiddhiBuilders Project"
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </div>

        </div>
      </section>

      {/* ================= QUOTE STRIP ================= */}
      <section className="bg-emerald-600 py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white text-2xl md:text-3xl font-extrabold leading-relaxed">
            If we multiply numbers, it is{" "}
            <span className="text-gray-900">MATHEMATICS</span>. <br />
            If we multiply your investments, it is{" "}
            <span className="text-gray-900">RiddhiBuilders</span>.
          </p>
        </div>
      </section>

      {/* ================= CHAIRMAN SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/indian_buisnessman.png"
              alt="Rajesh Thakur"
              className="w-full max-w-sm rounded-xl shadow-lg"
            />
          </div>

          {/* CONTENT */}
          <div className="text-sm leading-7 text-gray-700">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Dr. Rajesh{" "}
              <span className="text-emerald-600">Thakur</span>
            </h2>

            <p className="font-medium mb-6 text-gray-900">
              Founder-Chairman & Managing Director
            </p>

            <p className="mb-4">
              Dr. Rajesh Thakur serves as the Founder Chairman and Managing
              Director of RiddhiBuilders. With over three decades of experience
              in real estate, he has played a pivotal role in developing
              landmark projects across Telangana.
            </p>

            <p>
              He strongly believes in transparency, customer trust, and
              delivering long-term value through ethical and professional
              business practices.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
