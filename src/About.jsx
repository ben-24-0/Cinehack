import React from "react";

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-black font-sans select-none">
      {/* Container for the purple section with wave SVGs. */}
      <div className="bg-purple-400">
        {/* Top SVG wave to create a curved top edge. */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        {/* Main content container. */}
        <div className="curved px-8 py-16 flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* This div contains the heading and the cards. */}
          <div className="flex-1 max-w-4xl text-content text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-8 text-black">
              WELCOME TO CINEHACK.AI
            </h1>
            {/* New container for the cards with improved styling */}
            <div className="flex flex-col gap-6 p-4">
              {/* Card 1: Hackathon Details with new lightbulb SVG */}
              <div
                className="about-card p-6 rounded-lg shadow-xl text-center flex items-center justify-center gap-4"
                style={{
                  background: 'linear-gradient(45deg, #7c3aed, #9a67ea)',
                  color: 'white',
                  transform: 'rotate(-2deg)'
                }}
              >
                <span className="text-5xl">🧠</span>
                <div className="text-left">
                  <h2 className="text-2xl font-bold mb-1">Hackathon</h2>
                  <p>
                    A 48 hour hackathon focused on AI in the film industry.
                  </p>
                </div>
              </div>

              {/* Card 2: Prize Pool with a proper trophy SVG */}
              <div
                className="about-card p-6 rounded-lg shadow-xl text-center flex items-center justify-center gap-4"
                style={{
                  background: 'linear-gradient(45deg, #7c3aed, #9a67ea)',
                  color: 'white',
                  transform: 'rotate(2deg)'
                }}
              >
                <span className="text-5xl">🏆</span>
                <div className="text-left">
                  <h2 className="text-2xl font-bold mb-1">Prizes</h2>
                  <p>
                    Win from a Prize Pool of Rs. 2,25,000.
                  </p>
                </div>
              </div>

              {/* Card 3: Cultural Programs with Party Popper Emoji */}
              <div
                className="about-card p-6 rounded-lg shadow-xl text-center flex items-center justify-center gap-4"
                style={{
                  background: 'linear-gradient(45deg, #7c3aed, #9a67ea)',
                  color: 'white',
                  transform: 'rotate(-1deg)'
                }}
              >
                <span className="text-5xl">🎉</span>
                <div className="text-left">
                  <h2 className="text-2xl font-bold mb-1">Activities</h2>
                  <p>
                    Enjoy Cultural Programs, Fun Activities and much more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* This is the image. */}
          <img
            src="./About.png"
            alt="An image representing CineHack.ai"
            className="w-full max-w-xl rounded-lg"
          />
        </div>

        {/* Bottom SVG wave. */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ transform: 'rotate(180deg)' }}>
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default About;