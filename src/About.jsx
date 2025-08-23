import React from "react";

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-black font-sans select-none">
      {/* Container for the purple section with wave SVGs. */}
      <div className="bg-purple-400">
        {/* Top SVG wave to create a curved top edge. */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#000000ff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> */}

        {/* Main content container. */}
        <div className="curved px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8">
          {/* This div contains the heading and the cards. */}
          <div className="flex-1 max-w-4xl text-content text-center lg:text-left">
            <h1 className="font-bold mb-6 md:mb-8 text-white leading-tight break-words px-1" style={{ 
              fontSize: 'clamp(24px, 4vw, 48px)'
            }}>
              WELCOME TO CINEHACK.AI
            </h1>
            {/* New container for the cards with improved styling */}
            <div className="flex flex-col gap-4 md:gap-6 p-2 md:p-4">
              {/* Card 1: Hackathon Details with glowing border */}
              <div className="relative p-0.5 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse hover:animate-none group transform -rotate-1 sm:-rotate-2"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div
                  className="about-card p-4 md:p-6 rounded-lg shadow-xl text-center flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 relative"
                  style={{
                    background: 'linear-gradient(45deg, #0a1535, #2e4890ff)',
                    color: 'white'
                  }}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl">🧠</span>
                  <div className="text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Hackathon</h2>
                    <p className="text-sm sm:text-base">
                      A 48 hour hackathon focused on AI in the film industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Prize Pool with glowing border */}
              <div className="relative p-0.5 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse hover:animate-none group transform rotate-1 sm:rotate-2"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div
                  className="about-card p-4 md:p-6 rounded-lg shadow-xl text-center flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 relative"
                  style={{
                    background: 'linear-gradient(45deg, #0a1535, #1e3a8a)',
                    color: 'white'
                  }}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl">🏆</span>
                  <div className="text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Prizes</h2>
                    <p className="text-sm sm:text-base">
                      Win from a Prize Pool of Rs. 2,25,000.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Cultural Programs with glowing border */}
              <div className="relative p-0.5 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse hover:animate-none group transform -rotate-0.5 sm:-rotate-1"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div
                  className="about-card p-4 md:p-6 rounded-lg shadow-xl text-center flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 relative"
                  style={{
                    background: 'linear-gradient(45deg, #0a1535, #1e3a8a)',
                    color: 'white'
                  }}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl">🎉</span>
                  <div className="text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Activities</h2>
                    <p className="text-sm sm:text-base">
                      Enjoy Cultural Programs, Fun Activities and much more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* This is the image. */}
          <div className="w-full lg:w-auto flex justify-center">
            <img
              src="./About.png"
              alt="An image representing CineHack.ai"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg"
            />
          </div>
        </div>

        {/* Bottom SVG wave. */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ transform: 'rotate(180deg)' }}>
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> */}
      </div>
    </div>
  );
};

export default About;