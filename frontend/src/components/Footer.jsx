import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-2xl mb-2">SHUBH</h3>
            <p className="text-white/60 text-sm">Performance Marketer & Growth Strategist</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/shubh4__/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 border border-white/20 p-3 rounded-full hover:bg-white hover:border-white transition-all duration-300"
            >
              <Instagram size={20} className="text-white group-hover:text-black transition-colors duration-300" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white/60 text-sm text-center md:text-right">
            <p>&copy; {currentYear} Shubh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
