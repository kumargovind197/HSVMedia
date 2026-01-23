import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c3e50] text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-start gap-1 mb-6">
               <span className="font-black text-2xl text-white tracking-tighter">HSV</span>
               <span className="text-white text-[10px] uppercase tracking-widest">media</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Expert in web development and monetization.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Publishers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advertisers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm">Contact</h4>
            <p className="text-sm mb-4">London, United Kingdom</p>
            <p className="text-sm">support@ad6media.co.uk</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} HSVMedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;