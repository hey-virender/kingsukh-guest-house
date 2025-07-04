import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Navbar from '@/components/Navbar'
import React from 'react'
import LivingRooms from '@/components/LivingRooms'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import ContactUs from '@/components/ContactUs'
import MapLocation from '@/components/MapLocation'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <LivingRooms />
      <Services />
      <Gallery />
      <ContactUs />
      <MapLocation/>
      <Footer/>
      
    </main>
  )
}

export default page