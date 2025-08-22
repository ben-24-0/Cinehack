import React, { useState, useEffect } from "react";
import CineHackHeader from "../CineHeader"; // 👈 main page

const LightsCameraAlgorithmLoader = () => {
  const [showCurtain, setShowCurtain] = useState(true); // Start with curtains visible
  const [showClapper, setShowClapper] = useState(true); // Show clapper initially
  const [openCurtain, setOpenCurtain] = useState(false);

  useEffect(() => {
    // Step 1: Show clapper for 2 seconds
    const timer1 = setTimeout(() => {
      setShowClapper(false); // fade out clapper
    }, 2000);

    // Step 2: Open curtains after clapper fades
    const timer2 = setTimeout(() => {
      setOpenCurtain(true);
    }, 2500); // delay after clapper fades

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden flex justify-center items-center">
      <style jsx>{`
        .curtain {
          position: fixed;
          top: 0;
          width: 50%;
          height: 100vh;
          z-index: 50;
          transition: transform 1.5s ease-in-out;
          box-shadow: inset 0 0 50px rgba(0,0,0,0.8);
        }
        .curtain-left {
          left: 0;
          transform: translateX(0);
          background: #000;
          box-shadow: 
            inset -20px 0 40px rgba(0, 0, 0, 0.8),
            0 0 30px rgba(0, 0, 0, 0.5);
        }
        .curtain-right {
          right: 0;
          transform: translateX(0);
          background: #0a1535;
          box-shadow: 
            inset 20px 0 40px rgba(108, 85, 156, 0.3),
            0 0 50px rgba(108, 85, 156, 0.4);
        }
        .curtain.open.curtain-left {
          transform: translateX(-100%);
        }
        .curtain.open.curtain-right {
          transform: translateX(100%);
        }

        .cine-content {
          opacity: 0;
          transition: opacity 2s ease-in-out;
          transition-delay: 1.5s; /* delay until curtains start moving */
        }
        .cine-content.show {
          opacity: 1;
        }

        .clapper-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 60; /* Above curtains */
          opacity: 1;
          transition: opacity 0.8s ease-out;
        }
        .clapper-container.fade-out {
          opacity: 0;
        }

        .clapper-svg {
          width: 250px;
          height: 250px;
          animation: clapperFall 2s ease-in-out;
        }

        @keyframes clapperFall {
          0% {
            transform: translateY(-100px) rotate(-15deg) scale(0.8);
            opacity: 0;
          }
          30% {
            transform: translateY(0px) rotate(0deg) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translateY(10px) rotate(2deg) scale(1);
          }
          70% {
            transform: translateY(-5px) rotate(-1deg) scale(1.05);
          }
          85% {
            transform: translateY(3px) rotate(0.5deg) scale(0.98);
          }
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes clapStick {
          0%, 60% {
            transform-origin: 18px 53px;
            transform: rotate(0deg);
          }
          75% {
            transform-origin: 18px 53px;
            transform: rotate(-25deg);
          }
          85% {
            transform-origin: 18px 53px;
            transform: rotate(-5deg);
          }
          100% {
            transform-origin: 18px 53px;
            transform: rotate(0deg);
          }
        }
      `}</style>

      {/* Clapper animation in center */}
      <div className={`clapper-container ${!showClapper ? "fade-out" : ""}`}>
        <svg
          className="clapper-svg"
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main clapperboard body */}
          <rect
            x="10"
            y="50"
            width="100"
            height="45"
            rx="4"
            fill="#1a1a1a"
            stroke="#444"
            strokeWidth="2"
          />
          
          {/* Top clapper stick (with clapping animation) */}
          <g style={{ animation: "clapStick 2s ease-in-out" }}>
            <path
              d="M15 50 L105 35 L110 42 L20 57 Z"
              fill="#f8f8f8"
              stroke="#333"
              strokeWidth="2"
            />
            
            {/* Black and white diagonal stripes on clapper stick */}
            <g clipPath="url(#clipPath)">
              <rect x="20" y="35" width="12" height="22" fill="#000" transform="rotate(-8 26 46)" />
              <rect x="32" y="36" width="12" height="21" fill="#fff" transform="rotate(-8 38 46.5)" />
              <rect x="44" y="37" width="12" height="20" fill="#000" transform="rotate(-8 50 47)" />
              <rect x="56" y="38" width="12" height="19" fill="#fff" transform="rotate(-8 62 47.5)" />
              <rect x="68" y="39" width="12" height="18" fill="#000" transform="rotate(-8 74 48)" />
              <rect x="80" y="40" width="12" height="17" fill="#fff" transform="rotate(-8 86 48.5)" />
              <rect x="92" y="41" width="12" height="16" fill="#000" transform="rotate(-8 98 49)" />
            </g>
            
            <defs>
              <clipPath id="clipPath">
                <path d="M15 50 L105 35 L110 42 L20 57 Z" />
              </clipPath>
            </defs>
          </g>
          
          {/* Hinge mechanism */}
          <circle cx="18" cy="53" r="3" fill="#666" stroke="#333" strokeWidth="1" />
          <circle cx="18" cy="53" r="1.5" fill="#999" />
          
          {/* Information fields on main board */}
          <rect x="15" y="60" width="90" height="30" fill="#0a0a0a" stroke="#333" strokeWidth="1" />
          
          {/* Field dividers */}
          <line x1="15" y1="70" x2="105" y2="70" stroke="#333" strokeWidth="1" />
          <line x1="15" y1="80" x2="105" y2="80" stroke="#333" strokeWidth="1" />
          <line x1="60" y1="60" x2="60" y2="90" stroke="#333" strokeWidth="1" />
          
          {/* Text labels and content */}
          <text x="18" y="67" fill="#888" fontSize="5" fontFamily="monospace">PRODUCTION</text>
          <text x="18" y="77" fill="#fff" fontSize="7" fontWeight="bold" fontFamily="monospace">CINEHACK</text>
          
          <text x="63" y="67" fill="#888" fontSize="5" fontFamily="monospace">SCENE</text>
          <text x="63" y="77" fill="#38bdf8" fontSize="7" fontWeight="bold" fontFamily="monospace">001</text>
          
          <text x="18" y="87" fill="#888" fontSize="5" fontFamily="monospace">TAKE</text>
          <text x="35" y="87" fill="#fbbf24" fontSize="7" fontWeight="bold" fontFamily="monospace">1</text>
          
          <text x="63" y="87" fill="#888" fontSize="5" fontFamily="monospace">DIRECTOR</text>
          <text x="63" y="95" fill="#10b981" fontSize="6" fontFamily="monospace">AI</text>
          
          {/* Corner holes */}
          <circle cx="20" cy="55" r="1" fill="#333" />
          <circle cx="100" cy="55" r="1" fill="#333" />
          <circle cx="20" cy="85" r="1" fill="#333" />
          <circle cx="100" cy="85" r="1" fill="#333" />
        </svg>
      </div>

      {/* CineHeader with fade in after curtains start opening */}
      <div className={`cine-content ${openCurtain ? "show" : ""}`}>
        <CineHackHeader />
      </div>

      {/* Curtains */}
      {showCurtain && (
        <>
          <div className={`curtain curtain-left ${openCurtain ? "open" : ""}`} />
          <div className={`curtain curtain-right ${openCurtain ? "open" : ""}`} />
        </>
      )}
    </div>
  );
};

export default LightsCameraAlgorithmLoader;