import React, { useEffect, useRef } from 'react';
import { Mic, Code, Lightbulb, Film, Star, ChevronRight, Play, Users } from 'lucide-react';
import { gsap } from 'gsap';

const PreEventsPage = () => {
  const filmStripRef = useRef(null);

  // Simple preview cards (6 placeholder cards)
  const previewEvents = [
    { id: 1, icon: <Film size={32} />, color: "#3b82f6" },
    { id: 2, icon: <Mic size={32} />, color: "#8b5cf6" },
    { id: 3, icon: <Users size={32} />, color: "#10b981" },
    { id: 4, icon: <Code size={32} />, color: "#ef4444" },
    { id: 5, icon: <Lightbulb size={32} />, color: "#f59e0b" },
    { id: 6, icon: <Star size={32} />, color: "#8b5cf6" }
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

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

  const ComingSoonEventCard = ({ event }) => (
    <div className="relative group cursor-pointer">
      {/* Film frame design with perforations */}
      <div className="relative bg-black border-4 border-gray-700 rounded-lg overflow-hidden min-h-[400px]">
        {/* Film perforations */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gray-800 flex flex-col justify-evenly items-center z-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-3 h-3 bg-black rounded-full"></div>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gray-800 flex flex-col justify-evenly items-center z-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-3 h-3 bg-black rounded-full"></div>
          ))}
        </div>

        {/* Coming Soon Overlay */}
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20 group-hover:bg-black/70 transition-all duration-500">
          {/* Film countdown style circle */}
          <div className="relative mb-6">
            <div className="w-20 h-20 border-4 border-yellow-400 rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"></div>
              <span className="text-2xl font-bold text-yellow-400 z-10">?</span>
            </div>
          </div>
          
          {/* Coming Soon Badge */}
          <div className="relative">
            <div className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full border-2 border-yellow-400 shadow-lg">
              <span className="text-black font-bold text-lg tracking-wider">COMING SOON</span>
            </div>
            
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-md opacity-50 animate-pulse"></div>
          </div>
        </div>

        {/* Film grain effect */}
        <div className="absolute inset-0 opacity-10 z-30 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, transparent 50%, rgba(255,255,255,0.01) 50.1%),
                           radial-gradient(circle at 80% 20%, transparent 50%, rgba(255,255,255,0.01) 50.1%),
                           radial-gradient(circle at 40% 40%, transparent 50%, rgba(255,255,255,0.01) 50.1%)`,
          animation: 'filmGrain 8s steps(10) infinite'
        }}>
        </div>

        {/* Frame number */}
        <div className="absolute bottom-2 right-8 text-gray-500 font-mono text-sm z-20">
          {String(event.id).padStart(2, '0')}
        </div>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-purple-900/30" />
      
      {/* Animated film strip background */}
      <div 
        ref={filmStripRef}
        className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex justify-center items-center opacity-20"
      >
        <div className="flex space-x-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-black rounded-full flex-shrink-0" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
            PRE-EVENT ACTIVITIES
          </h1>
          
          <div className="inline-block mb-8">
            <div className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full border border-yellow-500/30">
              <Play className="text-yellow-400" size={20} />
              <span className="text-yellow-400 font-semibold tracking-wider">COMING SOON</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Exciting pre-event activities are being planned to prepare you for the ultimate hackathon experience. 
            Stay tuned for workshops, tech talks, and networking sessions!
          </p>
        </div>

        {/* Preview Events Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              EVENT PREVIEWS
            </span>
          </h2>
          
          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {previewEvents.map((event) => (
              <ComingSoonEventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
        
        {/* Stay Updated */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-900/40 to-black/40 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              These are preview concepts of what we're planning. The final event details, timings, and speakers will be announced soon!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://makemypass.com/event/cinehack-ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                <span>Register for CineHack.ai</span>
                <ChevronRight size={16} />
              </a>
              <button className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gray-600 rounded-lg text-gray-300 font-semibold hover:border-purple-500 hover:text-purple-400 transition-colors duration-300">
                <span>Follow for Updates</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PreEventsPage;
