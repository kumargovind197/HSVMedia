import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './assets/hsvlogo.png';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [scrolled, setScrolled] = useState(false);

  // Desktop dropdowns
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
        else window.scrollTo(0, 0);
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isInnerPage = currentPage !== 'home';
  const navClass =
    scrolled || isInnerPage || isOpen ? 'bg-[#2fa4e7] shadow-lg py-0' : 'bg-transparent py-4';

  return (
    <nav ref={navRef} className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div
            onClick={() => handleNavItemClick('home')}
            className="flex-shrink-0 flex items-center cursor-pointer select-none py-2"
          >
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center h-full">
            {/* HOME */}
            <div className="relative h-full flex items-center px-4">
              <button
                onClick={() => handleNavItemClick('home')}
                className={`text-[13px] font-bold uppercase tracking-wide transition-colors pb-1 border-b-2 
                    ? 'border-white text-white'
                    : 'border-transparent text-white/90 hover:text-white'
                }`}
              >
                HOME
              </button>
              
            </div>

          

        

            {/* ADVERTISERS */}
            <div className="relative h-full flex items-center px-4">
              <button
                onClick={() => toggleDropdown('advertisers')}
                className={`text-[13px] font-bold uppercase tracking-wide transition-colors pb-1 border-b-2 ${
                  (currentPage === 'advertisers' && !activeDropdown) ||
                  activeDropdown === 'advertisers'
                    ? 'border-white text-white'
                    : 'border-transparent text-white/90 hover:text-white'
                }`}
              >
                ADVERTISERS
              </button>
              {activeDropdown === 'advertisers' && (
                <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 w-48 bg-white shadow-xl rounded-sm py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                  <button
                    onClick={() => handleNavItemClick('advertisers', 'solutions')}
                    className="px-4 py-2 text-sm text-slate-600 hover:text-[#2fa4e7] font-medium border-b border-slate-100 mx-2"
                  >
                    Our advertising solutions
                  </button>
                </div>
              )}
            </div>

              {/* PUBLISHERS */}
            <div className="relative h-full flex items-center px-4">
              <button
                onClick={() => handleNavItemClick('publishers')}
                className={`text-[13px] font-bold uppercase tracking-wide transition-colors pb-1 border-b-2 ${
                  currentPage === 'publishers'
                    ? 'border-white text-white'
                    : 'border-transparent text-white/90 hover:text-white'
                }`}
              >
                PUBLISHERS
              </button>
            </div>
            

                <div className="relative h-full flex items-center px-4">
              <button
                onClick={() => handleNavItemClick('home', 'contact')}
                className={`text-[13px] font-bold uppercase tracking-wide transition-colors pb-1 border-b-2 ${
                  currentPage === 'contact'
                    ? 'border-white text-white'
                    : 'border-transparent text-white/90 hover:text-white'
                }`}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#2fa4e7] border-t border-white/20 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-1">
            {/* HOME */}
            <button
              onClick={() => handleNavItemClick('home')}
              className="text-left w-full text-sm font-bold text-white hover:bg-white/10 px-4 py-3 rounded uppercase border-b border-white/10"
            >
              HOME
            </button>
         
          
            {/* ADVERTISERS */}
            <button
              onClick={() => handleNavItemClick('advertisers')}
              className="text-left w-full text-sm font-bold text-white hover:bg-white/10 px-4 py-3 rounded uppercase border-b border-white/10"
            >
              ADVERTISERS
            </button>
            <div className="pl-6 space-y-1 pb-2">
              <button
                onClick={() => handleNavItemClick('advertisers', 'solutions')}
                className="block text-xs text-white/80 py-1 text-left w-full"
              >
                Our advertising solutions
              </button>
            </div>
          </div>
  <button
              onClick={() => handleNavItemClick('publishers')}
              className="text-left w-full text-sm font-bold text-white hover:bg-white/10 px-4 py-3 rounded uppercase border-b border-white/10"
            >
              PUBLISHERS
            </button>  


           <button
              onClick={() => handleNavItemClick('home', 'contact')}
              className="text-left w-full text-sm font-bold text-white hover:bg-white/10 px-4 py-3 rounded uppercase border-b border-white/10"
            >
              Contact Us
            </button>

            
        </div>
      )}
    </nav>
  );
};

export default Navbar;
