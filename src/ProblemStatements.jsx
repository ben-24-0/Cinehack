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
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance the carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % problemCards.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setCurrentIndex((prev) => (prev + 1) % problemCards.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setCurrentIndex((prev) => (prev - 1 + problemCards.length) % problemCards.length);
    setIsAutoPlaying(false);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + problemCards.length) % problemCards.length;
      cards.push({ ...problemCards[index], originalIndex: index, position: i });
    }
    return cards;
  };

  return (
    <div id="problems" className="bg-black text-white py-20 px-4 overflow-visible">
              <div className="max-w-full mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center tracking-wider">
          <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            PROBLEM STATEMENTS
          </span>
        </h2>

        {/* Film Roll Container */}
        <div className="relative">
          {/* Film Strip Holes - Top */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex justify-center items-center z-10">
            <div className="flex space-x-4">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="w-4 h-4 bg-black rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Main Carousel Area */}
          <div className="bg-gray-800 px-12 py-20 relative overflow-visible">
            <div className="flex justify-center items-center space-x-4 min-h-[500px] relative px-4">
              {/* Navigation Button - Left */}
              <button
                onClick={prevSlide}
                className="bg-yellow-500 hover:bg-yellow-400 text-black p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-20 flex-shrink-0"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <ChevronLeft size={28} />
              </button>

              {/* Film Frames */}
              <div className="flex items-center justify-center space-x-12 overflow-visible max-w-none relative" style={{ width: '80vw' }}>
                {getVisibleCards().map((card, index) => {
                  const position = card.position;
                  const isCenter = position === 0;
                  const isLeft = position === -1;
                  const isRight = position === 1;
                  
                  return (
                    <div
                      key={card.originalIndex}
                      className={`relative bg-black border-4 border-gray-600 rounded-lg transition-all duration-700 ease-in-out flex-shrink-0 transform ${
                        isCenter 
                          ? 'w-[600px] h-[400px] scale-110 border-yellow-400 shadow-2xl shadow-yellow-400/30 z-10 opacity-100' 
                          : isLeft
                          ? 'w-[450px] h-[320px] scale-90 opacity-60 -rotate-2 translate-x-8'
                          : 'w-[450px] h-[320px] scale-90 opacity-60 rotate-2 -translate-x-8'
                      } ${isTransitioning ? 'blur-sm' : ''}`}
                      style={{
                        transform: isCenter 
                          ? 'translateZ(50px) scale(1.1)' 
                          : isLeft 
                          ? 'translateZ(-30px) translateX(30px) rotateY(15deg) rotateZ(-2deg) scale(0.9)'
                          : 'translateZ(-30px) translateX(-30px) rotateY(-15deg) rotateZ(2deg) scale(0.9)'
                      }}
                    >
                    {/* Film Frame Perforations */}
                    <div className="absolute left-0 top-0 bottom-0 w-6 bg-gray-700 flex flex-col justify-evenly items-center rounded-l-lg">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-black rounded-full"></div>
                      ))}
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-6 bg-gray-700 flex flex-col justify-evenly items-center rounded-r-lg">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-black rounded-full"></div>
                      ))}
                    </div>

                    {/* Card Content */}
                    <div className={`px-6 py-6 h-full flex flex-col justify-start text-left transition-all duration-700 ${
                      isCenter ? 'opacity-100' : 'opacity-85'
                    }`}>
                      <div className="mb-4 flex items-center">
                        <div className={`mr-3 transition-all duration-500 ${
                          isCenter ? 'text-yellow-400 scale-110' : 'text-yellow-300'
                        }`}>
                          {card.icon}
                        </div>
                        <h3 className={`font-bold text-white leading-tight transition-all duration-500 ${
                          isCenter ? 'text-lg' : 'text-base'
                        }`}>{card.title}</h3>
                      </div>
                      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                        <p className={`text-gray-300 leading-relaxed transition-all duration-500 ${
                          isCenter ? 'text-sm' : 'text-xs'
                        }`}>{card.description}</p>
                      </div>
                      
                      {/* Film Frame Number */}
                      <div className="absolute bottom-2 right-8 text-xs text-gray-500 font-mono">
                        {String(card.originalIndex + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                )})}
              </div>

              {/* Navigation Button - Right */}
              <button
                onClick={nextSlide}
                className="bg-yellow-500 hover:bg-yellow-400 text-black p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-20 flex-shrink-0"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>

          {/* Film Strip Holes - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-800 flex justify-center items-center z-10">
            <div className="flex space-x-4">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="w-4 h-4 bg-black rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Film Roll Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {problemCards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-3 rounded-full text-sm transition-all duration-500 shadow-lg ${
              isAutoPlaying 
                ? 'bg-yellow-500 text-black hover:bg-yellow-400 hover:shadow-yellow-400/30' 
                : 'bg-gray-700 text-white hover:bg-gray-600 hover:shadow-gray-600/30'
            }`}
          >
            {isAutoPlaying ? '⏸ PAUSE REEL' : '▶ PLAY REEL'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;