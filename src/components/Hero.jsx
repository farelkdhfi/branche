import React from 'react'
import Img from '../assets/heroImg4.png'

const Hero = () => {
  return (
    <section className='bg-black flex flex-col justify-center items-center h-screen relative'>
            <h1 className='lg:text-[22vw] z-10 lg:z-0 text-white text-5xl font-thin font-script'>CATHARSIS</h1>
            <img src={Img} alt="" className='absolute bottom-0 h-[90vh] w-auto lg:h-[95vh]' />
            <p className='text-2xl text-white mt-5 z-10'>EMPIRE</p>
    </section>
  )
}

export default Hero