import Image from "next/image";
import React from "react";
const quickLinks = [
  { label: "Browse Destinations", link: "#" },
  { label: "Special Offers & Packages", link: "#" },
  { label: "Room Types & Amenities", link: "#" },
  { label: "Customer Reviews & Ratings", link: "#" },
  { label: "Travel Tips & Guides", link: "#" },
];
const ourServices = [
  { label: "Concierge Assistance", link: "#" },
  { label: "Flexible Booking Options", link: "#" },
  { label: "Airport Transfers", link: "#" },
  { label: "Wellness & Recreation", link: "#" },
];
const socialLinks = [
  { image: "/facebook.png", link: "#" },
  { image: "/instagram.png", link: "#" },
  { image: "/youtube.png", link: "#" },
  { image: "/twitter.png", link: "#" },
];
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-orange-50 py-10 px-4 rounded-t-3xl shadow-2xl mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-3">
          <h2 className="text-2xl font-bold text-white mb-3">Kingsukh Guest House</h2>
          <p className="mt-2 text-orange-100 text-sm">
            Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
          </p>
        </div>
        <div className="p-3">
          <h2 className="text-xl font-bold text-white mb-3">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.link} className="hover:underline hover:text-orange-200 transition-colors duration-200">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3">
          <h2 className="text-xl font-bold text-white mb-3">Our Services</h2>
          <ul className="mt-2 space-y-2">
            {ourServices.map((service) => (
              <li key={service.label} className="text-orange-100">{service.label}</li>
            ))}
          </ul>
        </div>
        <div className="p-3">
          <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
          <p className="mt-2 text-orange-100 text-sm">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p className="mt-2 text-orange-100 text-sm">kkghosh0099@gmail.com</p>
          <p className="mt-2 text-orange-100 text-sm">+91 9007062180</p>
          <div className="flex items-center gap-4 mt-6">
            {socialLinks.map((link) => (
              <a href={link.link} key={link.image} className="hover:scale-110 transition-transform duration-200">
                <Image src={link.image} alt={link.image} width={28} height={28} className="rounded-full shadow" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-orange-100 text-xs mt-10 tracking-wide">Copyright © 2024 Kingsukh Guest House. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
