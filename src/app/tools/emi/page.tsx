import EmiCalculator from "@/components/EmiCalculator";

export default function EmiPage() {
  return (
    <section className="min-h-screen bg-black text-white py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black mb-10">EMI Calculator</h1>
        <EmiCalculator price={149999} />
      </div>
    </section>
  );
}
