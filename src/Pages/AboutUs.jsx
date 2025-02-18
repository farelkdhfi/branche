import React from 'react'
import logo from '../assets/luxqo.png'

const AboutUs = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center'>
      <img src={logo} alt="" className='w-28' />
        <p className='text-center'><strong>Three,</strong> founded in 2023</p>
    </section>
  )
}

export default AboutUs