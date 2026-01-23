import React from 'react';
import { Store, Award, Users, ShoppingBag, Car, Leaf, Plane, Ticket, Building2, ShieldCheck, ShoppingCart } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface SectionProps {
  onNavigate?: (page: string) => void;
}

/* --- SIGNUP BANNER --- */
export const SignupBanner: React.FC<SectionProps> = ({ onNavigate }) => (
  <RevealOnScroll direction="up" className="bg-[#2fa4e7] py-8 text-center">
    <button 
      onClick={() => onNavigate && onNavigate('register')}
      className="bg-[#2fa4e7] border-2 border-white text-white font-bold text-2xl py-3 px-12 rounded uppercase hover:bg-white hover:text-[#2fa4e7] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
    >
      SIGNUP
    </button>
  </RevealOnScroll>
);

/* --- WHO ARE WE SECTION --- */
export const WhoAreWe = () => (
  <section id="about" className="py-24 bg-[#eff1f2] border-t border-slate-200">
    <div className="max-w-[1140px] mx-auto px-4 text-center">
      <RevealOnScroll>
        <h2 className="text-3xl md:text-[42px] font-normal text-[#337ab7] mb-6">Who are we ?</h2>
        <p className="text-[#777] text-lg font-light mb-16">
         Team HSV Media is your advertising partner that helps you grow your business faster. Save time and Build brand recognition while driving clicks. We help you to engage your customer and reach your target audience by delivering performance based advertising solutions.

        </p>
        <div className="w-32 h-px bg-slate-300 mx-auto mb-20"></div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Item 1 */}
        <RevealOnScroll delay={100} className="flex flex-col items-center group">
          <div className="mb-8 text-[#2fa4e7] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
             <Store size={90} strokeWidth={1} />
          </div>
          <h3 className="text-2xl font-normal text-slate-700 mb-6 group-hover:text-[#2fa4e7] transition-colors">At your service since 2010</h3>
          <p className="text-[#777] leading-relaxed max-w-sm font-light">
            HSV Media is a young, innovative, robust and flexible company with the objective to evolve its supply to the demand and the needs of its partners.
          </p>
        </RevealOnScroll>

        {/* Item 2 */}
        <RevealOnScroll delay={300} className="flex flex-col items-center group">
           <div className="mb-8 text-[#2fa4e7] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
             <Award size={90} strokeWidth={1} />
          </div>
          <h3 className="text-2xl font-normal text-slate-700 mb-6 group-hover:text-[#2fa4e7] transition-colors">Innovation Creators</h3>
          <p className="text-[#777] leading-relaxed max-w-sm font-light">
             Our HSV Media team develop and optimize new innovative, impactful, proper formats, with as systematic objective profitability of our partners.
          </p>
        </RevealOnScroll>

        {/* Item 3 */}
        <RevealOnScroll delay={500} className="flex flex-col items-center group">
           <div className="mb-8 text-[#2fa4e7] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
             <Users size={90} strokeWidth={1} />
          </div>
          <h3 className="text-2xl font-normal text-slate-700 mb-6 group-hover:text-[#2fa4e7] transition-colors">A team at your service</h3>
          <p className="text-[#777] leading-relaxed max-w-sm font-light">
           HSV Media is composed of young, creative and always available to find the best solution team. Depending on your issue (France, international, traffic, publisher ...) you will find a dedicated contact.
          </p>
        </RevealOnScroll>
      </div>
    </div>
  </section>
);

/* --- PARTNERS SECTION --- */
export const Partners = () => (
  <section id="trust" className="py-16 bg-white overflow-hidden">
     <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center border-b border-slate-100 pb-12 mb-12">
            {/* Row 1 Logos */}
            <RevealOnScroll delay={100} className="flex items-center justify-center h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 group hover:scale-110 cursor-pointer">
                <div className="flex items-center gap-2">
                   <ShoppingBag size={32} className="text-[#c69c6d] group-hover:scale-110 transition-transform" />
                   <span className="font-bold text-2xl tracking-tighter">fnac</span>
                </div>
            </RevealOnScroll>
             <RevealOnScroll delay={200} className="flex items-center justify-center h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 group hover:scale-110 cursor-pointer">
                <div className="flex items-center gap-2 border-2 border-blue-900 rounded-[100%] px-4 py-1.5">
                    <Car size={24} className="text-blue-900" />
                    <span className="text-blue-900 font-serif italic text-2xl font-bold">Ford</span>
                </div>
            </RevealOnScroll>
             <RevealOnScroll delay={300} className="flex items-center justify-center h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 group hover:scale-110 cursor-pointer">
                <div className="flex items-center gap-1">
                   <Leaf size={28} className="text-green-600" />
                   <span className="text-slate-800 font-sans text-2xl font-bold tracking-wider">GARNIER</span>
                </div>
            </RevealOnScroll>
             <RevealOnScroll delay={400} className="flex items-center justify-center h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 group hover:scale-110 cursor-pointer">
                <div className="flex items-center gap-2">
                    <Plane size={28} className="text-pink-500" />
                    <span className="text-blue-500 font-sans text-2xl font-bold italic">Bravofly</span>
                </div>
            </RevealOnScroll>
        </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {/* Row 2 Logos */}
             <RevealOnScroll delay={100} className="flex items-center justify-center h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 group hover:scale-110 cursor-pointer">
                <div className="flex items-center gap-2">
                   <Ticket size={28} className="text-cyan-500" />
                   <span className="text-cyan-500 font-cursive text-2xl font-bold">Groupalia</span>
                </div>
            </RevealOnScroll>
             <RevealOnScroll delay={200} className="flex items-center justify-center h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 group hover:scale-110 cursor-pointer">
                <div className="flex items-center gap-2">
                    <Building2 size={28} className="text-blue-900" />
                    <div className="text-blue-900 font-bold text-lg leading-tight">ACCOR HOTELS<br/><span className="text-[9px] font-normal text-slate-500">Feel Welcome</span></div>
                </div>
            </RevealOnScroll>
             <RevealOnScroll delay={300} className="flex items-center justify-center h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 group hover:scale-110 cursor-pointer">
                <div className="flex items-center gap-2">
                    <ShieldCheck size={32} className="text-red-500" />
                    <div>
                        <div className="text-red-500 font-bold text-xl leading-none">L'olivier</div>
                        <div className="text-slate-800 font-bold text-[10px] uppercase">Assurance</div>
                    </div>
                </div>
            </RevealOnScroll>
             <RevealOnScroll delay={400} className="flex items-center justify-center h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 group hover:scale-110 cursor-pointer">
                <div className="flex items-center gap-2">
                   <ShoppingCart size={28} className="text-red-700" />
                   <span className="text-red-700 font-serif text-2xl font-bold tracking-widest">3SUISSES</span>
                </div>
            </RevealOnScroll>
        </div>
     </div>
  </section>
);

/* --- MAP SECTION --- */
export const MapSection = () => (
  <div className="relative h-[500px] w-full bg-slate-200 overflow-hidden">
     {/* Interactive Map via Iframe */}
     <div className="absolute inset-0">
        <iframe 
            width="100%" 
            height="100%" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=8%20boulevard%20Dubreuil%2091400%20Orsay&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0}
            style={{ filter: 'grayscale(100%) opacity(0.8)' }}
            title="HSVMedia Location"
        ></iframe>
     </div>
     
     {/* Ad6 Media Pin Overlay */}
     <div className="absolute top-1/2 left-1/2 md:left-[70%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <RevealOnScroll direction="up" className="relative">
            <div className="bg-[#2fa4e7] p-6 md:p-8 rounded-sm shadow-2xl text-center min-w-[200px] md:min-w-[250px] relative z-10 animate-bounce">
                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-0">TEAM HSV MEDIA
</h2>
                <div className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">media</div>
            </div>
            {/* Triangle Pointer */}
            <div className="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-[#2fa4e7] animate-bounce"></div>
             {/* Shadow */}
            <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full blur-sm animate-pulse"></div>
        </RevealOnScroll>
     </div>
  </div>
);