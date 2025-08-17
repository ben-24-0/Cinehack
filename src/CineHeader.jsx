import React from "react";
const CineHackHeader = () => {
  return (
    <>
      <div
        id="home"
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative"
      >
        <div className="container mx-auto px-6 py-20">
          {/* Top logos section */}
          <div className="flex items-center justify-self-end mb-10 content-between space-x-12">
            <div className="text-gray-400 text-sm font-medium">
                <img className="w-12 h-12" src="./paulyjr.png" alt="" />
            </div>
            <div className="text-gray-400 text-sm font-medium">
              <img className="w-16 h-16 left-0" src="./iedc.png" alt="" />
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
            <div className="flex-1 md:pr-8">
              {/* Main title */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight">
                <span className="text-purple-500">Cine</span>
                <span className="text-purple-100">Hack</span>
                <span className="text-purple-400">.</span>
                <span className="text-red-400">a</span>
                <span className="text-blue-400">i</span>
         
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 tracking-wide">
                India's Premier AI Cinema Hackathon
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
                <button className="bg-purple-600 text-white px-8 py-3 text-base font-medium hover:bg-purple-700 transition-colors">
                  REGISTER NOW
                </button>
              </div>

              {/* Organizer info */}
              <div className="border-t border-gray-800 pt-6">
                <p className="text-gray-500 text-sm mb-2">
                  Organized by IEDC FISAT
                </p>
                <p className="text-gray-600 text-xs"></p>
              </div>
            </div>

            {/* Image on the right */}
            <div className="flex-1 max-w-2xl">
              <img
                src="./idea.png"
                alt="Landing Page Visual"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CineHackHeader;
