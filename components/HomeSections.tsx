import React from 'react';
import { Store, Award, Users, ShoppingBag, Car, Leaf, Plane, Ticket, Building2, ShieldCheck, ShoppingCart } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface SectionProps {
  onNavigate?: (page: string) => void;
}

/* --- SIGNUP BANNER --- */
// export const SignupBanner: React.FC<SectionProps> = ({ onNavigate }) => (
//   <section className="bg-[#2fa4e7] py-10 text-center">
//     <button
//       onClick={() => onNavigate?.('register')}
//       className="bg-white text-[#2fa4e7] font-medium text-lg px-10 py-3 rounded hover:opacity-90 transition"
//     >
//       Sign Up
//     </button>
//   </section>
// );


/* --- WHO ARE WE SECTION --- */


/* --- PARTNERS SECTION --- */
// export const Partners = () => (
//   <section id="trust" className="py-16 bg-white border-t">
//     <div className="max-w-6xl mx-auto px-4 text-center">

//       <h3 className="text-xl font-medium text-slate-700 mb-10">
//         Trusted by leading brands
//       </h3>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center text-slate-500">

//         <div className="font-semibold text-lg">FNAC</div>
//         <div className="font-semibold text-lg">FORD</div>
//         <div className="font-semibold text-lg">GARNIER</div>
//         <div className="font-semibold text-lg">BRAVOFLY</div>

//         <div className="font-semibold text-lg">GROUPALIA</div>
//         <div className="font-semibold text-lg">ACCOR HOTELS</div>
//         <div className="font-semibold text-lg">L’OLIVIER ASSURANCE</div>
//         <div className="font-semibold text-lg">3 SUISSES</div>

//       </div>
//     </div>
//   </section>
// );

/* --- MAP SECTION --- */
// export const MapSection = () => (
//   <section className="relative w-full h-[500px] bg-gray-100">
//     {/* Google Map Embed */}
//     <iframe
//       width="100%"
//       height="100%"
//       src="https://maps.google.com/maps?q=8%20boulevard%20Dubreuil%2091400%20Orsay&t=&z=15&ie=UTF8&iwloc=&output=embed"
//       frameBorder="0"
//       style={{ border: 0 }}
//       allowFullScreen
//       aria-hidden="false"
//       tabIndex={0}
//       title="HSV Media Location"
//     />

//     {/* Simple Location Overlay */}
//     <div className="absolute top-4 left-4 bg-[#2fa4e7] text-white px-4 py-2 rounded shadow-md">
//       <h3 className="text-lg font-semibold">Team HSV Media</h3>
//       <p className="text-sm">Orsay, France</p>
//     </div>
//   </section>
// );
