import React, { useState, useEffect } from "react";
import "./FireText.css";

const About = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [showPrize, setShowPrize] = useState(false);

  useEffect(() => {
    const cycleAnimation = () => {
      setIsOpening(true);
      setTimeout(() => {
        setShowPrize(true);
      }, 800);
      setTimeout(() => {
        setIsOpening(false);
        setShowPrize(false);
      }, 3000);
    };

    cycleAnimation();
    const interval = setInterval(cycleAnimation, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleOpen = () => {
    if (!isOpening && !showPrize) {
      setIsOpening(true);
      setTimeout(() => {
        setShowPrize(true);
      }, 800);
    }
  };

  return (
    <div id="about" className="min-h-screen bg-black font-sans select-none">
      {/* Purple Section */}
      <div className="bg-purple-400">
        <div className="curved px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8">
          {/* Left side — Cards */}
          <div className="flex-1 max-w-4xl text-content text-center lg:text-left">
            <h1
              className="font-bold mb-6 md:mb-8 text-white leading-tight break-words px-1"
              style={{
                fontSize: "clamp(24px, 4vw, 48px)",
              }}
            >
              WELCOME TO CINEHACK.AI
            </h1>
            <div className="flex flex-col gap-4 md:gap-6 p-2 md:p-4">
              {/* Card 1 */}
              <div className="relative p-0.5 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse hover:animate-none group transform -rotate-1 sm:-rotate-2">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div
                  className="about-card p-4 md:p-6 rounded-lg shadow-xl text-center flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 relative"
                  style={{
                    background: "linear-gradient(45deg, #0a1535, #2e4890ff)",
                    color: "white",
                  }}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl">🧠</span>
                  <div className="text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
                      Hackathon
                    </h2>
                    <p className="text-sm sm:text-base">
                      A 48 hour hackathon focused on AI in the film industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative p-0.5 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse hover:animate-none group transform rotate-1 sm:rotate-2">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div
                  className="about-card p-4 md:p-6 rounded-lg shadow-xl text-center flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 relative"
                  style={{
                    background: "linear-gradient(45deg, #0a1535, #1e3a8a)",
                    color: "white",
                  }}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl">🤝</span>
                  <div className="text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
                      Networking
                    </h2>
                    <p className="text-sm sm:text-base">
                      Connect with industry leaders, mentors, and fellow
                      innovators.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative p-0.5 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse hover:animate-none group transform -rotate-0.5 sm:-rotate-1">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div
                  className="about-card p-4 md:p-6 rounded-lg shadow-xl text-center flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 relative"
                  style={{
                    background: "linear-gradient(45deg, #0a1535, #1e3a8a)",
                    color: "white",
                  }}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl">🎉</span>
                  <div className="text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
                      Activities
                    </h2>
                    <p className="text-sm sm:text-base">
                      Enjoy Cultural Programs, Fun Activities and much more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side — Gift/Prize */}
          <div className="w-full lg:w-auto flex justify-center">
            <div className="relative" style={{ width: "480px", height: "300px" }}>
              {/* Prize Card */}
              <div
  style={{
    width: "500px",
    opacity: showPrize ? 1 : 0,
    transform: `translate(-50%, -50%) ${showPrize ? "scale(1)" : "scale(0.8)"}`,
    transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease",
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
  }}
>

                <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl text-center">
                  <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-xl z-20 border border-white/20"></div>
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2e4890] via-[#9333ea] to-[#1e3a8a] blur-xl opacity-40"
                    style={{
                      animation: showPrize ? "rotate 4s linear infinite" : "none",
                    }}
                  ></div>
                  <div className="relative z-30">
                    <span
                      className="text-5xl sm:text-6xl md:text-7xl block font-extrabold mb-4"
                      style={{
                        animation: showPrize
                          ? "bounce 0.8s ease-in-out infinite alternate"
                          : "none",
                      }}
                    >
                      🏆
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                      Prize Pool
                    </h2>
                    <p
                      className="fire-text"
                      style={{
                        fontSize: "clamp(48px, 8vw, 72px)",
                        fontWeight: "bold",
                        lineHeight: "1.1",
                        margin: "20px 0",
                      }}
                    >
                      ₹2,25,000
                    </p>
                    <p className="mt-4 text-sm sm:text-base opacity-90 text-white">
                      Rewards for groundbreaking innovation & creativity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gift Box Wrapper */}
              <div
                style={{
                  opacity: showPrize ? 0 : 1,
                  transition: "opacity 0.8s ease-in-out",
                }}
              >
                {/* Gift Box Base */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) ${
                      isOpening ? "translateY(150px)" : "translateY(0)"
                    }`,
                    width: "140px",
                    height: "90px",
                    background: "linear-gradient(145deg, #2e4890, #1e3a8a)",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                    transition:
                      "all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.8s ease",
                    zIndex: 5,
                    cursor: "pointer",
                    animation: isOpening ? "shake 0.3s ease-in-out" : "none",
                  }}
                  onClick={handleOpen}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "0",
                      right: "0",
                      height: "8px",
                      background: "#9333ea",
                      transform: "translateY(-50%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      bottom: "0",
                      left: "50%",
                      width: "8px",
                      background: "#9333ea",
                      transform: "translateX(-50%)",
                    }}
                  />
                </div>

                {/* Lid */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) translateY(-45px) ${
                      isOpening
                        ? "translateY(-200px) rotateX(-45deg)"
                        : "translateY(0) rotateX(0)"
                    }`,
                    width: "150px",
                    height: "35px",
                    background: "linear-gradient(145deg, #2e4890, #1e3a8a)",
                    borderRadius: "12px 12px 6px 6px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                    transition:
                      "all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.8s ease",
                    transformStyle: "preserve-3d",
                    zIndex: 10,
                  }}
                />

                {/* Bow */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) translateY(-55px) ${
                      isOpening
                        ? "translateY(-220px) scale(0.5)"
                        : "translateY(0) scale(1)"
                    }`,
                    transition:
                      "all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.8s ease",
                    opacity: isOpening ? 0 : 1,
                    zIndex: 11,
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "25px",
                      background: "#9333ea",
                      borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                      position: "relative",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    }}
                  />
                </div>
              </div>

              {/* Sparkles */}
              {isOpening && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        width: "6px",
                        height: "6px",
                        background: "#9333ea",
                        borderRadius: "50%",
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${
                          i * 45
                        }deg) translateY(-${50 + i * 10}px)`,
                        animation: `sparkle 1.2s ease-out ${i * 0.1}s forwards`,
                        opacity: 0,
                        zIndex: 15,
                      }}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(-50%) rotate(0deg); }
          25% { transform: translateX(-50%) rotate(-1deg); }
          75% { transform: translateX(-50%) rotate(1deg); }
        }
        @keyframes sparkle {
          0% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--rotation)) translateY(-50px) scale(0); }
          50% { opacity: 1; transform: translate(-50%, -50%) rotate(var(--rotation)) translateY(-100px) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--rotation)) translateY(-150px) scale(0); }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
};

export default About;
