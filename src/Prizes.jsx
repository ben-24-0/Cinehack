import React from "react";
import {
  Star,
  Users,
  Trophy,
  TShirt,
  ForkKnife,
  Bed,
  MusicNotes,
  Sparkle,
} from "@phosphor-icons/react";

const WhyJoinCard = ({ bgColor, innerBg, Icon, text }) => (
  <div className="text-center group cursor-pointer">
    <div className="mb-8 flex justify-center">
      <div
        className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center group-hover:animate-spinY transition-transform duration-1000 transform-gpu`}
      >
        <div
          className={`w-16 h-16 ${innerBg} rounded-full flex items-center justify-center shadow-inner`}
        >
          <Icon size={32} weight="fill" className="text-white" />
        </div>
      </div>
    </div>
    <p className="text-lg md:text-xl leading-relaxed max-w-sm mx-auto">{text}</p>
  </div>
);

const PrizesAndOpportunities = () => {
  const cards = [
    {
      bgColor: "bg-purple-400",
      innerBg: "bg-purple-600",
      Icon: Star,
      text: "Shape the future of filmmaking with your ideas.",
    },
    {
      bgColor: "bg-purple-300",
      innerBg: "bg-purple-500",
      Icon: Users,
      text: "Connect with industry leaders and fellow innovators.",
    },
    {
      bgColor: "bg-purple-500",
      innerBg: "bg-purple-600",
      Icon: Trophy,
      text: "Compete for substantial cash prizes and recognition.",
    },
    {
      bgColor: "bg-purple-400",
      innerBg: "bg-purple-700",
      Icon: TShirt,
      text: "Exclusive hackathon goodies – T-shirts, stickers, and merchandise.",
    },
    {
      bgColor: "bg-purple-300",
      innerBg: "bg-purple-500",
      Icon: ForkKnife,
      text: "Delicious food for all 3 days included with your registration.",
    },
    {
      bgColor: "bg-purple-500",
      innerBg: "bg-purple-600",
      Icon: Bed,
      text: "Convenient accommodation for all participants.",
    },
    {
      bgColor: "bg-purple-400",
      innerBg: "bg-purple-600",
      Icon: MusicNotes,
      text: "Free cultural events pass – experience campus life beyond hacking.",
    },
    {
      bgColor: "bg-purple-300",
      innerBg: "bg-purple-500",
      Icon: Sparkle,
      text: "Access to electrifying pro shows and pre-events of CineHack.ai.",
    },
  ];

  return (
    <div
      id="timeline"
      className="bg-black text-white py-16 px-8 min-h-14 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-left">
          WHY JOIN ?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
  {cards.map((card, i) => (
    <WhyJoinCard key={i} {...card} />
  ))}
</div>
      </div>

      {/* Custom spin animation for Y-axis */}
      <style>{`
        @keyframes spinY {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
        .group:hover .group-hover\\:animate-spinY {
          animation: spinY 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PrizesAndOpportunities;
