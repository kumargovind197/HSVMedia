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
    <section className="bg-[#2fa4e7] ad6-hero min-h-screen w-full flex flex-col justify-center items-center relative py-12 sm:py-16 md:py-20">
      <div className="text-center z-10 flex flex-col items-center justify-center max-w-4xl px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24">

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight tracking-tight">
          Your Performance-Driven Advertising Partner
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-6 text-s sm:text-sm md:text-base lg:text-lg text-white/80 max-w-3xl leading-relaxed">
          Team HSV Media helps brands grow faster through smart, data-driven advertising.
          We capture attention, drive qualified traffic, and turn clicks into customers
          using high-impact banner ads, high-intent text ads, and strategically placed pop-up campaigns.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="mt-6 sm:mt-8 md:mt-10 inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black hover:bg-white/90 transition whitespace-nowrap"
        >
          Start Advertising With Us
        </a>
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
