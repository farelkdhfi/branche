import React from 'react';

import Img from '../assets/lightt.png'
import Imgbg from '../assets/bg.png'
import Carousel from './Carousel';
import Carousel2 from './Carousel2';

export default function Hero() {

  return (
    <section className="bg-black h-screen flex flex-col justify-center items-center relative select-none">
      <img src={Imgbg} alt="" className="w-screen h-screen object-cover absolute opacity-3" />
      <div className='relative w-[55rem] h-160 flex justify-center items-center flex-col'>
        <h1
          className="text-9xl italic font-black text-transparent bg-gradient-to-r from-white/20 to-white z-50 bg-clip-text smooth-gradient-shine"
        >
          BRANCHÉ
        </h1>
        <p className="text-white/50 font-script">Clothing Brand</p>
        <img src={Img} alt="" className="h-90 absolute top-0 z-50 right-0" />
        <Carousel />
        <Carousel2 />
      </div>
      <style>{`
  .smooth-gradient-shine {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.8),
      rgba(200, 200, 200, 0.4),
      rgba(255, 255, 255, 0.9),
      rgba(180, 180, 180, 0.3),
      rgba(255, 255, 255, 0.8)
    );
    background-size: 400%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: smooth-shine 20s ease-in-out infinite;
  }

  @keyframes smooth-shine {
    0% {
      background-position: 200% 0;
    }
    50% {
      background-position: -100% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`}</style>

     
    </section>
  )
}