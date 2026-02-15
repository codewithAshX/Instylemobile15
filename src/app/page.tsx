import MobileHero from "@/components/mobile/MobileHero";
import MobileShop from "@/components/mobile/MobileShop";
import Services from "@/components/mobile/Services";
import BrandStrip from "@/components/mobile/BrandStrip";
import MobileInventory from "@/components/MobileInventory";
// import HotDeal from "@/components/HotDeal";   // ❌ remove deal banner
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Page() {
  return (
    <main className="bg-black">

      {/* 🦸 Hero */}
      <MobileHero />

      {/* 🏷️ Brands */}
      <BrandStrip />

      {/* 🛍️ Inventory grid */}
      <MobileInventory />

      {/* 🛍️ Shop products */}
      <MobileShop />

      {/* 🔧 Services */}
      <Services />

      {/* ⭐ Trust section */}
      <WhyChooseUs />

      {/* 💬 Testimonials */}
      <TestimonialSlider />

      {/* 🧱 Footer
      <Footer /> */}

    </main>
  );
}
