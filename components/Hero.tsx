import React from 'react';

const Hero: React.FC = () => {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="ad6-hero h-screen min-h-[600px] w-full flex flex-col justify-center items-center relative">
      <div className="text-center z-10 select-none flex flex-col items-center justify-center h-full pb-20">
        {/* Big Logo Representation */}
        <h1 className="text-[100px] sm:text-[100px] md:text-[180px] font-black text-white leading-[0.8] tracking-tighter">
          TEAM HSV 
        </h1>
        <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-wide mt-2 md:mt-0">
          media
        </div>
      </div>

      {/* Switcher Button (Scroll Down) */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
          <a 
            href="#services" 
            onClick={handleScrollDown} 
            className="flex flex-col items-center cursor-pointer animate-bounce p-4 hover:opacity-80 transition-opacity"
            aria-label="Scroll to content"
          >
             {/* 3 Stacked Chevrons matching the visual design */}
             <div className="w-6 h-6 border-b-[5px] border-r-[5px] border-white/40 transform rotate-45 translate-y-3 rounded-[2px]"></div>
             <div className="w-6 h-6 border-b-[5px] border-r-[5px] border-white/70 transform rotate-45 rounded-[2px]"></div>
             <div className="w-6 h-6 border-b-[5px] border-r-[5px] border-white transform rotate-45 -translate-y-3 rounded-[2px]"></div>
          </a>
      </div>
    </div>
  );
};

export default Hero;