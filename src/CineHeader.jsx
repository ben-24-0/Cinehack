import React from "react";
import LightRays from "./LightRays";
import TextType from "./TextType";

const CineHackHeader = () => {
  const logos = [
    {
      href: "https://fisat.ac.in/",
      src: "./FISAT_LOGO.png",
      alt: "FISAT Logo",
      hasBackground: true
    },
    {
      href: "https://www.instagram.com/paulyjrpictures/",
      src: "./paulyjr.png",
      alt: "Pauly Jr Logo",
      hasBackground: false
    },
    {
      href: "https://linktr.ee/fisatiedc",
      src: "./iedc.png",
      alt: "IEDC Logo",
      hasBackground: false
    },
    {
      href: "https://fisat.ac.in/alumni/",
      src: "./fistaa_bg.png",
      alt: "FISTAA Logo",
      hasBackground: true
    },
    {
      href: "https://iic.mic.gov.in/",
      src: "./IIC-logo.webp",
      alt: "IIC Logo",
      hasBackground: false
    }
  ];

  const LogoItem = ({ logo, index }) => (
    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center group overflow-hidden flex-shrink-0">
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center ${
          logo.hasBackground 
            ? "w-16 h-16 rounded-full bg-white" 
            : "w-full h-full"
        }`}
      >
        <img 
          className={`object-contain group-hover:scale-110 transition-transform duration-300 ${
            logo.hasBackground 
              ? "w-12 h-12" 
              : "w-16 h-16 object-cover rounded-full"
          }`} 
          src={logo.src} 
          alt={logo.alt} 
        />
      </a>
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-104px * 5));
          }
        }
        
        .scroll-container {
          display: flex;
          animation: infiniteScroll 20s linear infinite;
          gap: 24px;
          padding-right: 24px;
        }
        
        .scroll-container:hover {
          animation-play-state: paused;
        }
        
        .scroll-wrapper {
          overflow: hidden;
          width: 100vw;
          margin-left: -1.5rem;
          margin-right: -1.5rem;
        }
      `}</style>
      
      <div
        id="home"
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative"
      >
        <LightRays />
        <div className="container mx-auto px-6 py-20">
          {/* Main content */}
          <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
            <div className="flex-1 md:pr-8">
              {/* Main logo (SVG) */}
              <img
                src="/logogg.svg"
                alt="CineHack.ai Logo"
                className="w-full max-w-2xl md:max-w-xl mb-4 -ml-3"
              />

              {/* Animated tagline */}
              <p className="text-xl md:text-4xl text-gray-300 font-light mb-10 tracking-wide" style={{ fontFamily: "Skylens" }}>
                <TextType
                  text={["Lights. Camera. Algorithm."]}
                  typingSpeed={70}
                  deletingSpeed={40}
                  pauseDuration={2000}
                  loop={false}
                  showCursor={true}
                  hideCursorAfterFinish={true}
                  className="inline-block"
                />
              </p>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                Step into the future of cinema at CineHack.ai, a 48-hour national film-tech hackathon where creativity meets code. From AI-powered editing tools to smart storytelling platforms, build projects that could reshape the way stories are told. Compete with the best minds, win from a ₹2 Lakh + prize pool, and showcase your innovation to industry leaders and filmmakers.
              </p>

              {/* Event details */}
              <div className="flex flex-col sm:flex-row items-start gap-8 mb-12">
                {/* Date */}
                <div>
                  <div className="text-4xl font-light text-white mb-2">
                    4-6
                  </div>
                  <div className="text-purple-500 text-sm font-medium tracking-wider">
                    OCT 2025
                  </div>
                </div>

                {/* Location */}
                <div>
                  <div className="text-lg text-gray-300 mb-2">
                    Federal Institute of Science And Technology
                  </div>
                  <div className="text-purple-400 text-sm font-medium tracking-wider">
                    Mookanoor, Angamaly, Ernakulam, India
                  </div>
                </div>

                {/* Register button with glowing border */}
                <a
                  href="https://makemypass.com/event/cinehack-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block"
                >
                  <div className="relative p-0.5 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse hover:animate-none">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <button className="
                      relative overflow-hidden rounded-lg
                      bg-gradient-to-r from-[#0a1535] via-[#1e3a8a] to-[#0a1535]
                      text-white px-6 py-2.5 text-sm font-medium
                      shadow-lg
                      hover:shadow-xl hover:shadow-red-500/20
                      active:scale-95
                      transition-all duration-300 ease-out
                      transform hover:-translate-y-0.5
                      group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:via-red-500 group-hover:to-red-600
                      before:absolute before:inset-0
                      before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                      before:translate-x-[-100%] before:transition-transform before:duration-700
                      hover:before:translate-x-[100%]
                      backdrop-blur-sm
                      whitespace-nowrap
                      w-full h-full
                    ">
                      <span className="relative z-10 tracking-wider">
                        REGISTER NOW
                      </span>
                    </button>
                  </div>
                </a>
              </div>
            </div>

            {/* Floating sidebar logos - Desktop only */}
            <div className="hidden md:flex flex-col space-y-6 ml-0 md:ml-12">
              {logos.map((logo, index) => (
                <LogoItem key={index} logo={logo} index={index} />
              ))}
            </div>

            {/* Mobile scrolling logos */}
            <div className="block md:hidden scroll-wrapper">
              <div className="scroll-container">
                {/* Render logos multiple times for seamless loop */}
                {[...Array(8)].map((_, setIndex) => 
                  logos.map((logo, logoIndex) => (
                    <div key={`${setIndex}-${logoIndex}`} className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center group overflow-hidden flex-shrink-0">
                      <a
                        href={logo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center ${
                          logo.hasBackground 
                            ? "w-16 h-16 rounded-full bg-white" 
                            : "w-full h-full"
                        }`}
                      >
                        <img 
                          className={`object-contain group-hover:scale-110 transition-transform duration-300 ${
                            logo.hasBackground 
                              ? "w-12 h-12" 
                              : "w-16 h-16 object-cover rounded-full"
                          }`} 
                          src={logo.src} 
                          alt={logo.alt} 
                        />
                      </a>
                    </div>
                  ))
                ).flat()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CineHackHeader;