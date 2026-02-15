"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, CheckCircle, UploadCloud, ArrowRight } from "lucide-react";

const steps = ["Device Model", "Condition", "Quote"];

export default function SellForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    condition: "",
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-2xl max-w-3xl mx-auto">
      {/* Step Indicator */}
      <div className="flex justify-between mb-12 relative">
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-zinc-700 -z-10" />
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center gap-2">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm ${
              index <= currentStep ? "bg-emerald-500 text-white" : "bg-zinc-700 text-zinc-400"
            }`}>
              {index + 1}
            </div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider">{step}</span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Select Your Device</h3>
              <input type="text" placeholder="Brand (e.g. Apple)" className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white" />
              <input type="text" placeholder="Model (e.g. iPhone 13)" className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white" />
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Condition Assessment</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Like New", "Light Wear", "Damaged", "Doesn't Turn On"].map(cond => (
                  <button key={cond} className="p-6 rounded-2xl border-2 border-zinc-700 hover:border-emerald-500 text-left">
                    <CheckCircle className="text-emerald-500 mb-3" />
                    <p className="font-bold text-white">{cond}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="text-center space-y-6">
              <h3 className="text-4xl font-black text-white">₹25,000</h3>
              <p className="text-zinc-400">Estimated value for your device</p>
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold">Accept & Book Inspection</button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-12 pt-8 border-t border-zinc-800">
        <button onClick={prevStep} className="text-zinc-400 disabled:opacity-30" disabled={currentStep === 0}>Back</button>
        {currentStep < steps.length - 1 && (
            <button onClick={nextStep} className="bg-white text-zinc-950 px-6 py-3 rounded-full font-bold flex items-center gap-2">
                Next <ArrowRight size={16} />
            </button>
        )}
      </div>
    </div>
  );
}