// import React from 'react';
// import { Share2, Globe, Target } from 'lucide-react';
// import { RevealOnScroll } from './RevealOnScroll';

// const FeatureItem = ({ icon: Icon, title, desc, highlight }: any) => (
//   <div className="flex flex-col items-center text-center px-4 h-full">
//     <div className="mb-6">
//       <div className="w-32 h-32 rounded-full flex items-center justify-center bg-white border border-[#2fa4e7]">
//         <Icon size={60} strokeWidth={1.5} className="text-[#2fa4e7]" />
//       </div>
//     </div>

//     <h3 className="text-2xl font-semibold text-slate-800 mb-4">
//       {highlight} <span className="text-[#2fa4e7]">{title}</span>
//     </h3>
//     <p className="text-[#666] text-base leading-relaxed max-w-sm">
//       {desc}
//     </p>
//   </div>
// );

// const Services: React.FC = () => {
//   return (
//     <section id="services" className="py-24 bg-white">
//       <div className="max-w-[1140px] mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-16 max-w-4xl mx-auto">
//           <h2 className="text-3xl md:text-[42px] font-normal text-[#337ab7] mb-6">
//             A quality and hardworker network
//           </h2>
//           <div className="w-24 h-px bg-slate-300 mx-auto mb-6"></div>
//           <p className="text-[#666] text-lg font-light leading-relaxed">
//             HSV media is the network expert in web development and monetization for different audiences. It combines the power of a premium publisher network, real-time optimization of impact formats, with point of view of value creation.
//           </p>
//         </div>

//         {/* Features */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//           <FeatureItem 
//             icon={Share2}
//             highlight="+ of"
//             title="700 live campaigns"
//             desc="HSV continuously broadcasts hundreds of campaigns on behalf of advertisers in various sectors, with a branding and performance objective."
//           />
//           <FeatureItem 
//             icon={Globe}
//             highlight="Present in + of"
//             title="10 countries"
//             desc="Present in France, Spain, Italy, Belgium, Portugal, UK, US & LATAM, HSV provides a dedicated team to support the campaigns by the market or target area."
//           />
//           <FeatureItem 
//             icon={Target}
//             highlight="A network of +"
//             title="1,000 publishers"
//             desc="Through our network of premium publishers and affinities, we can ensure a qualitative audience and vertical targeting (news, btob, hi-tech, travel, women, sports, youth, community...)."
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;