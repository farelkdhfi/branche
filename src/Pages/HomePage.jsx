import React from 'react'
import Hero from '../components/Hero'
import VolumeSection from '../components/VolumeSection'
import VolumeSection2 from '../components/VolumeSection2'
import VolumeSection3 from '../components/VolumeSection3'

const HomePage = () => {
  return (
    <section>
        <Hero />
        <VolumeSection />
        <VolumeSection2 />
        <VolumeSection3 />
    </section>
  )
}

export default HomePage