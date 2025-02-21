import React from 'react'
import Img from '../assets/imageSection1.png'
import BackgroundImg from '../assets/imgSection2.png'

const VolumeSection = () => {
  return (
    <section className='bg-[#141414] h-[80vh] relative flex justify-center items-center overflow-hidden'>
        <div className='flex justify-start items-center lg:px-20 px-5 w-full'>
            <img src={BackgroundImg} alt="" className='absolute lg:h-screen h-[80vh] opacity-5 right-0' />
            <div className='lg:w-1/2 w-full text-white/50 z-30'>
                <h2 className='font-bold text-xl text-white'>Catharsis Empire</h2>
                <p className='text-sm text-pretty tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae dolor et deleniti quibusdam saepe harum cumque, quis aperiam commodi delectus magnam necessitatibus, quasi earum, excepturi quod expedita magni voluptatibus.</p>
            </div>
                <img src={Img} alt="" className='lg:w-[70vw] hidden lg:flex w-[200vw] absolute rotate-45 right-20 opacity-80'/>
        </div>
    </section>
  )
}

export default VolumeSection