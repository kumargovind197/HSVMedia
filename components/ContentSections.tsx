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

export const PublishersPage: React.FC<PageProps> = ({ onNavigate }) => (
  <div className="bg-white">
    {/* Hero Section */}
    <div className="bg-[#2fa4e7] pt-32 pb-24 text-center text-white relative overflow-hidden">
      {/* Architectural Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_40px)]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <h2 className="text-5xl md:text-[56px] font-normal mb-8 uppercase tracking-wide">PUBLISHERS</h2>
          <div className="w-24 h-px bg-white/60 mx-auto mb-10"></div>
          <p className="text-lg md:text-[19px] leading-relaxed font-light text-white/95">
            It's time to Access Quality Advertisers and Generate Revenue for your website.  Join our team and Start monetizing your traffic today. The goal of HSV media  is to offer quality advertising formats, a
            high income, a simple implementation and an easy management.
          </p>
        </RevealOnScroll>
      </div>
    </div>

    {/* Features Grid */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        {/* Feature 1 */}
        <RevealOnScroll delay={100} className="flex flex-col items-center group h-full">
          <div className="w-36 h-36 rounded-full border-[6px] border-[#2fa4e7] flex items-center justify-center text-[#2fa4e7] mb-8 bg-white transition-all duration-500 group-hover:scale-110 shadow-lg shadow-blue-100 group-hover:shadow-blue-200 group-hover:rotate-3">
            <Share2 size={70} strokeWidth={1.2} />
          </div>
          <h3 className="text-[26px] font-normal text-slate-700 mb-6 group-hover:text-[#2fa4e7] transition-colors">Recognized advertisers:</h3>
          <p className="text-[#666] leading-7 font-light text-[15px]">
            HSV Media team chooses its partners for their notoriety. Our network only works with national
            and international renowned advertisers that give prestige to your site.
            Their common point: the quality of their content and the confidence they inspire in users.
          </p>
        </RevealOnScroll>

        {/* Feature 2 */}
        <RevealOnScroll delay={300} className="flex flex-col items-center group h-full">
          <div className="w-36 h-36 rounded-full border-[6px] border-[#2fa4e7] flex items-center justify-center text-[#2fa4e7] mb-8 bg-white transition-all duration-500 group-hover:scale-110 shadow-lg shadow-blue-100 group-hover:shadow-blue-200 group-hover:rotate-3">
            <Globe size={70} strokeWidth={1.2} />
          </div>
          <h3 className="text-[26px] font-normal text-slate-700 mb-6 group-hover:text-[#2fa4e7] transition-colors">Automatic campaign management</h3>
          <p className="text-[#666] leading-7 font-light text-[15px]">
            Once integrated ads on your pages, HSV Media team supports campaign management.
            You will not waste time to choose yourself listings that best match your target is done for you!
            So save yourself time to manage the content of your site.
          </p>
        </RevealOnScroll>

        {/* Feature 3 */}
        <RevealOnScroll delay={500} className="flex flex-col items-center group h-full">
          <div className="w-36 h-36 rounded-full border-[6px] border-[#2fa4e7] flex items-center justify-center text-[#2fa4e7] mb-8 bg-white transition-all duration-500 group-hover:scale-110 shadow-lg shadow-blue-100 group-hover:shadow-blue-200 group-hover:rotate-3">
            <Target size={70} strokeWidth={1.2} />
          </div>
          <h3 className="text-[26px] font-normal text-slate-700 mb-6 group-hover:text-[#2fa4e7] transition-colors">Monitoring interface easy to work with</h3>
          <p className="text-[#666] leading-7 font-light text-[15px]">
            No need to be a developer to run advertisements: simple and intuitive interface
            HSV Media team allows you to quickly integrate the ads with a unique code.
            In order to provide even more responsiveness and transparency, the company has developed
            a real time statistical service.
          </p>
        </RevealOnScroll>
      </div>
      
      <RevealOnScroll delay={600} className="text-center mt-16 mb-8">
        <button 
            onClick={() => onNavigate && onNavigate('register')}
            className="bg-[#2fa4e7] text-white font-bold text-lg py-4 px-16 rounded uppercase hover:bg-[#258bd3] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
        >
          Signup
        </button>
      </RevealOnScroll>
    </div>

    {/* Banner */}
    <div className="bg-[#2fa4e7] py-24 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="transform scale-[3] rotate-12 text-white animate-pulse"><Share2 size={300} /></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-normal uppercase tracking-wide">HSV Media team, CLOSER TO YOUR NEEDS</h2>
        </RevealOnScroll>
      </div>
    </div>

    {/* Payouts */}
    <div className="bg-[#f9f9f9] py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <RevealOnScroll>
            <div className="flex justify-center mb-10 relative">
            <Coins size={90} className="text-[#2fa4e7] transform hover:scale-110 transition-transform duration-300" strokeWidth={1} />
            <ArrowUp size={40} className="text-[#2fa4e7] absolute top-[-10px] ml-20 animate-bounce" />
            </div>
            <h3 className="text-3xl font-normal text-slate-700 mb-6">Attractive and guaranteed payouts</h3>
            <p className="text-[#666] leading-relaxed text-lg font-light">
            Save time and money. The rates charged by the Network are clear, fixed and transparent. Ad6media offers customers a fixed fee and guaranteed CPM (cost
            per 1,000 views). Whatever the time of year, you are immune to downward fluctuations of your CPM.
            </p>
        </RevealOnScroll>
      </div>
    </div>

    {/* Availability */}
    <div className="bg-[#eff1f2] py-24 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <RevealOnScroll>
            <div className="flex justify-center mb-10 group">
            <Headset size={90} className="text-[#2fa4e7] group-hover:rotate-12 transition-transform duration-500" strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-normal text-slate-700 mb-6">Available and near to you</h3>
            <p className="text-[#666] leading-relaxed text-lg font-light">
            One of the founding principles of HSV Media team is to offer more availability to its customers. The Network also responds quickly as possible to any request.
            </p>
        </RevealOnScroll>
      </div>
    </div>

    {/* Formats Switcher Section */}
    <div id="formats" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <RevealOnScroll>
            <h2 className="text-[40px] font-normal text-[#337ab7] mb-8">Our formats</h2>
            <p className="text-[#666] mb-16 text-lg font-light max-w-2xl mx-auto">
            Depending on your offer and your message, choose one of our impact formats.
            </p>
            <div className="w-32 h-px bg-slate-200 mx-auto mb-20"></div>
        </RevealOnScroll>
        <div className="text-left">
           <AdFormatSwitcher />
        </div>
      </div>
    </div>
  </div>
);

export const AdvertisersPage: React.FC<PageProps> = ({ onNavigate }) => (
  <div className="bg-white">
    {/* Hero Section */}
    <div className="bg-[#2fa4e7] pt-32 pb-24 text-center text-white relative overflow-hidden">
       <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_40px)]"></div>
      </div>
       <div className="max-w-5xl mx-auto px-4 relative z-10">
        <RevealOnScroll>
            <h2 className="text-5xl md:text-[56px] font-normal mb-8 uppercase tracking-wide">AGENCIES / ADVERTISERS</h2>
            <div className="w-24 h-px bg-white/60 mx-auto mb-10"></div>
            <h3 className="text-2xl font-bold mb-6">Why to choose between Branding and Performance?</h3>
            <p className="text-lg md:text-[19px] leading-relaxed font-light text-white/95">
            HSV Media team driver and optimizes your ROI with different economics models in a premium environment. The ads offered by
            HSV Media are contextualized to be consistent with the interests of your target.
            </p>
        </RevealOnScroll>
      </div>
    </div>
    
    {/* Technical Solutions */}
    <div id="solutions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <RevealOnScroll className="mb-16">
        <h2 className="text-[40px] font-normal text-[#337ab7] mb-4">Our technical solutions</h2>
        <p className="text-[#666] text-lg font-light mb-8">An exclusive technology for your campaigns.</p>
        <div className="w-32 h-px bg-slate-200 mx-auto"></div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Data Profiling */}
        <RevealOnScroll delay={100} className="flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
           <div className="mb-8 text-[#2fa4e7] group-hover:scale-110 transition-transform">
             <ScanFace size={90} strokeWidth={1} />
           </div>
           <h3 className="text-2xl font-normal text-slate-700 mb-6 group-hover:text-[#2fa4e7]">Data profiling</h3>
           <p className="text-[#666] leading-relaxed font-light text-[15px]">
             Our careful analysis of the data ensures effective targeting in order to maintain a high conversion rate.
           </p>
        </RevealOnScroll>
        {/* Live Optimization */}
        <RevealOnScroll delay={300} className="flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
           <div className="mb-8 text-[#2fa4e7] group-hover:scale-110 transition-transform">
             <LineChart size={90} strokeWidth={1} />
           </div>
           <h3 className="text-2xl font-normal text-slate-700 mb-6 group-hover:text-[#2fa4e7]">Live Optimization</h3>
           <p className="text-[#666] leading-relaxed font-light text-[15px]">
             Our own ad server gives us a thorough monitoring and control of the results.
           </p>
        </RevealOnScroll>
        {/* Tag Management */}
        <RevealOnScroll delay={500} className="flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
           <div className="mb-8 text-[#2fa4e7] group-hover:scale-110 transition-transform">
             <ShieldCheck size={90} strokeWidth={1} />
           </div>
           <h3 className="text-2xl font-normal text-slate-700 mb-6 group-hover:text-[#2fa4e7]">Tag management & brand safety</h3>
           <p className="text-[#666] leading-relaxed font-light text-[15px]">
             Our premium network ensures a transparent and secure broadcasting. An easy tags management for our partners.
           </p>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={600} className="mt-20">
        <button 
            onClick={() => onNavigate && onNavigate('register')}
            className="bg-[#2fa4e7] border-2 border-[#2fa4e7] text-white font-bold text-2xl py-3 px-16 rounded uppercase hover:bg-white hover:text-[#2fa4e7] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          SIGNUP
        </button>
      </RevealOnScroll>
    </div>

    {/* Theme Packs */}
    <div id="themes" className="bg-[#eff1f2] py-24 border-t border-slate-200">
       <div className="max-w-7xl mx-auto px-4">
         <RevealOnScroll className="text-center mb-16">
            <h2 className="text-[40px] font-normal text-[#337ab7] mb-4">Our theme packs</h2>
            <p className="text-[#666] text-lg font-light mb-12">Discover our main verticals.</p>
            <div className="w-32 h-px bg-slate-300 mx-auto"></div>
         </RevealOnScroll>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
            {/* News */}
            <RevealOnScroll delay={100} className="flex gap-6 items-start p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default group">
               <div className="text-[#2fa4e7] flex-shrink-0 group-hover:scale-110 transition-transform"><Newspaper size={70} strokeWidth={1} /></div>
               <div>
                  <h3 className="text-2xl font-normal text-slate-700 mb-2">The <span className="text-[#2fa4e7]">news</span> pack</h3>
                  <p className="text-[#666] font-light leading-relaxed">The widest offer: media brands, sites and information portals, BtoB sites ...</p>
               </div>
            </RevealOnScroll>
            {/* High Tech */}
            <RevealOnScroll delay={200} className="flex gap-6 items-start p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default group">
               <div className="text-[#2fa4e7] flex-shrink-0 group-hover:scale-110 transition-transform"><Bot size={70} strokeWidth={1} /></div>
               <div>
                  <h3 className="text-2xl font-normal text-slate-700 mb-2">The pack High - Tech</h3>
                  <p className="text-[#666] font-light leading-relaxed">All High-Tech interests: from the taking of Information to the practice of gaming</p>
               </div>
            </RevealOnScroll>
            {/* Woman */}
            <RevealOnScroll delay={300} className="flex gap-6 items-start p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default group">
               <div className="text-[#2fa4e7] flex-shrink-0 group-hover:scale-110 transition-transform"><User size={70} strokeWidth={1} /></div>
               <div>
                  <h3 className="text-2xl font-normal text-slate-700 mb-2">The woman pack</h3>
                  <p className="text-[#666] font-light leading-relaxed">fashion / lifestyle / health Multiple points of contacts for girls: news, radio, boards, forums ...</p>
               </div>
            </RevealOnScroll>
            {/* Sport */}
            <RevealOnScroll delay={400} className="flex gap-6 items-start p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default group">
               <div className="text-[#2fa4e7] flex-shrink-0 group-hover:scale-110 transition-transform"><Trophy size={70} strokeWidth={1} /></div>
               <div>
                  <h3 className="text-2xl font-normal text-slate-700 mb-2">The <span className="text-[#2fa4e7]">sport</span> pack</h3>
                  <p className="text-[#666] font-light leading-relaxed">Comprehensive coverage of all sports with a powerful offer on Football</p>
               </div>
            </RevealOnScroll>
             {/* Young */}
            <RevealOnScroll delay={500} className="flex gap-6 items-start p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default group">
               <div className="text-[#2fa4e7] flex-shrink-0 group-hover:scale-110 transition-transform"><Music size={70} strokeWidth={1} /></div>
               <div>
                  <h3 className="text-2xl font-normal text-slate-700 mb-2">The young pack</h3>
                  <p className="text-[#666] font-light leading-relaxed">Coverage of Interests: outings, school, employment</p>
               </div>
            </RevealOnScroll>
             {/* Community */}
            <RevealOnScroll delay={600} className="flex gap-6 items-start p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default group">
               <div className="text-[#2fa4e7] flex-shrink-0 group-hover:scale-110 transition-transform"><MessageCircle size={70} strokeWidth={1} /></div>
               <div>
                  <h3 className="text-2xl font-normal text-slate-700 mb-2">The community pack</h3>
                  <p className="text-[#666] font-light leading-relaxed">A powerful offering in terms of thematic coverage and UGC (user generated content)</p>
               </div>
            </RevealOnScroll>
         </div>
       </div>
    </div>

    {/* Formats Switcher Section */}
    <div id="formats" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <RevealOnScroll>
            <h2 className="text-[40px] font-normal text-[#337ab7] mb-8">Our formats</h2>
            <p className="text-[#666] mb-16 text-lg font-light max-w-2xl mx-auto">
            Depending on your offer and your message, choose one of our impact formats.
            </p>
            <div className="w-32 h-px bg-slate-200 mx-auto mb-20"></div>
        </RevealOnScroll>
        <div className="text-left">
           <AdFormatSwitcher />
        </div>
      </div>
    </div>
  </div>
);

export const CompanyPage = () => (
  <div className="bg-white">
    {/* Hero Section */}
    <div className="bg-[#2fa4e7] pt-32 pb-24 text-center text-white relative overflow-hidden">
      {/* Background Pattern similar to home */}
       <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_40px)]"></div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 relative z-10">
        <RevealOnScroll>
            <h2 className="text-5xl md:text-[56px] font-normal mb-8 uppercase tracking-wide">THE COMPANY</h2>
            <div className="w-24 h-px bg-white/60 mx-auto mb-10"></div>
            <p className="text-lg md:text-[19px] leading-relaxed font-light text-white/95 max-w-5xl mx-auto">
            HSV Media has been founded on a simple idea: advertising on the internet has been founded 10 years ago. The big question is, what do advertisers want today ? What do publishers want ? People want an advertising company with a human aspect and side ; there must be clear prices that are guaranteed and profitable. Our aim goal is to get things going straight forwards in the online advertising world. Advertisements must be different. Quality of advertisements is important.
            </p>
        </RevealOnScroll>
      </div>
    </div>
    
    {/* Intro Columns: Close to you, Innovations, Segmented */}
    <div className="max-w-[1140px] mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Column 1 */}
            <RevealOnScroll delay={100} className="flex flex-col items-center group">
                <div className="mb-6 text-[#2fa4e7] group-hover:scale-110 transition-transform">
                    <Building2 size={100} strokeWidth={1} />
                </div>
                <h3 className="text-[26px] font-normal text-slate-700 mb-6 group-hover:text-[#2fa4e7] transition-colors">Being close to you</h3>
                <p className="text-[#666] leading-7 font-light text-[16px]">
                    Each actor should be accompanied individually. HSV Media  strives to provide personalized support by phone with his partners.
                </p>
            </RevealOnScroll>

             {/* Column 2 */}
            <RevealOnScroll delay={300} className="flex flex-col items-center group">
                <div className="mb-6 text-[#2fa4e7] group-hover:scale-110 transition-transform">
                    <Settings size={100} strokeWidth={1} />
                </div>
                <h3 className="text-[26px] font-normal text-slate-700 mb-6 group-hover:text-[#2fa4e7] transition-colors">Many innovations</h3>
                <p className="text-[#666] leading-7 font-light text-[16px]">
                    The exclusive targeting tools developed by ad6media open you the way to win new customers and retain your regulars. Be certain to propose the right product at the right time.
                </p>
            </RevealOnScroll>

             {/* Column 3 */}
            <RevealOnScroll delay={500} className="flex flex-col items-center group">
                <div className="mb-6 text-[#2fa4e7] group-hover:scale-110 transition-transform">
                    <Layout size={100} strokeWidth={1} />
                </div>
                <h3 className="text-[26px] font-normal text-slate-700 mb-6 group-hover:text-[#2fa4e7] transition-colors">Segmented offers</h3>
                <p className="text-[#666] leading-7 font-light text-[16px]">
                   Save time and money. The rates charged by the authority are clear, attractive and guaranteed. The compensation offer to guarantee a fixed price.
                </p>
            </RevealOnScroll>
        </div>
    </div>

    {/* Why choose Ad6 Media */}
    <div className="bg-[#eff1f2] py-24 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <RevealOnScroll>
            <div className="flex justify-center mb-10 relative">
            <TrendingUp size={90} className="text-[#2fa4e7]" strokeWidth={1} />
            <div className="absolute top-0 ml-16 bg-[#2fa4e7] rounded-full p-2 animate-bounce">
                <span className="text-white font-bold text-lg">$</span>
            </div>
            </div>
            <h3 className="text-3xl font-normal text-slate-700 mb-6">Why choose HSV Media team ?</h3>
            <p className="text-[#666] leading-relaxed text-lg font-light">
            HSV Media is a web advertising company. The name comes from six types of targeting: retargeting, behavioural targeting, contextual, local, socio-demographic, geographic and timed well targeting. It is aimed for publishers who have more than 1,000 visitors per day ; our goal is to target large advertisers. Through its services, the company guarantees high CPM rates. The goal of the company is to offers different and quality ads.
            </p>
        </RevealOnScroll>
      </div>
    </div>

     {/* A Quality Ideal */}
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <RevealOnScroll>
            <div className="flex justify-center mb-10">
            <Smile size={90} className="text-[#2fa4e7] hover:rotate-180 transition-transform duration-700 cursor-pointer" strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-normal text-slate-700 mb-6">a quality Ideal</h3>
            <p className="text-[#666] leading-relaxed text-lg font-light">
            Our goal is to offer a display of quality that will integrate well with your website. To offer quality of ads, HSV selects advertisers that are known nationally, the quality of the advertisers will allow you to add credit to your website. In order to avoid overexposure for the web user, the company uses caps; this allows you to fully control the display on your website. Before thinking return on investment, HSV Media thinks first about the comfort of your visitors.
            </p>
        </RevealOnScroll>
      </div>
    </div>

    {/* EXPERTS AT YOUR SERVICE */}
    <div className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-[1140px] mx-auto px-4 text-center">
         <RevealOnScroll>
            <h2 className="text-[40px] font-normal text-[#337ab7] mb-6 uppercase">EXPERTS AT YOUR SERVICE</h2>
            <p className="text-[#666] text-lg font-light mb-12">
                HSV Media is structured into 3 divisions that work together to optimize advertising effectiveness.
            </p>
            <div className="w-32 h-px bg-slate-300 mx-auto mb-20"></div>
         </RevealOnScroll>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Pole Publishers */}
            <RevealOnScroll delay={100} className="flex flex-col items-center hover:-translate-y-2 transition-transform">
                 <div className="mb-6 text-[#2fa4e7]">
                    <Store size={90} strokeWidth={1} />
                </div>
                <h3 className="text-[26px] font-normal text-slate-700 mb-6 uppercase">POLE PUBLISHERS</h3>
                <p className="text-[#666] leading-7 font-light text-[15px] mb-4">
                    Development of HSV publisher network in France as internationally, with a particularly active development on Germany, Spain, Italy and LATAM.
                </p>
                 <p className="text-[#666] leading-7 font-light text-[15px]">
                    The desire of HSV Media is to build a powerful network across Europe by paying premium publishers CPM fixed throughout the year and across all formats.
                </p>
            </RevealOnScroll>
             {/* Pole Marketing */}
            <RevealOnScroll delay={300} className="flex flex-col items-center hover:-translate-y-2 transition-transform">
                 <div className="mb-6 text-[#2fa4e7]">
                    <Award size={90} strokeWidth={1} />
                </div>
                <h3 className="text-[26px] font-normal text-slate-700 mb-6 uppercase">POLE MARKETING</h3>
                <p className="text-[#666] leading-7 font-light text-[15px] mb-4">
                    Development of commercial offers, advertising revenues and audience monetization solutions.
                </p>
                 <p className="text-[#666] leading-7 font-light text-[15px]">
                    An activity of Business Development to go further in meeting the needs of our partners and providing effective solutions.
                </p>
            </RevealOnScroll>
             {/* Pole Agencies */}
            <RevealOnScroll delay={500} className="flex flex-col items-center hover:-translate-y-2 transition-transform">
                 <div className="mb-6 text-[#2fa4e7]">
                    <Users size={90} strokeWidth={1} />
                </div>
                <h3 className="text-[26px] font-normal text-slate-700 mb-6 uppercase">POLE AGENCIES / PLATFORMS</h3>
                <p className="text-[#666] leading-7 font-light text-[15px] mb-4">
                    Development of the network of buyers basins of HSV hearings on France as internationally.
                </p>
                 <p className="text-[#666] leading-7 font-light text-[15px]">
                    Positioned in the Niche "Branding / Perf" HSV provides media buyers branding formats marketed to performance: Skin, Footer, Interstitial...
                </p>
            </RevealOnScroll>
         </div>
      </div>
    </div>
    
    {/* Jobs and Contact */}
    <div className="bg-[#eff1f2] py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <RevealOnScroll className="mb-12">
                <button className="bg-[#2fa4e7] border-2 border-white text-white font-bold text-2xl py-3 px-12 rounded uppercase hover:bg-white hover:text-[#2fa4e7] transition-colors shadow-md transform hover:scale-105">
                    CONTACT US
                </button>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
                <h3 className="text-4xl font-normal text-[#337ab7] mb-6 uppercase">JOBS</h3>
                <p className="text-[#666] leading-relaxed text-lg font-light mb-4">
                    HSV Media regularly recruit motivated candidates to join our team and bring a new vision to the business. We give everyone a chance to evolve and bring his ideas.
                </p>
                <p className="text-[#666] text-lg font-light">
                    Our various divisions:
                </p>
                <p className="text-lg font-normal text-slate-700 mt-2">
                    Support - Publisher - Advertiser
                </p>
                
                <div className="w-32 h-px bg-slate-300 mx-auto mt-16 mb-12"></div>
                
                <h2 className="text-[40px] font-normal text-[#337ab7] mb-8">Share our values:</h2>
            </RevealOnScroll>
        </div>
    </div>

    {/* Values Images */}
    <div className="bg-white pb-24">
        <div className="max-w-[1140px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Value 1 */}
                <RevealOnScroll delay={100} className="text-center group cursor-pointer">
                    <div className="h-56 mb-6 overflow-hidden relative rounded-lg shadow-lg">
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="Innovation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <h3 className="text-2xl font-normal text-slate-700 mb-4 group-hover:text-[#2fa4e7] transition-colors">Innovation</h3>
                     <p className="text-[#666] leading-relaxed text-[15px] font-light">
                        HSV is a growing network that seeks to better differentiate itself from its competitors, particularly by developing innovative solutions, creative and pioneers in their field, as well as marketing new formats every year.
                    </p>
                </RevealOnScroll>
                 {/* Value 2 */}
                <RevealOnScroll delay={300} className="text-center group cursor-pointer">
                     <div className="h-56 mb-6 overflow-hidden relative rounded-lg shadow-lg">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Expertise" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <h3 className="text-2xl font-normal text-slate-700 mb-4 group-hover:text-[#2fa4e7] transition-colors">Expertise</h3>
                     <p className="text-[#666] leading-relaxed text-[15px] font-light">
                        HSV has its own ad server and its own technology. Thus allowing the network to control its campaigns more optimally and to better respond to customer expectations. The company also plays an expert role with advertisers by providing them with advice on the most appropriate formats.
                    </p>
                </RevealOnScroll>
                 {/* Value 3 */}
                <RevealOnScroll delay={500} className="text-center group cursor-pointer">
                     <div className="h-56 mb-6 overflow-hidden relative rounded-lg shadow-lg">
                        <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop" alt="Adaptability" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <h3 className="text-2xl font-normal text-slate-700 mb-4 group-hover:text-[#2fa4e7] transition-colors">Adaptability</h3>
                     <p className="text-[#666] leading-relaxed text-[15px] font-light">
                        The environment of the web is constantly changing, which is why it is important to know to adapt easily and be reactive, to anticipate changes.
                    </p>
                </RevealOnScroll>
                 {/* Value 4 */}
                <RevealOnScroll delay={700} className="text-center group cursor-pointer">
                     <div className="h-56 mb-6 overflow-hidden relative rounded-lg shadow-lg">
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" alt="Demand and quality" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <h3 className="text-2xl font-normal text-slate-700 mb-4 group-hover:text-[#2fa4e7] transition-colors">Demand and quality</h3>
                     <p className="text-[#666] leading-relaxed text-[15px] font-light">
                        HSV aims to go further and higher. This is a growing network based on the requirement and the rigor of its employees. It is important that each colaborator gives a qualitative and premium image of the network and and work for a better evolution.
                    </p>
                </RevealOnScroll>
            </div>
        </div>
    </div>
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