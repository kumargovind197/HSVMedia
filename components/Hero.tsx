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
    <section className=" bg-[#2fa4e7] ad6-hero h-screen min-h-[600px] w-full flex flex-col justify-center items-center relative">
      <div className="text-center z-10 flex flex-col items-center justify-center max-w-4xl px-6 pb-24">

        {/* Main Headline */}
        <h1 className="  text-[42px] sm:text-[48px] md:text-[60px] font-extrabold text-white leading-tight tracking-tight">
          Your Performance-Driven Advertising Partner
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl">
          Team HSV Media helps brands grow faster through smart, data-driven advertising.
          We capture attention, drive qualified traffic, and turn clicks into customers
          using high-impact banner ads, high-intent text ads, and strategically placed pop-up campaigns.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
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
