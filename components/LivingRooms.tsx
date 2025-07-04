import React from 'react'
import ChromaGrid from './reactbits/ChromaGrid';
import SectionHeading from './SectionHeading';
const items = [
  {
    image: "/small.jpg",
    title: "Cozy Haven Room",
    subtitle: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
    handle: "Rs 1000/night",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: ""
  },
  {
    image: "/large.jpg",
    title: "Serenity Suite",
    subtitle: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
    handle: " Rs. 1500/night",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: ""
  }
];

const LivingRooms = () => {
  return (
    <section id="living-rooms" className="flex flex-col-reverse lg:flex-row justify-around items-center gap-1 mt-32 p-4">

  <div className="w-fit bg-transparent">
  <ChromaGrid 
        items={items}
        radius={500}
        damping={0.45}
        fadeOut={0.6}
        className="justify-start gap-3"
        ease="power3.out"
      />
  </div>

      
       <SectionHeading title="Living Rooms" subtitle="The Most Memorable Rest Time Starts Here." className="lg:text-right"  />
   </section>
  )
}

export default LivingRooms