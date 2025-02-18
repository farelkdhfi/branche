import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/luxqo.png'

const Contact = () => {
  return (
    <section className='h-screen gap-y-3 flex flex-col justify-center items-center'>
      <img src={logo} alt="" className='w-28' />
      <p className='font-bold text-xl'>Luxqo.drei</p>
      <a className='bg-black text-white py-3 px-4 rounded-full flex justify-center items-center gap-1' href="https://api.whatsapp.com/send?phone=6289506895607">Whatsapp <FaWhatsapp /></a>
    </section>
  )
}

export default Contact