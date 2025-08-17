import React from "react";

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-black font-sans">
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

        {/* This is the core content container.
          - `flex` and `flex-col`: Initializes a flexbox container and sets the default direction to column (for mobile-first design).
          - `lg:flex-row`: On large screens (1024px and up), the direction changes to a row.
          - `items-center`: Vertically centers the text and image.
          - `justify-center`: Horizontally centers the items.
          - `gap-8`: Adds space between the text and the image.
        */}
        <div className="curved px-8 py-16 flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* This div contains the text content. */}
          {/* `flex-1` makes this div flexible, allowing it to grow and fill the available space. */}
          <div className="text-content flex-1 max-w-4xl text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-8 text-black">
              About CineHack.ai
            </h1>
            <p className="text-lg leading-relaxed text-black">
              Cinehack.ai 2025 is a 24-hour national hackathon focused on
              Generative AI. It brings together students, developers, and
              startups to build real projects using AI tools that can generate
              text, images, music, and more. The event encourages creative ideas
              and fast prototyping using AI.
            </p>
          </div>

          {/* This is the image, now placed to the right of the text. */}
          {/* I've used a placeholder URL since local files cannot be accessed in this environment. */}
          <img
            src="./About.png"
            alt="An image representing CineHack.ai"
            className="w-full max-w-xl rounded-lg" /* Changed from max-w-sm to max-w-md for larger size */
          />
        </div>

        {/* Bottom SVG wave to create a curved bottom edge. */}
      </div>
    </div>
  );
};

export default About;
