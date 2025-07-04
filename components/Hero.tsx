import Image from "next/image";
import React from "react";
import SectionHeading from "./SectionHeading";

const Hero = () => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col-reverse items-center justify-around  lg:flex-row  p-4 md:p-12 gap-8 relative overflow-hidden mt-10">
      {/* Left: Floating Texts and Image */}
      <div className="flex-1 flex items-center justify-center relative min-h-[400px] md:min-h-[600px] text-gray-400">
        {/* Floating Welcome Text */}
        <div className="hidden sm:block absolute -left-28 -top-12  md:top-12 md:left-[-40px] rounded-lg shadow px-4 py-2 z-20 max-w-[180px] text-xs md:text-sm">
          Welcome to Kingsukh Guest House, your home away from home. Enjoy comfort, convenience, and a warm atmosphere in the heart of the city.
        </div>
        
        <div className="hidden sm:block absolute -left-28 bottom-4  md:bottom-12 md:left-[-46px] rounded-lg shadow px-4 py-2 z-10 max-w-[160px] text-xs md:text-sm">
          <div className="mb-1 font-semibold text-gray-500 text-sm md:text-base">Nearby:</div>
          <ul className="space-y-1">
            <li>Garh Panchkot</li>
            <li>Damodar View Point</li>
            <li>Ramchandrapur Boro Pahar</li>
            <li>Local Market</li>
          </ul>
        </div>
        {/* Floating Amenities List */}
        <div className="hidden sm:block absolute -right-35 top-1/2 md:right-[-40px] md:top-1/3 rounded-lg shadow px-4 py-2 z-20 max-w-[160px] text-sm  transform -translate-y-1/2 text-xs md:text-sm">
          <div className="mb-1 font-semibold text-gray-500 text-sm md:text-base">Amenities:</div>
          <ul className="space-y-1">
            <li>Free Wi-Fi</li>
            <li>Breakfast Included</li>
            <li>24/7 Reception</li>
            <li>Private Parking</li>
          </ul>
        </div>
        {/* Main Image */}
        <div className="relative w-64 h-80 md:w-96 md:h-[28rem] rounded-lg overflow-hidden shadow-xl z-10">
          <Image src="/ayodhya.webp" alt="Guest House" fill className="object-cover" quality={100} priority />
        </div>
      </div>
      {/* Right: Large Heading */}
      <div className="flex-1 flex flex-col justify-center lg:justify-end items-center lg:items-end">
        <SectionHeading
          title="Experience
Comfort & Hospitality"
          subtitle="Relax, explore, and enjoy your stay at Kingsukh Guest House. Book your room today and discover the best of the city just steps away!"
          className="lg:text-right text-center lg:text-right"
        />
      </div>
    </section>
  );
};

export default Hero;
