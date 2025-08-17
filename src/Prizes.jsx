import React from "react";

const PrizesAndOpportunities = () => {
  return (
    <div
      id="timeline"
      className="bg-black text-white py-16 px-8 min-h-14 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold  mb-16 text-left">
          WHY JOIN ?
        </h2>
        {/* Header */}

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Card 1 */}
          <div className="text-center group cursor-pointer">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-red-400 rounded-full flex items-center justify-center group-hover:animate-spin transition-transform duration-1000 transform-gpu">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-inner">
                  <img src="./star.png" alt="star" />
                </div>
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed max-w-sm mx-auto">
              Top teams will receive Exciting Prizes such as
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center group cursor-pointer">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-orange-300 rounded-full flex items-center justify-center group-hover:animate-spin transition-transform duration-1000 transform-gpu">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-inner">
                  <img src="./star.png" alt="" />
                </div>
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed max-w-sm mx-auto">
              Special awards will be given to the best student team and the best
              women-led team
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center group cursor-pointer">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center group-hover:animate-spin transition-transform duration-1000 transform-gpu">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-inner">
                  <img src="./star.png" alt="" />
                </div>
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed max-w-sm mx-auto">
              Selected teams will get access to ...
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
        
        .group:hover .group-hover\\:animate-spin {
          animation: spin 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PrizesAndOpportunities;
