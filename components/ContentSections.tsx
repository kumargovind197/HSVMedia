import React, { useState } from 'react';
import { Share2, Globe, Target, Coins, Headset, ArrowUp, Monitor, Lock, User, CheckCircle, Building2, Settings, Layout, TrendingUp, Smile, Store, Award, Users, Newspaper, Bot, Trophy, Music, MessageCircle, ShieldCheck, ScanFace, LineChart, X, Mail, Loader2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface PageProps {
  onNavigate?: (page: string) => void;
}

/* --- HELPER COMPONENTS --- */

const LaptopPreview = ({ type, className = "" }: { type: 'footer' | 'skin' | 'interstitial' | 'slide', className?: string }) => {
  return (
    <div className={`relative mx-auto w-full aspect-[16/10] ${className}`}>
       {/* Laptop Lid (Screen) */}
       <div className="relative bg-[#1a1a1a] rounded-t-xl p-[2.5%] pb-[1.5%] shadow-xl ring-1 ring-white/10 h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
          {/* Camera */}
          <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[1%] h-[1%] bg-[#333] rounded-full flex items-center justify-center z-20">
            <div className="w-[40%] h-[40%] bg-[#0f0] rounded-full opacity-50 animate-pulse"></div>
          </div>
          
          {/* Screen Content Area */}
          <div className="bg-white w-full h-full rounded-sm overflow-hidden relative flex flex-col group">
             {/* Browser Bar */}
             <div className="h-[8%] bg-slate-100 border-b border-slate-200 flex items-center px-[2%] gap-[1%] shrink-0">
                <div className="flex gap-[0.5%] w-[10%]">
                   <div className="w-2 h-2 rounded-full bg-red-400 group-hover:bg-red-500 transition-colors"></div>
                   <div className="w-2 h-2 rounded-full bg-amber-400 group-hover:bg-amber-500 transition-colors"></div>
                   <div className="w-2 h-2 rounded-full bg-green-400 group-hover:bg-green-500 transition-colors"></div>
                </div>
                <div className="flex-1 bg-white h-[60%] rounded-sm ml-[1%] border border-slate-200"></div>
             </div>

             {/* Website Skeleton */}
             <div className="p-[3%] space-y-[3%] flex-1 overflow-hidden relative z-0">
                <div className="flex gap-[3%]">
                   <div className="w-2/3 space-y-[3%]">
                      <div className="h-3 w-1/3 bg-slate-200 rounded-full"></div>
                      <div className="h-24 w-full bg-slate-100 rounded-sm"></div>
                      <div className="space-y-[2%]">
                         <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                         <div className="h-2 w-5/6 bg-slate-100 rounded-full"></div>
                         <div className="h-2 w-4/6 bg-slate-100 rounded-full"></div>
                      </div>
                   </div>
                   <div className="w-1/3">
                      <div className="h-32 w-full bg-slate-50 rounded-sm border border-slate-100"></div>
                   </div>
                </div>
                <div className="grid grid-cols-3 gap-[2%]">
                   <div className="aspect-square bg-slate-100 rounded-sm"></div>
                   <div className="aspect-square bg-slate-100 rounded-sm"></div>
                   <div className="aspect-square bg-slate-100 rounded-sm"></div>
                </div>
             </div>

             {/* --- ADS LAYERS --- */}
             
             {/* Footer Ad */}
             {type === 'footer' && (
                <div className="absolute bottom-0 left-0 w-full h-[15%] bg-[#2fa4e7] border-t-2 border-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center animate-in slide-in-from-bottom duration-500 z-10 hover:bg-[#258bd3] cursor-pointer transition-colors">
                    <div className="text-white text-[1.5cqw] font-bold uppercase tracking-wider flex items-center gap-2">
                       <span className="bg-white/20 px-1 rounded text-[1cqw]">HSV</span>
                       Footer 728x90
                    </div>
                </div>
             )}

             {/* Skin Ad */}
             {type === 'skin' && (
                <div className="absolute inset-0 pointer-events-none z-10">
                    <div className="absolute top-[8%] bottom-0 left-0 w-[12%] bg-[#2fa4e7] border-r border-white/20 flex flex-col items-center justify-center overflow-hidden hover:bg-[#258bd3] transition-colors pointer-events-auto cursor-pointer">
                       <div className="rotate-90 text-white/50 font-bold uppercase tracking-widest text-[1cqw] whitespace-nowrap">Skin Left</div>
                    </div>
                    <div className="absolute top-[8%] bottom-0 right-0 w-[12%] bg-[#2fa4e7] border-l border-white/20 flex flex-col items-center justify-center overflow-hidden hover:bg-[#258bd3] transition-colors pointer-events-auto cursor-pointer">
                       <div className="-rotate-90 text-white/50 font-bold uppercase tracking-widest text-[1cqw] whitespace-nowrap">Skin Right</div>
                    </div>
                    <div className="absolute top-[8%] left-[12%] right-[12%] h-[15%] bg-[#2fa4e7] border-b border-white/20 flex items-center justify-center hover:bg-[#258bd3] transition-colors pointer-events-auto cursor-pointer">
                        <span className="text-white font-bold uppercase tracking-wider text-[1.5cqw]">Skin Header</span>
                    </div>
                </div>
             )}

             {/* Interstitial Ad */}
             {type === 'interstitial' && (
                <div className="absolute inset-0 z-30 bg-black/60 backdrop-blur-[2px] flex items-center justify-center animate-in fade-in duration-300">
                    <div className="w-[70%] h-[70%] bg-white rounded-lg shadow-2xl overflow-hidden relative flex flex-col animate-in zoom-in-95 duration-300 hover:scale-105 transition-transform">
                        <div className="bg-[#2fa4e7] p-[2%] flex justify-end">
                            <div className="w-4 h-4 bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 cursor-pointer">
                                <X size={10} className="text-white" />
                            </div>
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-[#2fa4e7] to-[#1e88c7] flex items-center justify-center flex-col text-white p-4 text-center">
                           <h4 className="font-bold text-[2cqw] mb-2">INTERSTITIAL</h4>
                           <p className="text-[1.2cqw] opacity-90 max-w-[80%]">High-impact full screen format that captures 100% of user attention.</p>
                           <button className="mt-4 bg-white text-[#2fa4e7] px-4 py-1 rounded text-[1cqw] font-bold uppercase shadow-lg hover:bg-slate-50 transition-colors">Learn More</button>
                        </div>
                    </div>
                </div>
             )}

             {/* Slide-in Ad */}
             {type === 'slide' && (
                <div className="absolute bottom-[5%] right-[2%] w-[35%] h-[35%] bg-white rounded shadow-2xl border border-slate-200 z-20 flex flex-col overflow-hidden animate-in slide-in-from-right duration-700 hover:scale-105 transition-transform cursor-pointer">
                     <div className="h-[15%] bg-[#2fa4e7] w-full flex items-center justify-end px-2">
                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                     </div>
                     <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 p-2 text-center group-hover:bg-blue-50 transition-colors">
                        <span className="text-[#2fa4e7] font-bold text-[1.2cqw] uppercase mb-1">Slide-in</span>
                        <div className="w-3/4 h-1 bg-slate-200 rounded-full mb-1"></div>
                        <div className="w-1/2 h-1 bg-slate-200 rounded-full"></div>
                     </div>
                </div>
             )}

          </div>
       </div>
       {/* Laptop Bottom (Keyboard area) */}
       <div className="relative bg-[#222] h-[4%] rounded-b-xl shadow-xl flex justify-center items-start pt-[0.5%] mx-[1%]">
           <div className="w-[15%] h-[20%] bg-[#333] rounded-full"></div>
       </div>
       {/* Reflection under laptop */}
       <div className="absolute -bottom-[5%] left-[5%] right-[5%] h-[10%] bg-black/20 blur-xl rounded-[100%] z-[-1]"></div>
    </div>
  )
}

const AdFormatSwitcher = () => {
  const [activeTab, setActiveTab] = useState<'footer' | 'skin' | 'interstitial' | 'slide'>('footer');

  const formats = [
    { id: 'footer', label: 'Footer', desc: 'Branding format 728x90, available on the lower part of the website, always visible to the user.' },
    { id: 'skin', label: 'Skin-page', desc: 'Premium Format 1800 * 1000. He dresses the website of the publisher and provides excellent visibility for the advertiser. 100% branding.' },
    { id: 'interstitial', label: 'Interstitial', desc: 'Branding Format 950x540, on entry page. Occupies the entire web page for a few seconds and / or can be closed by the user. guaranteed visibility.' },
    { id: 'slide', label: 'Slide-in', desc: 'Float format 300x250, located on the left side of the page and can be reduced or closed by the user with a single click.' },
  ];

  const activeFormat = formats.find(f => f.id === activeTab)!;

  return (
    <RevealOnScroll className="max-w-6xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">
      {/* Controls */}
      <div className="w-full lg:w-1/3 bg-white p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 mb-6 px-2">Select a Format</h3>
        <div className="flex flex-col gap-2 flex-1">
          {formats.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveTab(f.id as any)}
              className={`text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                activeTab === f.id
                  ? 'bg-[#2fa4e7] text-white shadow-md shadow-blue-200 scale-[1.02]'
                  : 'hover:bg-slate-50 text-slate-600 hover:text-[#2fa4e7] hover:pl-8'
              }`}
            >
              <span className="font-bold text-lg">{f.label}</span>
              {activeTab === f.id && <CheckCircle size={18} className="text-white animate-in zoom-in" />}
            </button>
          ))}
        </div>
        <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100 transition-all duration-300 hover:shadow-md">
           <h4 className="text-[#2fa4e7] font-bold text-sm uppercase mb-2">Description</h4>
           <p className="text-slate-600 font-light leading-relaxed text-sm">{activeFormat.desc}</p>
        </div>
      </div>

      {/* Preview */}
      <div className="w-full lg:w-2/3 p-8 lg:p-16 bg-slate-100/50 flex items-center justify-center relative overflow-hidden group">
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#2fa4e7 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
         <div className="w-full max-w-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
            <LaptopPreview type={activeTab as any} />
         </div>
      </div>
    </RevealOnScroll>
  );
};

/* --- PAGE COMPONENTS --- */


export const PublishersPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [openModal, setOpenModal] = useState<"publisher" | "advertiser" | null>(null);

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#2fa4e7] pt-32 pb-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join our team. 
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
           Publishers gain access to vetted advertisers across multiple industries, reducing low-quality or spam ads.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Built for Serious Publishers
        </h2>
        <p className="text-gray-600 text-lg max-w-4xl mx-auto">
          We work with publishers across multiple industries, offering access to
          reliable advertisers while maintaining strict quality and brand safety
          standards.
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">

            <div className="bg-white p-8 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Brand-Safe Advertising
              </h3>
              <p className="text-gray-600">
                Display ads from vetted advertisers only, ensuring your website
                remains clean, credible, and compliant.
              </p>
            </div>

            <div className="bg-white p-8 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Full Control & Filtering
              </h3>
              <p className="text-gray-600">
                Choose which advertisers and categories appear on your site.
                You stay in control of your content and audience experience.
              </p>
            </div>

            <div className="bg-white p-8 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Continuous Quality Monitoring
              </h3>
              <p className="text-gray-600">
                Ongoing checks ensure ad quality, relevance, and performance
                remain consistent over time.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Control Statement */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          You Control What Appears on Your Website
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Our platform is designed to respect your audience. You decide how,
          where, and which ads are shown — without compromising user experience.
        </p>
      </section>

      {/* CTA with 2 buttons */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">
         You decide which ads appear on your site.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          It’s time to access quality advertisers and generate sustainable revenue
          for your website.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={() => setOpenModal("publisher")}
            className="bg-[#2fa4e7] text-white px-10 py-3 rounded-md font-semibold hover:bg-[#258bd3] transition"
          >
            Register as Publisher
          </button>

          <button
            onClick={() => setOpenModal("advertiser")}
            className="bg-gray-900 text-white px-10 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Advertise With Us
          </button>
        </div>
      </section>

      {/* Popup Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-lg rounded-lg p-8 relative">
            
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {openModal === "publisher" && (
              <>
                <h3 className="text-2xl font-semibold mb-6">
                  Register as a Publisher
                </h3>

                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Website URL"
                    className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[#2fa4e7]"
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[#2fa4e7]"
                  />

                  <input
                    type="text"
                    placeholder="Position"
                    className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[#2fa4e7]"
                  />

                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="w-full border border-gray-300 px-4 py-3 rounded-md resize-none focus:outline-none focus:border-[#2fa4e7]"
                  />

                  <button className="w-full bg-[#2fa4e7] text-white py-3 rounded-md font-semibold hover:bg-[#258bd3] transition">
                    Submit
                  </button>
                </div>
              </>
            )}

            {openModal === "advertiser" && (
              <>
                <h3 className="text-2xl font-semibold mb-6">
                  Want to Advertise With Us?
                </h3>

                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[#2fa4e7]"
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[#2fa4e7]"
                  />

                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="w-full border border-gray-300 px-4 py-3 rounded-md resize-none focus:outline-none focus:border-[#2fa4e7]"
                  />

                  <button className="w-full bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                    Send Enquiry
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const AdvertisersPage: React.FC<PageProps> = ({ onNavigate }) => (
  <div className="bg-white">

    {/* Hero */}
    <section className="bg-[#2fa4e7] pt-32 pb-24 text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Our Advertising Solutions
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
         
          We connect your business with the right audience using data-led
          strategies that drive traffic, engagement, and measurable results.
        </p>

        <button
          onClick={() => onNavigate?.('contact')}
          className="mt-10 bg-white text-[#2fa4e7] font-semibold px-10 py-3 rounded-full hover:bg-white/90 transition"
        >
          Launch Your Campaign
        </button>
      </div>
    </section>

    {/* Intro */}
   
    {/* Solutions */}
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Advertising Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {/* Banner Ads */}
          <div className="bg-white p-8 shadow-sm border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Banner Advertising
            </h3>
            <p className="text-gray-600 mb-4">
            
Our banner ad placements are designed to stop the scroll and build brand recognition while driving clicks.

            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Static, animated, and rich media formats</li>
              <li>• Multiple sizes for maximum placement coverage</li>
              <li>• Placement on relevant, high-traffic websites</li>
              <li>• Retargeting and audience-based targeting

                Leaderboard ( 728 x 90 )<br />
Full Banner ( 468 x 60 ) <br />
Button ( 125 x 125 ) <br />
Skyscraper ( 120 x 600 )<br />
Wide Skyscraper ( 160 x 600 )<br />
Vertical Banner ( 120 x 240 ) <br />
Medium Rectangle ( 300 x 250 )<br />
Square Box ( 250 x 250 )<br />
Large Rectangle ( 336 x 280 ) <br />
Small Rectangle ( 180 x 150 )<br />
Wide Vertical Banner ( 160 x 400 )<br />

</li>

            </ul>

          </div>

          {/* Text Ads */}
          <div className="bg-white p-8 shadow-sm border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Text Advertising
            </h3>
            <p className="text-gray-600 mb-4">
              Intent-focused text ads that reach users when they are actively
              searching or browsing relevant content.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Keyword and contextual targeting</li>
              <li>• Optimized messaging and CTAs</li>
              <li>• High relevance with minimal distraction</li>
            </ul>
          </div>

          {/* Pop-under */}
          <div className="bg-white p-8 shadow-sm border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Pop-Under Advertising
            </h3>
            <p className="text-gray-600 mb-4">
              Strategically deployed pop-under campaigns that deliver strong
              conversion rates while maintaining a controlled user experience.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Exit, time, and scroll-based triggers</li>
              <li>• Desktop and mobile compatible</li>
              <li>• Frequency and experience controls</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    {/* Strategy */}
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Performance & Optimization
          </h2>
          <p className="text-gray-600 mb-4">
            Every campaign is tracked, analyzed, and optimized continuously.
            We focus on performance metrics that matter — traffic quality,
            engagement, and conversions.
          </p>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Geographic and audience targeting</li>
            <li>• Behavioral and interest-based data</li>
            <li>• Retargeting and scaling options</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4">
            Compliance & Brand Safety
          </h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• GDPR-compliant ad delivery</li>
            <li>• Fraud and bot protection</li>
            <li>• Brand-safe placements</li>
            <li>• Content and frequency controls</li>
          </ul>
        </div>

      </div>
    </section>

    {/* CTA */}
    <section className="py-20 text-center bg-[#2fa4e7] text-white">
      <h2 className="text-3xl font-bold mb-6">
        Ready to Grow With HSV Media?
      </h2>
      <button
        onClick={() => onNavigate?.('contact')}
        className="bg-white text-[#2fa4e7] px-12 py-3 rounded-full font-semibold hover:bg-white/90 transition"
      >
        Contact Our Team
      </button>
    </section>

  </div>
);






export const RegistrationPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: 'publisher'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call and redirect to Home
    setTimeout(() => {
        setIsSubmitting(false);
        if (onNavigate) onNavigate('home');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f4f6f8] flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <RevealOnScroll className="max-w-xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-slate-100">
        <div>
           <div className="flex justify-center mb-6">
                 <div className="flex items-baseline">
                    <span className="font-black text-4xl text-[#2fa4e7] tracking-tighter leading-none">HSV</span>
                    <span className="text-[#2fa4e7] text-[10px] font-bold uppercase tracking-[0.2em] ml-1">media</span>
                </div>
            </div>
            <h2 className="mt-2 text-center text-3xl font-extrabold text-slate-900">Create your account</h2>
            <p className="mt-2 text-center text-sm text-slate-600">
              Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('login'); }} className="font-medium text-[#2fa4e7] hover:text-[#258bd3]">Sign in</a>
            </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            
            {/* Account Type Selection */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div 
                    onClick={() => setFormData({...formData, type: 'publisher'})}
                    className={`cursor-pointer p-4 rounded-lg border-2 text-center transition-all ${formData.type === 'publisher' ? 'border-[#2fa4e7] bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
                >
                    <div className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center mb-2 ${formData.type === 'publisher' ? 'bg-[#2fa4e7] text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <Globe size={20} />
                    </div>
                    <div className={`font-bold ${formData.type === 'publisher' ? 'text-[#2fa4e7]' : 'text-slate-600'}`}>Publisher</div>
                </div>
                <div 
                    onClick={() => setFormData({...formData, type: 'advertiser'})}
                    className={`cursor-pointer p-4 rounded-lg border-2 text-center transition-all ${formData.type === 'advertiser' ? 'border-[#2fa4e7] bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
                >
                    <div className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center mb-2 ${formData.type === 'advertiser' ? 'bg-[#2fa4e7] text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <Target size={20} />
                    </div>
                    <div className={`font-bold ${formData.type === 'advertiser' ? 'text-[#2fa4e7]' : 'text-slate-600'}`}>Advertiser</div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#2fa4e7] transition-colors">
                        <User size={20} />
                    </div>
                    <input
                      type="text"
                      required
                      className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-[#2fa4e7] focus:border-[#2fa4e7] sm:text-sm transition-all"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>
                
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#2fa4e7] transition-colors">
                        <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      required
                      className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-[#2fa4e7] focus:border-[#2fa4e7] sm:text-sm transition-all"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>

                <div className="relative group">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#2fa4e7] transition-colors">
                        <Lock size={20} />
                    </div>
                    <input
                      type="password"
                      required
                      className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-[#2fa4e7] focus:border-[#2fa4e7] sm:text-sm transition-all"
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                </div>

                <div className="relative group">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#2fa4e7] transition-colors">
                        <CheckCircle size={20} />
                    </div>
                    <input
                      type="password"
                      required
                      className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-[#2fa4e7] focus:border-[#2fa4e7] sm:text-sm transition-all"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    />
                </div>
            </div>

            <div className="flex items-start">
                <input
                  id="agree-terms"
                  name="agree-terms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 text-[#2fa4e7] focus:ring-[#2fa4e7] border-slate-300 rounded cursor-pointer accent-[#2fa4e7]"
                />
                <label htmlFor="agree-terms" className="ml-2 block text-sm text-slate-900 cursor-pointer select-none">
                  I agree to the <a href="#" className="text-[#2fa4e7] hover:underline">Terms of Service</a> and <a href="#" className="text-[#2fa4e7] hover:underline">Privacy Policy</a>
                </label>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-[#2fa4e7] hover:bg-[#258bd3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2fa4e7] uppercase tracking-wide transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
                {isSubmitting ? (
                    <div className="flex items-center gap-2">
                        <Loader2 className="animate-spin" size={20} />
                        Creating Account...
                    </div>
                ) : (
                    'Create Account'
                )}
            </button>
        </form>
      </RevealOnScroll>
    </div>
  );
};

export const LoginPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call and redirect to Home
    setTimeout(() => {
        setIsSubmitting(false);
        if (onNavigate) onNavigate('home');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f4f6f8] flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="max-w-md w-full bg-white p-10 rounded-xl shadow-lg border border-slate-100">
        <div>
            <div className="flex justify-center mb-6">
                <div className="flex items-baseline">
                    <span className="font-black text-4xl text-[#2fa4e7] tracking-tighter leading-none">HSV</span>
                    <span className="text-[#2fa4e7] text-[10px] font-bold uppercase tracking-[0.2em] ml-1">media</span>
                </div>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
            Sign in to your account
            </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#2fa4e7] transition-colors">
                        <User size={20} />
                    </div>
                    <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-[#2fa4e7] focus:border-[#2fa4e7] focus:z-10 sm:text-sm transition-all duration-300"
                    placeholder="Email address"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#2fa4e7] transition-colors">
                        <Lock size={20} />
                    </div>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-[#2fa4e7] focus:border-[#2fa4e7] focus:z-10 sm:text-sm transition-all duration-300"
                    placeholder="Password"
                    />
                </div>
            </div>
            </div>

            <div className="flex items-center justify-between">
            <div className="flex items-center">
                <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#2fa4e7] focus:ring-[#2fa4e7] border-slate-300 rounded cursor-pointer accent-[#2fa4e7]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900 cursor-pointer">
                Remember me
                </label>
            </div>

            <div className="text-sm">
                <a href="#" className="font-medium text-[#2fa4e7] hover:text-[#258bd3]">
                Forgot your password?
                </a>
            </div>
            </div>

            <div>
            <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-[#2fa4e7] hover:bg-[#258bd3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2fa4e7] uppercase tracking-wide transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
                {isSubmitting ? (
                    <div className="flex items-center gap-2">
                        <Loader2 className="animate-spin" size={20} />
                        Signing in...
                    </div>
                ) : (
                    'Sign in'
                )}
            </button>
            </div>
        </form>

        {/* Improved Free Trial Section */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-600 mb-3 text-sm">Don't have an account yet?</p>
            <button 
                onClick={(e) => { e.preventDefault(); if(onNavigate) onNavigate('register'); }} 
                className="w-full py-3 px-4 border-2 border-[#2fa4e7] text-[#2fa4e7] font-bold rounded-md hover:bg-blue-50 transition-colors uppercase text-sm tracking-wide"
            >
                Start your 14-day free trial
            </button>
        </div>

        </RevealOnScroll>
    </div>
  );
};