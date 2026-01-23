import React from 'react';
import { Smartphone, Layout, PlaySquare, Bell, CreditCard, MousePointer2 } from 'lucide-react';

const FormatItem = ({ icon: Icon, title, desc }: any) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-brand-600 mb-4 group-hover:scale-110 transition-transform">
      <Icon size={32} />
    </div>
    <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-sm text-slate-500">{desc}</p>
  </div>
);

const AdFormats: React.FC = () => {
  const formats = [
    { icon: Layout, title: "Display Banners", desc: "Standard IAB sizes with high viewability." },
    { icon: PlaySquare, title: "Video Ads", desc: "Pre-roll and out-stream video for high engagement." },
    { icon: Bell, title: "Push Notifications", desc: "Direct delivery to user devices even when inactive." },
    { icon: Smartphone, title: "Mobile Interstitials", desc: "Full-screen ads that capture complete attention." },
    { icon: CreditCard, title: "Native Ads", desc: "Seamlessly integrated content recommendations." },
    { icon: MousePointer2, title: "Pop-Unders", desc: "Non-intrusive full page landing pages." },
  ];

  return (
    <section id="formats" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Innovative Ad Formats</h2>
                <p className="text-lg text-slate-600">
                    We offer a wide range of high-impact ad formats optimized for all devices and connection speeds. 
                    Choose the format that best suits your campaign goals.
                </p>
            </div>
            <div>
                <button className="px-6 py-3 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:border-brand-500 hover:text-brand-600 transition-colors">
                    View Specs
                </button>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {formats.map((f, i) => (
            <FormatItem key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdFormats;