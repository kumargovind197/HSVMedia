import React from 'react';
import { Share2, Globe, Target } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const FeatureItem = ({ icon: Icon, title, desc, highlight }: any) => (
  <div className="flex flex-col items-center text-center px-4 group h-full">
    <div className="relative mb-8">
        <div className="w-40 h-40 rounded-full border-[7px] border-[#2fa4e7] flex items-center justify-center bg-white z-10 relative transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:border-[#258bd3]">
        <Icon size={80} strokeWidth={1.5} className="text-[#2fa4e7] transition-colors duration-500 group-hover:text-[#258bd3]" />
        </div>
        {/* Decorative ring animation */}
        <div className="absolute inset-0 rounded-full border border-[#2fa4e7] scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000 animate-ping-slow"></div>
    </div>
    
    <h3 className="text-2xl md:text-[26px] font-normal text-slate-700 mb-6 leading-tight group-hover:text-[#2fa4e7] transition-colors duration-300">
       {highlight} <span className="text-[#2fa4e7] font-bold group-hover:text-[#1a7bb5]">{title}</span>
    </h3>
    <p className="text-[#777] leading-relaxed max-w-sm text-[15px] group-hover:text-slate-900 transition-colors duration-300">
      {desc}
    </p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4">
        
        <RevealOnScroll className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-[42px] font-normal text-[#337ab7] mb-8 hover:tracking-wide transition-all duration-500 cursor-default">
            A quality and hardworker network
          </h2>
          <div className="w-32 h-px bg-slate-300 mx-auto mb-8"></div>
          <p className="text-[#777] text-lg leading-relaxed font-light">
            HSV media is the network expert in web development and monetization for different audiences. It combines the power of a premium publisher network, real-time optimization of impact formats, with point of view of value creation.
          </p>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <RevealOnScroll delay={100} direction="up" className="h-full">
            <FeatureItem 
              icon={Share2}
              highlight="+ of"
              title="700 live campaigns"
              desc="HSV continuously broadcasts hundreds of campaigns on behalf of advertisers in various sectors, with a branding and performance objective."
            />
          </RevealOnScroll>
          <RevealOnScroll delay={300} direction="up" className="h-full">
            <FeatureItem 
              icon={Globe}
              highlight="Present in + of"
              title="10 countries"
              desc="Present in France, Spain, Italy, Belgium, Portugal, UK, US & LATAM, HSV provides a dedicated team to support the campaigns by the market or target area."
            />
          </RevealOnScroll>
          <RevealOnScroll delay={500} direction="up" className="h-full">
            <FeatureItem 
              icon={Target}
              highlight="A network of + "
              title="1,000 publishers"
              desc="Through our network of premium publishers and affinities, we can ensure a qualitative audience and vertical targeting (news, btob, hi-tech, travel, women, sports, youth, community...)."
            />
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
};

export default Services;