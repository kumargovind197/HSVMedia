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
    <section className="ad6-hero h-screen min-h-[600px] w-full flex flex-col justify-center items-center relative">
      <div className="text-center z-10 flex flex-col items-center justify-center max-w-4xl px-6 pb-24">
        
        {/* Main Headline */}
        <h1 className="text-[42px] sm:text-[20px] md:text-[15px] font-extrabold text-white leading-tight tracking-tight">
          {/* Team HSV Media is your advertising partner that helps you grow your business faster. Save time and Build brand recognition while driving clicks. We help you to engage your customer and reach your target audience by delivering performance based advertising solutions. */}
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl">
          We help brands capture attention, drive qualified traffic, and convert clicks into customers through smart, data-driven targeted campaigns.

Our mission is simple: deliver measurable results, whether its using high-impact banner ads, high-intent text ads, or strategically placed pop-up campaigns. You can trust us to deliver and exceed our clients expectations
        </p>

      
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#services"
          onClick={handleScrollDown}
          className="flex flex-col items-center cursor-pointer animate-bounce p-4 hover:opacity-80 transition-opacity"
          aria-label="Scroll to content"
        >
          <div className="w-6 h-6 border-b-[5px] border-r-[5px] border-white/40 rotate-45 translate-y-3 rounded-sm"></div>
          <div className="w-6 h-6 border-b-[5px] border-r-[5px] border-white/70 rotate-45 rounded-sm"></div>
          <div className="w-6 h-6 border-b-[5px] border-r-[5px] border-white rotate-45 -translate-y-3 rounded-sm"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
