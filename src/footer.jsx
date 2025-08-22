import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-300 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          
          {/* Brand */}
          <div className="text-white font-bold text-xl">
<img
  src="/logogg.svg"
  alt="CineHack.ai Logo"
  className="w-48 md:w-56 mb-2 -ml-3"
/>

          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 justify-center">
            <a 
              href="#home" 
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              About
            </a>
            <a 
              href="#prizes" 
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Prizes
            </a>
            <a 
              href="#timeline" 
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Timeline
            </a>
            <a 
              href="#contact" 
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-white/60 text-sm">
            © {year} CINEHACK.AI. All rights reserved.
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-4">
          <div className="text-center text-white/50 text-xs">
            Organized by IEDC FISAT | Innovation Entrepreneurship Development Centre
          </div>
        </div>
      </div>
    </footer>
  );
}