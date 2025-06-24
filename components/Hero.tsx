import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-96 md:h-[50vh] lg:h-screen w-full overflow-hidden flex items-center justify-center">
      <Image
        src="/ayodhya.webp"
        alt="hero"
        fill
        className="object-cover object-center"
        quality={100}
        priority
      />
      {/* Overlay for small screens, Card for large screens */}
      <div className="absolute bottom-4 md:top-1/2 md:-translate-y-1/2 md:left-0  flex items-center justify-center">
        <div className="w-full flex justify-center items-center h-full px-4">
          <div className="backdrop-blur-sm bg-white/10 hover:bg-white/40 z-30 md:backdrop-blur-lg md:shadow-xl rounded-2xl md:max-w-lg md:ml-12 md:items-start md:text-left flex flex-col items-center justify-center text-center gap-4 p-6 md:p-10 transition-all duration-500">
            <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-red-600 mb-2 md:mb-4">
              Simple - Unique - Friendly
            </span>
            <h1 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight md:leading-snug drop-shadow md:drop-shadow-none">
              Make Yourself At Home
              <br className="hidden md:block" />
              In Our <span className="text-red-600">Guest House.</span>
            </h1>
            <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow hover:bg-red-700 transition-colors duration-200 font-semibold">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
