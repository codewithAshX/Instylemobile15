// "use client";

// import { useEffect, useState } from "react";

// const offers = [
//   "🔥 Exchange Bonus up to ₹8,000 on iPhone",
//   "⚡ Free screen guard with every purchase",
//   "🎁 Get charger + cable combo free today",
// ];

// export default function OfferSlider() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => {
//       setIndex((prev) => (prev + 1) % offers.length);
//     }, 3000);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <div className="bg-emerald-600 text-white text-center py-3 font-semibold text-sm">
//       {offers[index]}
//     </div>
//   );
// }
