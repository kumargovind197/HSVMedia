import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './assets/hsvlogo.png';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavItemClick = (page: string, anchorId?: string) => {
    onNavigate(page);
    setIsOpen(false);
    setActiveDropdown(null);

    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navClass =
    scrolled || isOpen ? 'bg-[#2fa4e7] shadow-lg py-0' : 'bg-transparent py-4';

  return (
    <nav ref={navRef} className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div onClick={() => handleNavItemClick('home')} className="cursor-pointer">
            <img src={logo} alt="Logo" className="h-12" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">

            {/* HOME */}
            <button
              onClick={() => handleNavItemClick('home')}
              className={`px-4 text-[13px] font-bold uppercase border-b-2 ${
                currentPage === 'home'
                  ? 'border-white text-white'
                  : 'border-transparent text-white/90 hover:text-white'
              }`}
            >
              HOME
            </button>

            {/* ADVERTISERS */}
            <div className="relative px-4">
              <button
                onClick={() => toggleDropdown('advertisers')}
                className={`text-[13px] font-bold uppercase border-b-2 ${
                  activeDropdown === 'advertisers'
                    ? 'border-white text-white'
                    : 'border-transparent text-white/90 hover:text-white'
                }`}
              >
                ADVERTISERS
              </button>

              {activeDropdown === 'advertisers' && (
                <div className="absolute top-[55px] left-1/2 -translate-x-1/2 w-56 bg-white shadow-xl py-2">
                  <button
                    onClick={() => handleNavItemClick('advertisers', 'solutions')}
                    className="block w-full px-4 py-2 text-sm text-slate-600 hover:text-[#2fa4e7]"
                  >
                    Our advertising solutions
                  </button>

                   <button
                    onClick={() => handleNavItemClick('publishers', 'register')}
                    className="block w-full px-4 py-2 text-sm text-slate-600 hover:text-[#2fa4e7]"
                  >
                    Adertise with us
                  </button>
                </div>
              )}
            </div>

            {/* PUBLISHERS (WITH DROPDOWN) */}
            <div className="relative px-4">
              <button
                onClick={() => toggleDropdown('publishers')}
                className={`text-[13px] font-bold uppercase border-b-2 ${
                  activeDropdown === 'publishers'
                    ? 'border-white text-white'
                    : 'border-transparent text-white/90 hover:text-white'
                }`}
              >
                PUBLISHERS
              </button>

              {activeDropdown === 'publishers' && (
                <div className="absolute top-[55px] left-1/2 -translate-x-1/2 w-56 bg-white shadow-xl py-2">
                  <button
                    onClick={() => handleNavItemClick('publishers', 'register')}
                    className="block w-full px-4 py-2 text-sm text-slate-600 hover:text-[#2fa4e7]"
                  >
                    Register as a Publisher
                  </button>
                </div>
              )}
            </div>

            {/* CONTACT */}
            <button
              onClick={() => handleNavItemClick('home', 'contact')}
              className="px-4 text-[13px] font-bold uppercase border-b-2 border-transparent text-white/90 hover:text-white"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
{/* Mobile Menu */}
{isOpen && (
  <div className="lg:hidden absolute top-full left-0 w-full bg-[#2fa4e7] border-t border-white/20 shadow-xl">
    <div className="flex flex-col p-4 space-y-1">

      {/* HOME */}
      <button
        onClick={() => handleNavItemClick('home')}
        className="w-full text-left text-sm font-bold text-white px-4 py-3 uppercase border-b border-white/10 hover:bg-white/10 rounded"
      >
        HOME
      </button>

      {/* ADVERTISERS */}
      <button
        onClick={() => handleNavItemClick('advertisers')}
        className="w-full text-left text-sm font-bold text-white px-4 py-3 uppercase border-b border-white/10 hover:bg-white/10 rounded"
      >
        ADVERTISERS
      </button>

      <div className="pl-6 pb-2">
        <button
          onClick={() => handleNavItemClick('advertisers', 'solutions')}
          className="block w-full text-left text-xs text-white/80 py-2 hover:text-white"
        >
          Our advertising solutions
        </button>
         <button
          onClick={() => handleNavItemClick('publishers', 'register')}
          className="block w-full text-left text-xs text-white/80 py-2 hover:text-white"
        >
         Adertise with us
        </button>
      </div>

      {/* PUBLISHERS */}
      <button
        onClick={() => handleNavItemClick('publishers')}
        className="w-full text-left text-sm font-bold text-white px-4 py-3 uppercase border-b border-white/10 hover:bg-white/10 rounded"
      >
        PUBLISHERS
      </button>

      <div className="pl-6 pb-2">
        <button
          onClick={() => handleNavItemClick('publishers', 'register')}
          className="block w-full text-left text-xs text-white/80 py-2 hover:text-white"
        >
          Register as a Publisher
        </button>
      </div>

      {/* CONTACT */}
      <button
        onClick={() => handleNavItemClick('home', 'contact')}
        className="w-full text-left text-sm font-bold text-white px-4 py-3 uppercase hover:bg-white/10 rounded"
      >
        Contact Us
      </button>

    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
