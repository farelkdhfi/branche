import React from 'react'
import Img from '../assets/HeroImage.png'

const Hero = () => {
  return (
    <section className='bg-black flex flex-col justify-center items-center min-h-screen relative'>
            <h1 className='lg:text-[22vw] z-10 lg:z-0 text-white text-5xl font-thin font-script'>CATHARSIS</h1>
            <img src={Img} alt="" className='absolute bottom-0 h-[85vh] lg:h-[85vh]' />
            <p className='text-2xl text-white mt-5 z-10'>EMPIRE</p>
    </section>
  )
}

export default Hero