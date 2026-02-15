import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "InStyle Mobile — Buy, Sell & Repair Smartphones",
  description:
    "Certified smartphones, fast repairs, and trusted service in Chandrapur. Buy, sell, or fix your phone with confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-black text-white antialiased">

        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
