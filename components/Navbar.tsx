import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from './assets/hsvlogo.png';
interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [scrolled, setScrolled] = useState(false);
  
  // State for specific dropdowns (desktop)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Close dropdowns on outside click
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsLoginOpen(false);
        setIsLangOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle clicking an item inside a dropdown
  const handleNavItemClick = (page: string, anchorId?: string) => {
    onNavigate(page);
    setIsOpen(false);
    setActiveDropdown(null);
    setIsLoginOpen(false);
    setIsLangOpen(false);
    
    // If there is an anchor, try to scroll to it after navigation
    if (anchorId) {
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0,0);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  // Toggle Logic
  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
      setIsLoginOpen(false); 
      setIsLangOpen(false);
    }
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setActiveDropdown(null);
    setIsLangOpen(false);
  };

  const toggleLang = () => {
    setIsLangOpen(!isLangOpen);
    setActiveDropdown(null);
    setIsLoginOpen(false);
  };

  const isInnerPage = currentPage !== 'home';
  const navClass = scrolled || isInnerPage || isOpen ? 'bg-[#2fa4e7] shadow-lg py-0' : 'bg-transparent py-4';

  return (
    <nav ref={navRef} className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          
  {/* Logo */}
<div
  onClick={() => handleNavItemClick("home")}
  className="flex-shrink-0 flex flex-col items-start cursor-pointer group select-none py-2"
>
  <img
    src={logo}
    alt="Company Logo"
    className="h-10 w-auto"
  />

  <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] -mt-1 group-hover:opacity-80 transition-opacity">
    media
  </span>
</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center h-full">
            
            {/* HOME */}
            <div className="relative h-full flex items-center px-4">
              <button
                onClick={() => toggleDropdown('home')}
                className={`text-[13px] font-bold uppercase tracking-wide transition-colors pb-1 border-b-2 ${
                  (currentPage === 'home' && !activeDropdown) || activeDropdown === 'home' ? 'border-white text-white' : 'border-transparent text-white/90 hover:text-white'
                }`}
              >
                HOME
              </button>
              {/* Home Dropdown */}
              {activeDropdown === 'home' && (
                <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 w-48 bg-white shadow-xl rounded-sm py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                  <div className="relative z-10 flex flex-col text-center">
                  
                    <button onClick={() => handleNavItemClick('home', 'about')} className="px-4 py-2 text-sm text-slate-600 hover:text-[#2fa4e7] font-medium border-b border-slate-100 mx-2">Who are we ?</button>
                   
                    <button onClick={() => handleNavItemClick('home', 'contact')} className="px-4 py-2 text-sm text-slate-600 hover:text-[#2fa4e7] font-medium mx-2">Contact us</button>
                  </div>
                </div>
              )}
            </div>

            {/* PUBLISHERS */}
            <div className="relative h-full flex items-center px-4">
               <button
                onClick={() => handleNavItemClick('publishers')}
                className={`text-[13px] font-bold uppercase tracking-wide transition-colors pb-1 border-b-2 ${
                  currentPage === 'publishers' ? 'border-white text-white' : 'border-transparent text-white/90 hover:text-white'
                }`}
              >
                PUBLISHERS
              </button>
            </div>

            {/* AGENCIES / ADVERTISERS */}
            <div className="relative h-full flex items-center px-4">
              <button
                onClick={() => toggleDropdown('advertisers')}
                className={`text-[13px] font-bold uppercase tracking-wide transition-colors pb-1 border-b-2 ${
                  (currentPage === 'advertisers' && !activeDropdown) || activeDropdown === 'advertisers' ? 'border-white text-white' : 'border-transparent text-white/90 hover:text-white'
                }`}
              >
                ADVERTISERS
              </button>
               {/* Advertisers Dropdown */}
               {activeDropdown === 'advertisers' && (
                <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 w-48 bg-white shadow-xl rounded-sm py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                  <div className="relative z-10 flex flex-col text-center">
                    <button onClick={() => handleNavItemClick('advertisers', 'solutions')} className="px-4 py-2 text-sm text-slate-600 hover:text-[#2fa4e7] font-medium border-b border-slate-100 mx-2">Our solutions</button>
                  
                  
                  </div>
                </div>
              )}
            </div>

            {/* Language Flag */}
             {/* <div className="relative h-full flex items-center px-2">
                <button 
                    onClick={toggleLang}
                    className="flex items-center gap-1 text-white hover:opacity-80"
                >
                    <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/gb.svg" className="w-5 h-4 object-cover shadow-sm" alt="English" />
                    <ChevronDown size={12} strokeWidth={3} />
                </button>
                 {isLangOpen && (
                    <div className="absolute top-[60px] right-0 w-32 bg-white shadow-xl rounded-sm py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="absolute -top-2 right-2 w-4 h-4 bg-white transform rotate-45"></div>
                      <div className="relative z-10 flex flex-col">
                        <div className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 cursor-pointer">
                            <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/fr.svg" className="w-4 h-3" alt="French" />
                            <span className="text-sm text-slate-600">France</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 cursor-pointer">
                            <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/es.svg" className="w-4 h-3" alt="Spanish" />
                            <span className="text-sm text-slate-600">Spain</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 cursor-pointer">
                            <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/it.svg" className="w-4 h-3" alt="Italian" />
                            <span className="text-sm text-slate-600">Italien</span>
                        </div>
                         <div className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 cursor-pointer">
                            <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/gb.svg" className="w-4 h-3" alt="UK" />
                            <span className="text-sm text-slate-600">UK</span>
                        </div>
                      </div>
                    </div>
                 )}
            </div> */}

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
             <div className="mr-4 flex items-center">
                 <button onClick={() => handleNavItemClick('login')} className="text-xs font-bold text-white border border-white/50 px-2 py-1 rounded mr-2">LOGIN</button>
             </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#2fa4e7] border-t border-white/20 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-1">
            <button onClick={() => handleNavItemClick('home')} className="text-left w-full text-sm font-bold text-white hover:bg-white/10 px-4 py-3 rounded uppercase border-b border-white/10">HOME</button>
            <div className="pl-6 space-y-1 pb-2">
               
                <button onClick={() => handleNavItemClick('home', 'about')} className="block text-xs text-white/80 py-1 text-left w-full">Who are we?</button>
                <button onClick={() => handleNavItemClick('home', 'contact')} className="block text-xs text-white/80 py-1 text-left w-full">Contact us</button>
            </div>

            <button onClick={() => handleNavItemClick('publishers')} className="text-left w-full text-sm font-bold text-white hover:bg-white/10 px-4 py-3 rounded uppercase border-b border-white/10">PUBLISHERS</button>
            
            <button onClick={() => handleNavItemClick('advertisers')} className="text-left w-full text-sm font-bold text-white hover:bg-white/10 px-4 py-3 rounded uppercase border-b border-white/10">ADVERTISERS</button>
             <div className="pl-6 space-y-1 pb-2">
                <button onClick={() => handleNavItemClick('advertisers', 'solutions')} className="block text-xs text-white/80 py-1 text-left w-full">Our solutions</button>
                
            </div>

            <button onClick={() => handleNavItemClick('company')} className="text-left w-full text-sm font-bold text-white hover:bg-white/10 px-4 py-3 rounded uppercase border-b border-white/10">THE COMPANY</button>
            
             <button onClick={() => handleNavItemClick('login')} className="text-left w-full text-sm font-bold text-white bg-white/10 px-4 py-3 rounded uppercase mt-4">LOG IN</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;