import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb, Code, Rocket, FileText, Film, DollarSign, Scale, MapPin, Mic, Globe, Shield, Eye } from 'lucide-react';

const problemCards = [
  { title: "Integrated Production Management System", description: "Develop a comprehensive AI-powered dashboard that unifies all aspects of film production within a single integrated platform. The system encompasses pre-production planning, active production monitoring, post-production workflows, and distribution management. Key features include centralized finance management, real-time operations tracking, HR coordination, administrative task automation, design workflow optimization, VFX pipeline management, dynamic reporting capabilities, and intelligent budget oversight with predictive analytics for cost control and resource allocation.", icon: <Film size={32} /> },
  { title: "Investor Budget Tracking Dashboard", description: "Create a sophisticated dashboard specifically designed for investors that provides real-time budget tracking, milestone progress, ROI projections, and financial transparency throughout the production lifecycle.", icon: <DollarSign size={32} /> },
  { title: "Intelligent Budget Breakdown System", description: "Design a dynamic budgeting tool that automatically generates detailed cost breakdowns based on script analysis, production requirements, and industry standards, with real-time updates and scenario planning capabilities.", icon: <Rocket size={32} /> },
  { title: "Legal Compliance & Production Workflow", description: "AI-powered legal compliance assistant that automates stage-by-stage paperwork generation, contract review, and regulatory approval tracking for film production companies, reducing legal processing time from weeks to hours.", icon: <Scale size={32} /> },
  { title: "Distribution Tracking & Transparency System", description: "Build a comprehensive ticket and distribution tracking platform that provides real-time visibility into movie distribution across different channels, theaters, and platforms with transparent reporting for all stakeholders.", icon: <FileText size={32} /> },
  { title: "Location and Resource Coordinating", description: "Real-time apps for logistics, location scouting, and on-set coordination.", icon: <MapPin size={32} /> },
  { title: "Script Breakdown Automation", description: "Create an intelligent script breakdown tool (similar to StudioBinder) that automatically categorizes and organizes script elements including characters, props, locations, wardrobe, and scheduling requirements, to streamline pre-production planning.", icon: <Code size={32} /> },
  { title: "AI-Powered Script Analysis & Development", description: "Build a script doctoring and analysis platform that provides mind map-style visualization of story structure, character arcs, plot holes, pacing issues, and improvement suggestions to enhance screenplay quality.", icon: <Lightbulb size={32} /> },
  { title: "Storyboard Testing & Workflow Optimization", description: "Develop a beta testing workflow system for storyboard validation that allows filmmakers to test narrative flow, visual storytelling effectiveness, and audience engagement before full production begins.", icon: <FileText size={32} /> },
  { title: "Real-Time Production Audio", description: "Revolutionary on-set audio AI (sync sound) that captures broadcast-quality dialogue during filming using advanced noise cancellation, frequency isolation, and real-time audio enhancement, eliminating post-production dubbing needs.", icon: <Mic size={32} /> },
  { title: "Multi-Language Dubbing Platform", description: "Create an AI-powered dubbing system that can take original voice recordings from artists and generate high-quality dubbed versions in multiple languages while preserving emotion, timing, and lip-sync accuracy.", icon: <Globe size={32} /> },
  { title: "Multilingual Subtitle Generation", description: "Context-aware subtitle AI that generates culturally nuanced, time-synced subtitles in 50+ languages while preserving dialogue emotion, cultural references, and speaker identification for global film distribution.", icon: <Globe size={32} /> },
  { title: "Social Media Threat Detection", description: "Intelligent social monitoring system that detects coordinated personal attacks across platforms, analyzes behavioral patterns to identify threat networks, and generates comprehensive cybercrime reports with account mapping and evidence compilation.", icon: <Shield size={32} /> },
  { title: "Anti-Piracy Content Protection", description: "Advanced content fingerprinting AI that creates unique audio-visual signatures from film samples to automatically detect and remove pirated content across social platforms, messaging apps, and streaming sites in real-time.", icon: <Eye size={32} /> },
];

const ProblemStatements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance the carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % problemCards.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % problemCards.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + problemCards.length) % problemCards.length);
    setIsAutoPlaying(false);
  };

  const getVisibleCards = () => {
    const cards = [];
    // On mobile, show only current card
    if (isMobile) {
      cards.push({ ...problemCards[currentIndex], originalIndex: currentIndex, position: 0 });
    } else {
      // On desktop/tablet, show 3 cards
      for (let i = -1; i <= 1; i++) {
        const index = (currentIndex + i + problemCards.length) % problemCards.length;
        cards.push({ ...problemCards[index], originalIndex: index, position: i });
      }
    }
    return cards;
  };

  const getHoleCount = () => {
    if (typeof window === 'undefined') return 20;
    return Math.floor(window.innerWidth / 25);
  };

  return (
    <div id="problems" className="bg-black text-white py-10 sm:py-16 lg:py-20 px-2 sm:px-4 overflow-visible font-inter">
      <div className="max-w-full mx-auto px-2 sm:px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 sm:mb-12 lg:mb-16 text-center tracking-wide px-4 font-oswald">
          <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            PROBLEM STATEMENTS
          </span>
        </h2>

        {/* Film Roll Container */}
        <div className="relative mx-2 sm:mx-4 lg:mx-8">
          {/* Film Strip Holes - Top */}
          <div className="absolute top-0 left-0 right-0 h-4 sm:h-6 lg:h-8 bg-gray-800 flex justify-center items-center z-10 overflow-hidden">
            <div className="flex space-x-2 sm:space-x-3 lg:space-x-4">
              {Array.from({ length: getHoleCount() }).map((_, i) => (
                <div key={i} className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-black rounded-full flex-shrink-0"></div>
              ))}
            </div>
          </div>

          {/* Main Carousel Area */}
          <div className="bg-gray-800 px-2 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20 relative overflow-visible">
            <div className="flex justify-center items-center space-x-2 sm:space-x-4 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] relative">
              {/* Navigation Button - Left */}
              <button
                onClick={prevSlide}
                className="bg-yellow-500 hover:bg-yellow-400 text-black p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-20 flex-shrink-0 touch-manipulation"
                onMouseEnter={() => !isMobile && setIsAutoPlaying(false)}
                onMouseLeave={() => !isMobile && setIsAutoPlaying(true)}
              >
                <ChevronLeft size={isMobile ? 20 : 28} />
              </button>

              {/* Film Frames */}
              <div className={`flex items-center justify-center overflow-visible relative ${
                isMobile 
                  ? 'w-full max-w-sm' 
                  : 'space-x-4 sm:space-x-8 lg:space-x-12 w-full max-w-7xl'
              }`}>
                {getVisibleCards().map((card, index) => {
                  const position = card.position;
                  const isCenter = position === 0;
                  const isLeft = position === -1;
                  const isRight = position === 1;
                  
                  return (
                    <div
                      key={card.originalIndex}
                      className={`relative bg-black border-2 sm:border-4 border-gray-600 rounded-lg transition-all duration-700 ease-in-out flex-shrink-0 transform ${
                        isMobile
                          ? 'w-full h-[380px] sm:h-[420px] border-yellow-400 shadow-xl shadow-yellow-400/30 z-10 opacity-100'
                          : isCenter 
                          ? 'w-[280px] sm:w-[400px] lg:w-[600px] h-[320px] sm:h-[370px] lg:h-[420px] scale-105 sm:scale-110 border-yellow-400 shadow-2xl shadow-yellow-400/30 z-10 opacity-100' 
                          : isLeft
                          ? 'w-[200px] sm:w-[300px] lg:w-[450px] h-[260px] sm:h-[300px] lg:h-[340px] scale-90 opacity-60 -rotate-1 sm:-rotate-2 translate-x-2 sm:translate-x-4 lg:translate-x-8'
                          : 'w-[200px] sm:w-[300px] lg:w-[450px] h-[260px] sm:h-[300px] lg:h-[340px] scale-90 opacity-60 rotate-1 sm:rotate-2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-8'
                      }`}
                      style={!isMobile ? {
                        transform: isCenter 
                          ? 'translateZ(50px) scale(1.1)' 
                          : isLeft 
                          ? 'translateZ(-30px) translateX(15px) rotateY(8deg) rotateZ(-1deg) scale(0.9)'
                          : 'translateZ(-30px) translateX(-15px) rotateY(-8deg) rotateZ(1deg) scale(0.9)'
                      } : {}}
                    >
                      {/* Film Frame Perforations - Hidden on very small mobile */}
                      <div className={`absolute left-0 top-0 bottom-0 bg-gray-700 flex flex-col justify-evenly items-center rounded-l-lg ${
                        isMobile ? 'w-3 sm:w-4' : 'w-4 lg:w-6'
                      } hidden xs:flex`}>
                        {Array.from({ length: isMobile ? 6 : 8 }).map((_, i) => (
                          <div key={i} className={`bg-black rounded-full ${
                            isMobile ? 'w-1.5 h-1.5 sm:w-2 sm:h-2' : 'w-2 h-2 lg:w-3 lg:h-3'
                          }`}></div>
                        ))}
                      </div>
                      <div className={`absolute right-0 top-0 bottom-0 bg-gray-700 flex flex-col justify-evenly items-center rounded-r-lg ${
                        isMobile ? 'w-3 sm:w-4' : 'w-4 lg:w-6'
                      } hidden xs:flex`}>
                        {Array.from({ length: isMobile ? 6 : 8 }).map((_, i) => (
                          <div key={i} className={`bg-black rounded-full ${
                            isMobile ? 'w-1.5 h-1.5 sm:w-2 sm:h-2' : 'w-2 h-2 lg:w-3 lg:h-3'
                          }`}></div>
                        ))}
                      </div>

                      {/* Card Content */}
                      <div className={`h-full flex flex-col justify-start text-left transition-all duration-700 font-roboto ${
                        isMobile 
                          ? 'px-4 py-4 opacity-100' 
                          : isCenter 
                          ? 'px-4 sm:px-6 py-4 sm:py-6 opacity-100' 
                          : 'px-3 sm:px-4 py-3 sm:py-4 opacity-85'
                      }`}>
                        <div className="mb-3 sm:mb-4 flex items-start sm:items-center">
                          <div className={`mr-2 sm:mr-3 transition-all duration-500 flex-shrink-0 mt-1 sm:mt-0 ${
                            isMobile || isCenter ? 'text-yellow-400 scale-100 sm:scale-110' : 'text-yellow-300'
                          }`}>
                            {React.cloneElement(card.icon, { 
                              size: isMobile ? 26 : isCenter ? 34 : 26 
                            })}
                          </div>
                          <h3 className={`font-bold text-white leading-tight transition-all duration-500 font-poppins ${
                            isMobile 
                              ? 'text-lg sm:text-xl' 
                              : isCenter 
                              ? 'text-base sm:text-lg lg:text-xl' 
                              : 'text-sm sm:text-base'
                          }`}>
                            {card.title}
                          </h3>
                        </div>
                        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                          <p className={`text-gray-300 leading-relaxed transition-all duration-500 font-source-sans ${
                            isMobile 
                              ? 'text-base' 
                              : isCenter 
                              ? 'text-sm sm:text-base' 
                              : 'text-xs sm:text-sm hidden sm:block'
                          }`}>
                            {isMobile && card.description.length > 300 
                              ? card.description.substring(0, 300) + '...' 
                              : card.description}
                          </p>
                        </div>
                        
                        {/* Film Frame Number */}
                        <div className={`absolute bottom-1 sm:bottom-2 right-4 sm:right-6 lg:right-8 text-gray-500 font-mono ${
                          isMobile ? 'text-sm font-semibold' : 'text-sm font-semibold'
                        }`}>
                          {String(card.originalIndex + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Button - Right */}
              <button
                onClick={nextSlide}
                className="bg-yellow-500 hover:bg-yellow-400 text-black p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-20 flex-shrink-0 touch-manipulation"
                onMouseEnter={() => !isMobile && setIsAutoPlaying(false)}
                onMouseLeave={() => !isMobile && setIsAutoPlaying(true)}
              >
                <ChevronRight size={isMobile ? 20 : 28} />
              </button>
            </div>
          </div>

          {/* Film Strip Holes - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 lg:h-8 bg-gray-800 flex justify-center items-center z-10 overflow-hidden">
            <div className="flex space-x-2 sm:space-x-3 lg:space-x-4">
              {Array.from({ length: getHoleCount() }).map((_, i) => (
                <div key={i} className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-black rounded-full flex-shrink-0"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Film Roll Indicators */}
        <div className="flex justify-center mt-6 sm:mt-8 lg:mt-12 space-x-2 sm:space-x-3 px-4 flex-wrap">
          {problemCards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 mb-2 ${
                index === currentIndex 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="flex justify-center mt-4 sm:mt-6 px-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-sm sm:text-base font-bold transition-all duration-500 shadow-lg touch-manipulation font-open-sans tracking-wide ${
              isAutoPlaying 
                ? 'bg-yellow-500 text-black hover:bg-yellow-400 hover:shadow-yellow-400/30' 
                : 'bg-gray-700 text-white hover:bg-gray-600 hover:shadow-gray-600/30'
            }`}
          >
            {isAutoPlaying ? '⏸ PAUSE REEL' : '▶ PLAY REEL'}
          </button>
        </div>
      </div>

      {/* Google Fonts Import */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&family=Poppins:wght@400;500;600;700;800;900&family=Source+Sans+Pro:wght@400;600;700&family=Open+Sans:wght@400;500;600;700;800&family=Oswald:wght@200;300;400;500;600;700&display=swap');
        
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-roboto { font-family: 'Roboto', sans-serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-source-sans { font-family: 'Source Sans Pro', sans-serif; }
        .font-open-sans { font-family: 'Open Sans', sans-serif; }
        .font-oswald { font-family: 'Oswald', sans-serif; }
      `}</style>
    </div>
  );
};

export default ProblemStatements;