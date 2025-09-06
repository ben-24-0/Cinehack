import React, { useEffect, useRef, useState } from 'react';
import { Mic, Code, Lightbulb, Film, Star, ChevronRight, Play, Users, X } from 'lucide-react';

const PreEventsPage = () => {
  const filmStripRef = useRef(null);
  const [showGuidelinesModal, setShowGuidelinesModal] = useState(false);

  // Pre-event activities with E-Pookalam Contest as first event
  const previewEvents = [
    { 
      id: 1, 
      icon: <Star size={32} />, 
      color: "#f59e0b",
      title: "E-Pookalam Contest",
      description: "Create AI-generated digital Pookalam designs using tools like DALL·E, MidJourney, or Stable Diffusion",
      isActive: true,
      registrationUrl: "https://cinehackai.in",
      deadline: "10th September 2025, 11:59 PM",
      eligibility: "Open to all college students"
    },
    { id: 2, icon: <Mic size={32} />, color: "#8b5cf6" },
    { id: 3, icon: <Users size={32} />, color: "#10b981" },
    { id: 4, icon: <Code size={32} />, color: "#ef4444" },
    { id: 5, icon: <Lightbulb size={32} />, color: "#f59e0b" },
    { id: 6, icon: <Film size={32} />, color: "#3b82f6" }
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Animation effects
  useEffect(() => {
    const animateFilmStrip = () => {
      if (filmStripRef.current) {
        filmStripRef.current.style.transform = 'translateX(-20px)';
        setTimeout(() => {
          if (filmStripRef.current) {
            filmStripRef.current.style.transform = 'translateX(0px)';
          }
        }, 3000);
      }
    };

    const interval = setInterval(animateFilmStrip, 6000);
    animateFilmStrip(); // Run immediately

    return () => clearInterval(interval);
  }, []);

  // Guidelines Modal Component
  const GuidelinesModal = () => {
    if (!showGuidelinesModal) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="sticky top-0 bg-gradient-to-r from-red-600 to-orange-500 p-6 rounded-t-2xl border-b border-yellow-500/30">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Star className="mr-3" size={28} />
                  E-Pookalam Contest Guidelines
                </h2>
                <p className="text-yellow-200 mt-1">Read carefully before submitting your entry</p>
              </div>
              <button 
                onClick={() => setShowGuidelinesModal(false)}
                className="text-white hover:text-yellow-300 transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
                    <Star className="mr-2" size={20} />
                    Theme & Tools
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Create a digital Pookalam using AI tools such as:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li>• DALL·E (OpenAI)</li>
                    <li>• MidJourney</li>
                    <li>• Stable Diffusion</li>
                    <li>• Canva AI</li>
                    <li>• Or any other AI art generator</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/20 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
                    <Code className="mr-2" size={20} />
                    Prompt Submission
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    You <strong>must submit the exact prompt</strong> used to generate your artwork along with the image in the Google Form. This is mandatory for evaluation.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
                    <Lightbulb className="mr-2" size={20} />
                    Originality Required
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Only <strong>original prompts and generated images</strong> will be accepted. Copying or reusing existing AI art/templates will lead to <span className="text-red-400 font-semibold">disqualification</span>.
                  </p>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
                    <Film className="mr-2" size={20} />
                    Format Requirements
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Submit your design in:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li>• <strong>JPEG</strong> or <strong>PNG</strong> or <strong>JPG</strong> format</li>
                    <li>• clear visibility</li>
                    
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
                    <Users className="mr-2" size={20} />
                    Eligibility
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Open to <strong>all college students</strong>. Show your creativity and celebrate Kerala's rich cultural heritage through AI art!
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 border-2 border-red-500/40 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-red-400 mb-3 flex items-center">
                    ⏰ Important Deadline
                  </h3>
                  <div className="text-center">
                    <p className="text-white font-bold text-2xl">10th September 2025</p>
                    <p className="text-red-200 text-lg">11:59 PM</p>
                    <p className="text-red-300 text-sm mt-2">Don't miss out!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Steps */}
            <div className="bg-gradient-to-br from-gray-800/40 to-black/40 border border-gray-600/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">How to Submit</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400 mb-2">1</div>
                  <p className="text-white text-sm">Create your AI Pookalam using any AI tool</p>
                </div>
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400 mb-2">2</div>
                  <p className="text-white text-sm">Save your exact prompt and image (JPEG/PNG)</p>
                </div>
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400 mb-2">3</div>
                  <p className="text-white text-sm">Submit both through the Google Form</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSd60OgkItSWCTP_MfDxiapTLPWAAL4MPaAHz6IA9gqKsk88IQ/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-lg hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg"
              >
                <span>Submit Your Entry</span>
                <ChevronRight size={20} className="ml-2" />
              </a>
              <button 
                onClick={() => setShowGuidelinesModal(false)}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-500 text-gray-300 font-bold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300"
              >
                Close Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const EventCard = ({ event }) => {
    if (event.isActive) {
      // E-Pookalam Contest Card
      return (
        <div className="relative group cursor-pointer">
          <div className="relative bg-gradient-to-br from-red-600 to-orange-500 border-4 border-yellow-400 rounded-lg overflow-hidden min-h-[500px] hover:scale-105 transition-all duration-300">
            {/* Pookalam-inspired decorative elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-300 rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-12 h-12 bg-green-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-8 left-8 w-14 h-14 bg-orange-300 rounded-full animate-pulse delay-700"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col">
              {/* Badge */}
              <div className="inline-block mb-4">
                <div className="px-4 py-2 bg-yellow-400 text-black font-bold text-sm rounded-full">
                  PRE-EVENT #1 • AI CONTEST
                </div>
              </div>
              
              {/* Icon */}
              <div className="mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  {event.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {event.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/90 text-sm mb-4 flex-grow">
                {event.description}
              </p>

              {/* Key Guidelines */}
              <div className="bg-black/30 border border-white/20 backdrop-blur-sm rounded-lg p-4 mb-4 text-sm">
                <div className="text-yellow-300 font-bold mb-2 flex items-center">
                  <Lightbulb size={16} className="mr-2" />
                  Quick Guidelines:
                </div>
                <ul className="text-white space-y-1 text-sm">
                  <li>• Use AI tools (DALL·E, MidJourney, etc.)</li>
                  <li>• Submit original prompts only</li>
                  <li>• Format: JPEG/PNG</li>
                  <li>• {event.eligibility}</li>
                </ul>
              </div>

              {/* Deadline */}
              <div className="bg-yellow-400/20 border border-yellow-400/30 rounded-lg p-3 mb-4">
                <div className="text-yellow-200 font-semibold text-sm">⏰ Deadline</div>
                <div className="text-white text-sm font-bold">{event.deadline}</div>
              </div>
              
              {/* CTA Button */}
              <button 
                onClick={() => setShowGuidelinesModal(true)}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-yellow-100 transition-colors duration-300 group-hover:animate-bounce"
              >
                <span>View Guidelines & Submit</span>
                <ChevronRight size={16} className="ml-2" />
              </button>
              
              {/* Decorative border pattern */}
              <div className="absolute top-2 left-2 right-2 h-1 bg-gradient-to-r from-yellow-300 via-green-400 to-orange-300 rounded-full"></div>
              <div className="absolute bottom-2 left-2 right-2 h-1 bg-gradient-to-r from-orange-300 via-green-400 to-yellow-300 rounded-full"></div>
            </div>
          </div>
        </div>
      );
    }

    // Coming Soon Card for other events
    return (
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
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Guidelines Modal */}
      <GuidelinesModal />
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-purple-900/30" />
      
      {/* Animated film strip background */}
      <div 
        ref={filmStripRef}
        className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex justify-center items-center opacity-20 transition-transform duration-3000 ease-in-out"
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
              <span className="text-yellow-400 font-semibold tracking-wider">NOW LIVE</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Join our exciting pre-event activities starting with the E-Pookalam Contest! More workshops, 
            tech talks, and networking sessions are coming soon.
          </p>
        </div>

        {/* Preview Events Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              EVENT LINEUP
            </span>
          </h2>
          
          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {previewEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
        
        {/* Stay Updated */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-900/40 to-black/40 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              The E-Pookalam Contest is now live! Create your AI-generated digital Pookalam and submit by 10th September 2025. 
              More exciting pre-events will be announced soon!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://makemypass.com/event/cinehack-ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                <span>Register for CineHack.ai</span>
                <ChevronRight size={16} />
              </a>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PreEventsPage;