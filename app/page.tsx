import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
    </main>
  )
}

export default page