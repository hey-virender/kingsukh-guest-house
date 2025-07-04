import Image from "next/image";
import React from "react";
import SectionHeading from "./SectionHeading";
import { ClockFading, Map, Sparkle, Utensils, Wifi, BedDouble, Car, Coffee, ShieldCheck, Users, ConciergeBell, Leaf } from "lucide-react";

const colorClassMap = {
  red: {
    bg: "bg-red-100",
    icon: "text-red-700",
  },
  amber: {
    bg: "bg-amber-100",
    icon: "text-amber-700",
  },
  green: {
    bg: "bg-green-100",
    icon: "text-green-700",
  },
  yellow: {
    bg: "bg-yellow-100",
    icon: "text-yellow-700",
  },
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-700",
  },
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-700",
  },
  pink: {
    bg: "bg-pink-100",
    icon: "text-pink-700",
  },
  teal: {
    bg: "bg-teal-100",
    icon: "text-teal-700",
  },
} as const;

type ServiceColor = keyof typeof colorClassMap;

interface Service {
  name: string;
  icon: React.ReactElement;
  color: ServiceColor;
}

const services: Service[] = [
  { name: "High Class Security", icon: <ShieldCheck />, color: "red" },
  { name: "24 Hours Room Service", icon: <ClockFading />, color: "amber" },
  { name: "Restaurant", icon: <Utensils />, color: "green" },
  { name: "Tourist Guide Support", icon: <Map />, color: "yellow" },
  { name: "Free Wi-Fi", icon: <Wifi />, color: "blue" },
  { name: "Luxury Bedding", icon: <BedDouble />, color: "purple" },
  { name: "Private Parking", icon: <Car />, color: "teal" },
  { name: "Complimentary Breakfast", icon: <Coffee />, color: "amber" },
  { name: "Family Friendly", icon: <Users />, color: "pink" },
  { name: "Concierge Service", icon: <ConciergeBell />, color: "green" },
  { name: "Eco-Friendly", icon: <Leaf />, color: "teal" },
  { name: "Sparkling Clean", icon: <Sparkle />, color: "blue" },
];

// More varied positions for floating service blocks
const floatingPositions = [
  "left-0 top-8 md:left-[-40px] md:top-8",
  "right-0 top-8 md:right-[-40px] md:top-20",
  "left-0 bottom-8 md:left-[-40px] md:bottom-20",
  "right-0 bottom-8 md:right-[-40px] md:bottom-8",
  "top-1/2 left-0 md:left-[-40px] -translate-y-1/2",
  "top-1/4 left-8 md:left-0",
  "bottom-1/4 right-8 md:right-0",
  "top-1/3 right-0 md:right-[-40px]",
  "bottom-1/3 left-0 md:left-[-40px]",
  "top-12 left-1/2 -translate-x-1/2",
  "bottom-12 left-1/2 -translate-x-1/2",
  "top-1/2 right-0 md:right-[-40px] -translate-y-1/2",
];

// Shuffle function
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Services = () => {
  // Shuffle positions for each render
  const shuffledPositions = shuffleArray(floatingPositions);
  return (
    <section id="services" className="w-full min-h-[70vh] flex flex-col md:items-center lg:flex-row bg-[#fdf6f2] p-4 gap-12 relative overflow-hidden mt-32">
      {/* Left: Heading */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
        <SectionHeading
          title={"Our Services"}
          subtitle="Enjoy a range of amenities and personalized services."
          className="items-center lg:items-start"
          
          
        />
      </div>
      {/* Right: Floating Service Blocks and Image */}
      <div className="flex-1 flex items-center justify-center relative min-h-[400px] md:min-h-[600px] text-gray-400">
        {services.map((service, idx) => {
          const color = colorClassMap[service.color];
          const pos = shuffledPositions[idx % shuffledPositions.length];
          return (
            <div
              key={service.name}
              className={`absolute ${pos} rounded-lg shadow px-4 py-3 z-20 max-w-[180px] flex items-center gap-2 text-xs ${color.bg}`}
              style={{ transition: 'all 0.5s' }}
            >
              <span className={`text-xl ${color.icon}`}>{service.icon}</span>
              <span className="font-semibold text-gray-700">{service.name}</span>
            </div>
          );
        })}
        {/* Main Image */}
        <div className="relative w-64 h-80 md:w-96 md:h-[28rem] rounded-lg overflow-hidden shadow-xl z-10">
          <Image src="/service.jpg" alt="Services" fill className="object-cover" quality={100} priority />
        </div>
      </div>
    </section>
  );
};

export default Services;
