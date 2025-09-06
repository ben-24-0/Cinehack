import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Play, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const PreEvent = () => {
  const filmStripRef = useRef(null);

  // Animation effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (filmStripRef.current) {
        gsap.to(filmStripRef.current, {
          x: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        });
      }
    });

    return () => ctx.revert();
  }, []);


  return (
    <div id="pre-event" className="bg-black text-white py-16 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-purple-900/20" />
      
      {/* Animated film strip background */}
      <div 
        ref={filmStripRef}
        className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex justify-center items-center opacity-10"
      >
        <div className="flex space-x-3">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-3 h-3 bg-black rounded-full flex-shrink-0" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30">
              <Play className="text-purple-400" size={16} />
              <span className="text-purple-400 font-semibold tracking-wider text-sm">COMING SOON</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
            PRE-EVENT ACTIVITIES
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Exciting pre-event activities are being planned to prepare you for the ultimate hackathon experience.
          </p>
        </div>

        {/* Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎬</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Workshops</h3>
            <p className="text-gray-400 text-sm">Hands-on technical sessions to prepare for the hackathon</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎤</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Tech Talks</h3>
            <p className="text-gray-400 text-sm">Industry insights and expert discussions</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-lg p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Networking</h3>
            <p className="text-gray-400 text-sm">Team formation and collaboration opportunities</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/pre-events" className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
            <span>View All Pre-Events</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreEvent;
