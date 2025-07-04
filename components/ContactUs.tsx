import React from "react";
import SectionHeading from "./SectionHeading";
import { Facebook, Instagram, Linkedin, MailCheck, MapPin, PhoneCall, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section id="contact" className="p-4">
      {/* Section Heading OUTSIDE the orange background */}
      <div className="w-full max-w-5xl  mb-8 mt-12 flex items-start md:items-center lg:items-start justify-center lg:justify-start">
        <SectionHeading title="Contact Us" subtitle="We are here to help you"  />
      </div>
      {/* Orange background section for contact info and form */}
      <div className="w-full min-h-[60vh] bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 py-12 px-4 md:px-8 flex flex-col items-center rounded-lg shadow-lg">
        <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-stretch justify-center gap-8">
          {/* Left: Contact Info */}
          <div className="flex-1 flex flex-col justify-center items-start text-white max-w-lg w-full bg-transparent">
            <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
            <div className="flex flex-col gap-4 text-base text-orange-50/90">
              <p className="flex items-center gap-3">
                <MapPin className="text-orange-200" />
                <span>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</span>
              </p>
              <p className="flex items-center gap-3">
                <MailCheck className="text-orange-200" /> <span>kkghosh0099@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                <PhoneCall className="text-orange-200" /> <span>+91 9007062180</span>
              </p>
            </div>
            <div className="flex items-center gap-4 text-2xl mt-4">
              <a href="#" className="hover:text-orange-300"><Facebook/></a>
              <a href="#" className="hover:text-orange-300"><Instagram/></a>
              <a href="#" className="hover:text-orange-300"><Twitter/></a>
              <a href="#" className="hover:text-orange-300"><Linkedin/></a>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="flex-1 w-full max-w-xl flex items-center justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
