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
                Build revolutionary AI-powered cinema experiences in 24 hours.
                From intelligent video editing tools to AI-driven storytelling
                platforms.
              </p>

              {/* Event details */}
              <div className="flex flex-col sm:flex-row items-start gap-8 mb-12">
                {/* Date */}
                <div>
                  <div className="text-4xl font-light text-white mb-2">
                    20-22
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
                    ANGAMALY
                  </div>
                </div>

                {/* Register button */}
                <button className="bg-[#0a1535] text-white px-8 py-3 text-base font-medium hover:bg-[#0c1c4d] transition-colors">                 
                 REGISTER NOW
                </button>
              </div>

              {/* Organizer info */}
              <div className="border-t border-gray-800 pt-6">
                <p className="text-gray-500 text-sm mb-2">
                  Organized by IEDC FISAT
                </p>
              </div>
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
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center group">
                    <img className="w-18 h-18 group-hover:scale-110 transition-transform duration-300" src="./paulyjr.png" alt="Pauly Jr Logo" />
                  </div>
                    <div className="w-20 h-20 bg-white backdrop-blur-md rounded-full border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center group">
                    <img className="w-18 h-18 group-hover:scale-110 transition-transform duration-300" src="./iedc_logo.png" alt="IEDC Logo" />
                  </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CineHackHeader;
