import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './assets/hsvlogo.png';
import emailjs from 'emailjs-com';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

const [showAdvertiserModal, setShowAdvertiserModal] = useState(false);
const [showPublisherModal, setShowPublisherModal] = useState(false);

const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

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
useEffect(() => {
  emailjs.init('YLAe7yU-qvpCmsQoF');
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




const [advertiserData, setAdvertiserData] = useState({
  name: '',
  company: '',
  position: '',
  phone: '',
  email: '',
  message: '',
});

const [publisherData, setPublisherData] = useState({
  name: '',
  phone: '',
  website: '',
  impressions: '',
  email: '',
  position: '',
  message: '',
});

const handleAdvertiserSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  sendEmail(advertiserData, 'Advertiser', () => setShowAdvertiserModal(false));
};

const handlePublisherSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  sendEmail(publisherData, 'Publisher', () => setShowPublisherModal(false));
};

const sendEmail = (data: any, formType: 'Advertiser' | 'Publisher', onComplete: () => void) => {
  setStatus('submitting');

  // Format all data into a comprehensive message
  let formattedMessage = `
Form Type: ${formType}
-----------------------------------

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
`;

  if (formType === 'Advertiser') {
    formattedMessage += `Company: ${data.company || 'N/A'}
Position: ${data.position || 'N/A'}`;
  } else if (formType === 'Publisher') {
    formattedMessage += `Website: ${data.website || 'N/A'}
Impressions: ${data.impressions || 'N/A'}
Position: ${data.position || 'N/A'}`;
  }

  formattedMessage += `

---------
Message:
${data.message || 'N/A'}
`;

  emailjs
    .send(
      'service_oquikwb',
      'template_4r3x3kd',
      {
        surname: data.name,
        email: data.email,
        object: `New ${formType} Inquiry`,
        message: formattedMessage,
      },
      'YLAe7yU-qvpCmsQoF'
    )
    .then(() => {
      setStatus('success');
      alert('Email sent successfully Thank you for reaching out!');
      // Reset forms
      if (formType === 'Advertiser') {
        setAdvertiserData({
          name: '',
          company: '',
          position: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        setPublisherData({
          name: '',
          phone: '',
          website: '',
          impressions: '',
          email: '',
          position: '',
          message: '',
        });
      }
      setTimeout(() => {
        setStatus('idle');
        onComplete();
      }, 1500);
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      alert('Email failed  Please try again');
      setStatus('idle');
    });
};


    
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
                    onClick={() => setShowAdvertiserModal(true)}
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
                    onClick={() => setShowPublisherModal(true)}
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
          onClick={() => setShowAdvertiserModal(true)}
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
          onClick={() => setShowPublisherModal(true)}
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

{/* Advertiser Registration Modal */}
{showAdvertiserModal && (
  <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="bg-[#2fa4e7] px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Advertise with Us</h2>
        <button
          onClick={() => setShowAdvertiserModal(false)}
          className="text-white text-2xl hover:opacity-70"
        >
          ×
        </button>
      </div>

      {/* Form Content */}
      <form  onSubmit={handleAdvertiserSubmit}
       className="p-6 space-y-4">
        <div>
         
          <input
            type="text"
            placeholder="Name"
              value={advertiserData.name}
  onChange={(e) =>
    setAdvertiserData({ ...advertiserData, name: e.target.value })
  }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2fa4e7]"
            required
          />
        </div>
<div>
         
          <input
            type="text"
            placeholder="Company Name"
              value={advertiserData.company}
  onChange={(e) =>
    setAdvertiserData({ ...advertiserData, company: e.target.value })
  }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2fa4e7]"
            required
          />
        </div>
<div>
         
          <input
            type="text"
            placeholder="Position"
              value={advertiserData.position}
  onChange={(e) =>
    setAdvertiserData({ ...advertiserData, position: e.target.value })
  }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2fa4e7]"
            required
          />
        </div>

       

     <div>
         
          <input
            type="number"
            placeholder="Contact Number"
              value={advertiserData.phone}
  onChange={(e) =>
    setAdvertiserData({ ...advertiserData, phone: e.target.value })
  }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2fa4e7]"
            required
          />
        </div>

 <div>
         
          <input
            type="email"
            placeholder="Email Address"
              value={advertiserData.email}
  onChange={(e) =>
    setAdvertiserData({ ...advertiserData, email: e.target.value })
  }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2fa4e7]"
            required
          />
        </div>
        <div>
          
          <textarea
                    rows={4}
                    placeholder="Message"
                      value={advertiserData.message}
  onChange={(e) =>
    setAdvertiserData({ ...advertiserData, message: e.target.value })
  }
                    className="w-full border border-gray-300 px-4 py-3 rounded-md resize-none focus:outline-none focus:border-[#2fa4e7]"
                  />

        </div>

    
      

        <div className="pt-4">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-[#2fa4e7] text-white font-bold py-2 rounded-lg hover:bg-[#2691cc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
          </button>
        </div>
      </form>
    </div>
  </div>
)}

{/* Publisher Registration Modal */}
{showPublisherModal && (
  <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="bg-[#2fa4e7] px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Register as Publisher</h2>
        <button
          onClick={() => setShowPublisherModal(false)}
          className="text-white text-2xl hover:opacity-70"
        >
          ×
        </button>
      </div>

      {/* Form Content */}
      <form onSubmit={handlePublisherSubmit}
      className="p-6 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
              value={publisherData.name}
  onChange={(e) =>
    setPublisherData({ ...publisherData, name: e.target.value })
  }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2fa4e7]"
            required
          />
        </div>
  <div>
          <input
            type="number"
            placeholder="Contact Number"
              value={publisherData.phone}
  onChange={(e) =>
    setPublisherData({ ...publisherData, phone: e.target.value })
  }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2fa4e7]"
            required
          />
        </div>
        <div>
          <input
            type="url"
            placeholder="Website URL"
              value={publisherData.website}
  onChange={(e) =>
    setPublisherData({ ...publisherData, website: e.target.value })
  }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2fa4e7]"
            required
          />
        </div>
 <div>
          <input
            type="number"
            placeholder="No of impressions"
              value={publisherData.impressions}
  onChange={(e) =>
    setPublisherData({ ...publisherData, impressions: e.target.value })
  }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2fa4e7]"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
              value={publisherData.email}
  onChange={(e) =>
    setPublisherData({ ...publisherData, email: e.target.value })
  }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2fa4e7]"
            required
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Position"
              value={publisherData.position}
  onChange={(e) =>
    setPublisherData({ ...publisherData, position: e.target.value })
  }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2fa4e7]"
            required
          />
        </div>
       
<textarea
                    rows={4}
                    placeholder="Message"
                      value={publisherData.message}
  onChange={(e) =>
    setPublisherData({ ...publisherData, message: e.target.value })
  }
                    className="w-full border border-gray-300 px-4 py-3 rounded-md resize-none focus:outline-none focus:border-[#2fa4e7]"
                  />

        <div className="pt-4">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-[#2fa4e7] text-white font-bold py-2 rounded-lg hover:bg-[#2691cc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
