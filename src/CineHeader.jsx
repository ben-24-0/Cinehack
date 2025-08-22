import React from "react";
import LightRays from "./LightRays";
import TextType from "./TextType";

const CineHackHeader = () => {
  return (
    <>
      <div
        id="home"
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative"
      >
        <LightRays />
        <div className="container mx-auto px-6 py-20">
          

          {/* Main content */}
          <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
            <div className="flex-1 md:pr-8">
              {/* Main title (with colors preserved) */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-4 tracking-tight">
                <span className="text-purple-500">Cine</span>
                <span className="text-purple-100">Hack</span>
                <span className="text-purple-400">.</span>
                <span className="text-red-400">a</span>
                <span className="text-blue-400">i</span>
              </h1>

              {/* Animated tagline */}
              <p className="text-xl md:text-4xl text-gray-300 font-light mb-10 tracking-wide" style={{ fontFamily: "Skylens" }}>
                <TextType
                  text={["Lights. Camera. Algorithm."]}
                  typingSpeed={70}
                  deletingSpeed={40}
                  pauseDuration={2000}
                  loop={false}
                  showCursor={true}
                  hideCursorAfterFinish={true}   // 👈 will vanish cursor after typing

                  className="inline-block"
                />
              </p>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-12 leading-relaxed">
               Step into the future of cinema at CineHack.ai, a 48-hour national film-tech hackathon where creativity meets code. From AI-powered editing tools to smart storytelling platforms, build projects that could reshape the way stories are told. Compete with the best minds, win from a ₹2.25 Lakh prize pool, and showcase your innovation to industry leaders and filmmakers.
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

                {/* Register button */}
                <button className="bg-[#0a1535] text-white px-8 py-3 text-base font-medium hover:bg-[#0c1c4d] transition-colors">                 
                 REGISTER NOW
                </button>
              </div>

              {/* Organizer info
              <div className="border-t border-gray-800 pt-6">
                <p className="text-gray-500 text-sm mb-2">
                  Organized by IEDC FISAT
                </p>
              </div> */}
            </div>

            {/* Image on the right
            <div className="flex-1 max-w-2xl">
              <img
                src="./idea.png"
                alt="Landing Page Visual"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div> */}
            {/* Top logos section */}
          {/* Floating sidebar logos */}
                <div className="flex flex-col space-y-6 ml-12">
  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center group overflow-hidden">
    <a
      href="https://fisat.ac.in/" 
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full flex items-center justify-center"
    >
      <img className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" src="./fisat.png" alt="FISAT Logo" />
    </a>
  </div>
  
  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center group overflow-hidden">
    <a
      href="https://www.instagram.com/paulyjrpictures/" 
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full flex items-center justify-center"
    >
      <img className="w-16 h-16 object-cover rounded-full group-hover:scale-110 transition-transform duration-300" src="./paulyjr.png" alt="Pauly Jr Logo" />
    </a>
  </div>
  
  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center group overflow-hidden">
    <a
      href="https://linktr.ee/fisatiedc"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full flex items-center justify-center"
    >
      <img className="w-16 h-16 object-cover rounded-full group-hover:scale-110 transition-transform duration-300" src="./iedc.png" alt="IEDC Logo" />
    </a>
  </div>
  
  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center group overflow-hidden">
    <a
      href="https://iic.mic.gov.in/" 
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full flex items-center justify-center"
    >
      <img className="w-16 h-16 object-cover rounded-full group-hover:scale-110 transition-transform duration-300" src="./IIC-logo.webp" alt="IIC Logo" />
    </a>
  </div>
  
  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center group overflow-hidden">
    <a
      href="https://fisat.ac.in/alumni/" 
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full flex items-center justify-center"
    >
      <img className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" src="./fistaawhite.jpeg" alt="FISTAA Logo" />
    </a>
  </div>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CineHackHeader;
