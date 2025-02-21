import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Footer = () => {
  const catharsisRef = useRef(null);
  const tokopediaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); // Looping animasi
    
    tl.to(catharsisRef.current, { opacity: 1, duration: 1 }) // Muncul
      .to(catharsisRef.current, { opacity: 0, duration: 1, delay: 1 }) // Menghilang
      .to(tokopediaRef.current, { opacity: 1, duration: 1 }) // Munculkan teks "Available on Tokopedia"
      .to(tokopediaRef.current, { opacity: 0, duration: 1, delay: 1 }); // Menghilang kembali untuk looping
  }, []);

  return (
    <section className='h-screen flex flex-col justify-center items-center bg-black relative'>
      <h1 ref={catharsisRef} className='absolute text-2xl lg:text-2xl text-white opacity-0'>CATHARSIS EMPIRE</h1>
      <p ref={tokopediaRef} className='absolute text-white font-thin mt-2 opacity-0'>Available on TokoPedia</p>
      <p className='absolute bottom-5 font-thin text-white text-sm'>Copyright &copy;2025. All rights reserved.</p>
    </section>
  );
};

export default Footer;
