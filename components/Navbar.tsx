"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Rooms",
    href: "/rooms",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-3 rounded-lg   mt-4 mx-auto md:gap-4">
      <div className=" flex flex-col justify-center items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={100} height={100} className="w-14 h-14 md:w-20 md:h-20" />
        <h1 className="hidden lg:block text-lg font-medium tracking-tighter text-red-700">
          Kingsukh Guest House
        </h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-3 lg:gap-12">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-red-600 hover:border-b-2 hover:border-red-600 transition-all duration-200 font-medium px-2 py-1 rounded"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block">
        <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow hover:bg-red-700 transition-colors duration-200 font-semibold">
          Book Now
        </button>
      </div>
      <div className="md:hidden z-30">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 transition-opacity duration-300 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-red-600 z-30 transform transition-transform duration-300 md:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-white text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X />
          </button>
        </div>
        <ul className="flex flex-col px-6 mt-6">
          {navItems.map((item) => (
            <li className="text-lg text-white" key={item.label}>
              <Link
                href={item.href}
                className="block py-2 px-2 rounded hover:bg-white hover:text-red-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-6 mt-8">
          <button className="w-full bg-white text-red-600 px-2 py-2 rounded-lg shadow hover:bg-red-100 transition-colors duration-200 font-semibold">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
