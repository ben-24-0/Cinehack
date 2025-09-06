import React, { useState, useEffect } from 'react';
import {
  Download,
} from "lucide-react";

const timelineData = [
  {
    id: 1,
    stage: "#1",
    title: "Registrations Open",
    description: "The registration for the event is open for a month.",
    date: "From August 22, 2025 till September 22, 2025",
    color: "#3b82f6",
    icon: "📝",
    status: "active" // Updated status to match the new timeline
  },
  {
    id: 2,
    stage: "#2", 
    title: "Shortlisting and Second Round Registration",
    description: "The teams are shortlisted based on their ideas and the selected teams are contacted to rely further procedures.",
    date: "September 22, 2025 - September 25, 2025",
    color: "#8b5cf6",
    icon: "🚀",
    status: "upcoming"
  },
  {
    id: 3,
    stage: "#3",
    title: "Orientation", 
    description: "Orientation and doubt clarification session for selected teams.",
    date: "September 25, 2025 - October 1, 2025",
    color: "#06b6d4",
    icon: "📤",
    status: "upcoming"
  },
  {
    id: 4,
    stage: "#4",
    title: "Arrival of Participants in Campus",
    description: "Top teams selected for the next phase are to arrive on Campus.",
    date: "October 3, 2025, 4:00 PM",
    color: "#10b981",
    icon: "🔍",
    status: "upcoming"
  },
  {
    id: 5,
    stage: "#5",
    title: "Hackathon Commences",
    description: "Guidelines and resources, as well as mentoring for selected teams.",
    date: "October 4, 2025",
    color: "#f59e0b",
    icon: "📋",
    status: "upcoming"
  },
  {
    id: 6,
    stage: "#6",
    title: "Hackathon Showdown",
    description: "48 Hour Hackathon Ends",
    date: "October 6, 2025",
    color: "#ef4444",
    icon: "⚡",
    status: "upcoming"
  }
];

const DownloadBrochure = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './cinehack-brochure.pdf'; // Path to your actual file in src
    link.download = 'cinehack-brochure.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
          DOWNLOAD OUR DETAILED BROCHURE
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          Get comprehensive information about CineHack.ai, including detailed schedules, 
          prize breakdowns, accommodation details, and everything you need to know.
        </p>

        <div className="relative group inline-block">
          {/* Animated background glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
          
          {/* Download button */}
          <button
            onClick={handleDownload}
            className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:from-blue-500 hover:via-purple-500 hover:to-red-500 text-white font-bold py-6 px-12 rounded-2xl text-xl md:text-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-4 mx-auto group-hover:shadow-purple-500/50"
          >
            <Download className="w-8 h-8 transform group-hover:translate-y-1 transition-transform duration-300" />
            <span className="group-hover:text-yellow-300 transition-colors duration-300">
              DOWNLOAD BROCHURE
            </span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping group-hover:bg-yellow-300"></div>
          </button>
        </div>

        <p className="text-gray-400 mt-6 text-sm">
          PDF Format • Comprehensive Details • Updated Information
        </p>
      </div>
    </div>
  );
};

export default function ProfessionalTimeline() {
  const [visibleStages, setVisibleStages] = useState(new Set());
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stageId = parseInt(entry.target.dataset.stageId);
            setVisibleStages(prev => new Set([...prev, stageId]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const stages = document.querySelectorAll('[data-stage-id]');
    stages.forEach(stage => observer.observe(stage));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage(prev => (prev + 1) % timelineData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const hexToRgba = (hex, alpha = 0.1) => {
    const h = hex.replace("#", "");
    const bigint = parseInt(
      h.length === 3
        ? h.split("").map((c) => c + c).join("")
        : h,
      16
    );
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <>
      <div id="timeline" className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-gray-900/30 to-black"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Timeline
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              A structured progression through each phase of the competition
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            
            {/* Central Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-teal-500/50 transform -translate-x-0.5 shadow-sm shadow-blue-500/20"></div>

            {/* Timeline Stages */}
            <div className="space-y-16 md:space-y-24">
              {timelineData.map((stage, index) => {
                const isLeft = index % 2 === 0;
                const isVisible = visibleStages.has(stage.id);
                const isActive = currentStage === index;
                
                return (
                  <div
                    key={stage.id}
                    data-stage-id={stage.id}
                    className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-20' : 'md:pl-20'}`}>
                      <div 
                        className={`relative p-8 backdrop-blur-md border transition-all duration-700 hover:scale-[1.02] ${
                          isActive ? 'shadow-2xl scale-[1.02]' : 'shadow-lg'
                        }`}
                        style={{
                          background: `linear-gradient(135deg, ${hexToRgba(stage.color, 0.45)}, rgba(0, 0, 0, 0.4))`,
                          borderColor: `${stage.color}40`,
                          boxShadow: isActive ? `0 20px 40px ${stage.color}20` : `0 10px 25px rgba(0,0,0,0.2)`
                        }}
                      >
                        
                        {/* Stage Number */}
                        <div className="flex items-center justify-between mb-6">
                          <div 
                            className="text-6xl font-medium opacity-100"
                            style={{ color: stage.color }}
                          >
                            {stage.stage}
                          </div>
                          
                          {/* Status Indicator */}
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${
                              stage.status === 'completed' ? 'bg-blue-400' :
                              stage.status === 'active' ? 'bg-green-400 animate-pulse' :
                              stage.status === 'upcoming' ? 'bg-yellow-400' :
                              'bg-gray-500'
                            }`}></div>
                            <span className={`text-xs font-medium ${
                              stage.status === 'completed' ? 'text-blue-400' :
                              stage.status === 'active' ? 'text-green-400' :
                              stage.status === 'upcoming' ? 'text-yellow-400' :
                              'text-gray-500'
                            }`}>
                              {stage.status.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        {/* Date */}
                        <div className="text-lg font-medium mb-4 opacity-90" style={{ color: stage.color }}>
                          {stage.date}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                          {stage.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed font-light">
                          {stage.description}
                        </p>

                        {/* Subtle Progress Indicator */}
                        <div className="mt-8">
                          <div className="w-full h-px bg-white/10">
                            <div 
                              className="h-full transition-all duration-1500 ease-out"
                              style={{ 
                                width: isVisible ? '100%' : '0%',
                                background: `linear-gradient(90deg, ${stage.color}80, ${stage.color}20)`,
                                boxShadow: `0 0 4px ${stage.color}40`
                              }}
                            ></div>
                          </div>
                        </div>
                        
                      </div>
                    </div>

                    {/* Central Icon Circle */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                      <div 
                        className={`w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-500 z-10 ${
                          isActive ? 'scale-110' : 'scale-100'
                        }`}
                        style={{
                          background: `linear-gradient(135deg, ${hexToRgba(stage.color, 0.1)}, rgba(0, 0, 0, 0.6))`,
                          borderColor: `${stage.color}60`,
                          boxShadow: isActive ? `0 0 30px ${stage.color}30` : `0 0 15px ${stage.color}20`
                        }}
                      >
                        <span className="text-2xl filter grayscale">
                          {stage.icon}
                        </span>
                        
                        {/* Subtle pulse effect for active stage */}
                        {isActive && (
                          <div 
                            className="absolute inset-0 rounded-full animate-pulse"
                            style={{ 
                              background: `radial-gradient(circle, ${stage.color}10, transparent 70%)`,
                              transform: 'scale(1.5)'
                            }}
                          ></div>
                        )}
                      </div>
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden mb-6">
                      <div 
                        className="w-12 h-12 rounded backdrop-blur-md border flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(135deg, ${hexToRgba(stage.color, 0.1)}, rgba(0, 0, 0, 0.6))`,
                          borderColor: `${stage.color}40`
                        }}
                      >
                        <span className="text-xl filter grayscale">
                          {stage.icon}
                        </span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-24">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded border border-white/10 text-white font-light hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <a
                    href="https://makemypass.com/event/cinehack-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                  >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span>Ready to participate?</span></a>
            </div>
            <p className="text-gray-500 mt-4 text-sm font-light">Join the future of intelligent systems development</p>
          </div>

        </div>
      </div>
      <DownloadBrochure />
    </>
  );
}