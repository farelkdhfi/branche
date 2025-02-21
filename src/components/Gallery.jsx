import React from 'react'
import img1 from '../assets/gal1.png'
import img2 from '../assets/gal2.png'
import img3 from '../assets/gal3.png'
import img4 from '../assets/gal4.png'

const Gallery = () => {
  return (
    <section className='min-h-screen bg-[#141414] flex justify-center items-center w-full'>
        <div className='flex flex-wrap justify-center items-center mt-[20vh]'>
            <img src={img1} alt="" className='aspect-square'/>
            <img src={img2} alt="" className='aspect-square'/>
            <img src={img3} alt="" className='aspect-square'/>
            <img src={img4} alt="" className='aspect-square'/>
        </div>
    </section>
  )
}

export default Gallery