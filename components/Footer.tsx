import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2fa4e7] text-white py-5 px-4 mt-10">
     
        <div className="border-t border-white/10 pt-6 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} HSVMedia. All rights reserved.</p>
        </div>
     
    </footer>
  );
};

export default Footer;
