import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import volume1 from '../assets/volume2.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VolumeSection2 = () => {
    const garisRef = useRef(null);

    useEffect(() => {
        gsap.to(garisRef.current, {
            y: '160vh',
            duration: 2,
            repeat: -1,
            ease: 'linear',
            onRepeat: () => gsap.set(garisRef.current, { y: '-10vh' })
        });
    }, []);

    return (
        <section className='lg:h-screen lg:relative lg:px-20 px-5 py-16 lg:py-0 lg:flex-row flex gap-y-3 lg:gap-y-0 flex-col justify-center items-center overflow-hidden'>
            <div className='hidden lg:flex absolute right-[70vh] top-0'>
                <div className='w-50 h-[160vh] bg-gradient-to-b from-white via-gray-200 to-white overflow-hidden relative rotate-90'>
                    <div ref={garisRef} className='bg-white h-20 w-full absolute top-0 shadow-lg'></div>
                </div>
            </div>
            
            <div className='lg:w-1/2'>
                <div className='lg:w-[70vh] lg:h-[70vh] bg-gray-200 lg:absolute lg:bottom-0 rounded-full'>
                    <img src={volume1} alt="" className='lg:absolute lg:bottom-0 lg:w-[70vh]' />
                </div>
            </div>

            <div className='lg:w-1/2 z-50 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                <h2 className='font-bold text-xl'>Blue Juliet's</h2>
                <p className='max-w-md text-center lg:text-start'>Blue Juliets embodies grace and strength, with elegant blue tones that reflect both serenity and character in a timeless design.</p>
                <Link to="/preview2" className='mt-2 bg-black p-2 px-4 rounded-lg flex text-white w-fit justify-center items-center gap-x-2'>Check <FaArrowRight /></Link>
            </div>
        </section>
    );
};

export default VolumeSection2;
