import React from 'react'
import img1 from '../assets/gal1.png'
import img2 from '../assets/gal2.png'
import img3 from '../assets/gal3.png'
import img4 from '../assets/gal4.jpeg'
import img5 from '../assets/gal5.png'
import img6 from '../assets/gal6.png'
import img7 from '../assets/gal7.png'
import img8 from '../assets/gal8.png'
import img9 from '../assets/gal9.jpg'

const GalleryPage = () => {
  return (
    <section className='min-h-screen py-[15vh]'>
        <div className='flex-wrap flex justify-center items-center'>
            <img src={img1} alt="" className=' w-96 aspect-square'/>
            <img src={img2} alt="" className=' w-96 aspect-square' />
            <img src={img3} alt="" className=' w-96 aspect-square' />
            <img src={img4} alt="" className=' w-96 aspect-square' />
            <img src={img5} alt="" className=' w-96 aspect-square' />
            <img src={img6} alt="" className=' w-96 aspect-square' />
            <img src={img7} alt="" className=' w-96 aspect-square' />
            <img src={img8} alt="" className=' w-96 aspect-square' />
            <img src={img9} alt="" className=' w-96 aspect-square' />
        </div>
    </section>
  )
}

export default GalleryPage