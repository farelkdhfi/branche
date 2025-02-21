import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import volume1 from '../assets/volume3.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VolumeSection3 = () => {
    const garisRef = useRef(null);
    const garisRef2 = useRef(null);

    useEffect(() => {
        gsap.to(garisRef.current, {
            y: '200vh',
            duration: 2,
            repeat: -1,
            ease: 'linear',
            onRepeat: () => gsap.set(garisRef.current, { y: '-10vh' })
        });
    }, []);

    useEffect(() => {
        gsap.to(garisRef2.current, {
            y: '200vh',
            duration: 2,
            repeat: -1,
            delay:1,
            ease: 'linear',
            onRepeat: () => gsap.set(garisRef2.current, { y: '-10vh' })
        });
    }, []);

    return (
        <section className='lg:h-screen lg:relative px-5 pt-16 lg:pt-0 lg:px-20 flex flex-col lg:flex-row justify-center items-center lg:overflow-hidden gap-y-3 lg:gap-y-0 bg-[#141414]'>
            <div className='hidden lg:flex absolute lg:left-[70vh]'>
                <div className='w-50 h-[180vh] bg-black overflow-hidden relative -rotate-45'>
                    <div ref={garisRef} className=' text-5xl h-20 w-full absolute top-0 shadow-lg font-bold text-white flex justify-center items-center rotate-90'>BEST SELLER</div>
                    <div ref={garisRef2} className=' text-5xl h-20 w-full absolute top-0 shadow-lg font-bold text-white flex justify-center items-center rotate-90'>SHOP NOW</div>

                </div>
            </div>
        </section>
    );
};

export default VolumeSection3;
