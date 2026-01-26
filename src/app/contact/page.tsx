"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const fadeSide = (dir: "left" | "right") => ({
  hidden: { opacity: 0, x: dir === "left" ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
});

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  return (
    <motion.div
      className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-24"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= SUCCESS TOAST ================= */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-6 right-6 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            ✅ Message sent successfully!
          </motion.div>
        )}

        {/* ================= HEADER ================= */}
        <motion.div variants={fadeUp} className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Contact <span className="text-emerald-600">Us</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            We’d love to hear from you. Reach out for inquiries, partnerships,
            or site visits.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto">

          {/* ================= FORM ================= */}
          <motion.div
            variants={fadeSide("left")}
            className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <h2 className="text-2xl font-semibold mb-8 text-gray-900">
              Get In Touch
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {["Name", "Email"].map((label) => (
                <motion.div key={label} variants={fadeUp}>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    {label}
                  </label>
                  <input
                    type={label === "Email" ? "email" : "text"}
                    required
                    placeholder={`Your ${label}`}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3
                               text-gray-900 placeholder-gray-400 bg-white
                               focus:outline-none focus:ring-2 focus:ring-emerald-500
                               transition"
                  />
                </motion.div>
              ))}

              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  placeholder="Your message..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 h-32
                             text-gray-900 placeholder-gray-400 bg-white
                             focus:outline-none focus:ring-2 focus:ring-emerald-500
                             transition"
                />
              </motion.div>

              {/* ================= SUBMIT BUTTON ================= */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.03 } : {}}
                whileTap={!loading ? { scale: 0.97 } : {}}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg
                  font-medium shadow-md transition
                  ${
                    loading
                      ? "bg-emerald-400 cursor-not-allowed"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* ================= INFO ================= */}
          <motion.div
            variants={fadeSide("right")}
            className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <h2 className="text-2xl font-semibold mb-8 text-gray-900">
              Contact Information
            </h2>

            <motion.div variants={container} className="space-y-6 text-gray-700">
              {[
                "123 Real Estate St, City, State 12345",
                "(555) 123-4567",
                "info@realestate.com",
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <span className="h-2 w-2 mt-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* ================= OFFICE HOURS ================= */}
            <motion.div variants={fadeUp} className="mt-10">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="text-emerald-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-900">
                  Office Hours
                </h3>
              </div>

              <p className="text-gray-700">
                Monday – Friday: 9:00 AM – 6:00 PM
              </p>
              <p className="text-gray-700">
                Saturday: 10:00 AM – 4:00 PM
              </p>
              <p className="text-gray-700">
                Sunday: Closed
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
