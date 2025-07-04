import React from "react";
import SectionHeading from "./SectionHeading";

const MapLocation = () => {
  return (
    <section id="map-location" className="w-full flex flex-col-reverse items-center lg:flex-row lg:items-center justify-center py-12 p-4 gap-8 bg-gradient-to-br from-orange-50 via-white to-orange-100 mt-32">
      {/* Map on left, Heading on right for large screens */}
      <div className="w-full md:w-2/3 max-w-3xl aspect-video rounded-xl overflow-hidden shadow-xl border border-orange-200 bg-white/70 backdrop-blur-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="w-full h-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center lg:justify-end">
        <SectionHeading
          title="Our Location"
          subtitle="See where to find Kingsukh Guest House on the map."
          className="items-center lg:items-start"
          titleClassName="tracking-tighter lg:tracking-normal"

        />
      </div>
    </section>
  );
};

export default MapLocation;
