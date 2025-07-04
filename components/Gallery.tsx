import React from "react";
import SectionHeading from "./SectionHeading";
import Masonry from "./reactbits/Masonry";

const items = [
  {
    id: "1",
    img: "/ayodhya.webp",
    height: 400,
    url:"#"
  },
  {
    id: "2",
    img: "/baranti.webp",
    height: 500,
    url:"#"
  },
  {
    id: "3",
    img: "/flower.jpg",
    height: 300,
    url:"#"
  },
  {
    id: "4",
    img: "/palash.webp",
    height: 500,
    url:"#"
  },
  {
    id: "5",
    img: "/header.jpg",
    height: 400,
    url:"#"
  },
  {
    id: "6",
    img: "/large.jpg",
    height: 300,
    url:"#"
  },
  {
    id: "7",
    img: "/mithonDam.webp",
    height: 450,
    url:"#"
  },
  {
    id: "8",
    img: "/recep.jpg",
    height: 400,
    url:"#"
  },
  {
    id: "9",
    img: "/small.jpg",
    height: 300,
    url:"#"
  },
  {
    id: "10",
    img: "/room1.jpg",
    height: 300,
    url:"#"
  },
  {
    id: "11",
    img: "/service.jpg",
    height: 300,
    url:"#"
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative flex flex-col-reverse lg:flex-row justify-center lg:justify-around items-center lg:items-center h-[60vh] md:h-[70vh] mt-32 p-4 lg:gap-12">
      
      <div className="w-full mx-auto md:h-full overflow-scroll hide-scrollbar ">
        <Masonry items={items} />
      </div>
      <div className="flex items-center justify-center">
        <SectionHeading title="Gallery" subtitle="Our Gallery" className=""  />
      </div>
    </section>
  );
};
export default Gallery;
