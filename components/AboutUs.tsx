"use client";
import React from "react";
import ProfileCard from "./reactbits/ProfileCard";
import { MapIcon, PhoneIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

const AboutUs = () => {
  return (
    <section id="about-us" className="mt-10 p-4">
      
      <div className="flex flex-col lg:flex-row justify-around items-center gap-10">
      <div className="flex flex-col items-center lg:items-start gap-4 w-full">
          <SectionHeading title="About Us" subtitle="The Best Holidays Start Here!" className="md:items-start" />
          <p className="hidden lg:block text-xs text-gray-500 leading-relaxed tracking-tight w-2/3">Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature&apos;s beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
          <p className="text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <MapIcon className="w-7 h-7 text-orange-600" />
              <span>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</span>
            </span>
            <span className="flex items-center gap-2 mt-2">
              <PhoneIcon className="w-7 h-7 text-orange-600" />
              <span>+91 9007062180</span>
            </span>
          </p>
        </div>
        <div>
          <ProfileCard
            name="Kingsukh"
            title="Guest House"
            contactText="About Us"
            avatarUrl="/out.jpg"
            enableTilt={true}
            handle="Kingsukh"
            status="Open 24/7"
            miniAvatarUrl="/out.jpg"
            showBehindGradient={false}
          />
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;
