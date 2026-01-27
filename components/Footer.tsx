import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2fa4e7] text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 md:mt-12">
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-4 sm:pt-6 text-center text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} HSVMedia. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
