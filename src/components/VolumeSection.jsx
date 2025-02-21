import React from 'react'
import Img from '../assets/imageSection1.png'
import BackgroundImg from '../assets/imgSection2.png'

const VolumeSection = () => {
  return (
    <section className='bg-[#141414] h-[80vh] relative flex justify-center items-center px-20 overflow-hidden py-20'>
        <div className='flex flex-row justify-start items-center px-20 w-full'>
            <img src={BackgroundImg} alt="" className='absolute h-screen opacity-5 right-0' />
            <div className='w-1/2 text-white/50 z-30'>
                <h2 className='font-bold text-xl text-white'>Catharsis Empire</h2>
                <p className='text-sm max-w-xl text-pretty tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae dolor et deleniti quibusdam saepe harum cumque, quis aperiam commodi delectus magnam necessitatibus, quasi earum, excepturi quod expedita magni voluptatibus.</p>
            </div>
                <img src={Img} alt="" className='w-[70vw] absolute rotate-45 right-20 opacity-80'/>
        </div>
    </section>
  )
}

export default VolumeSection