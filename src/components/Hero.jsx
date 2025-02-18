import React from 'react';
import model1 from '../assets/model1-1.png';

const Hero = () => {
    return (
        <section className='h-screen relative'>
            {/* Element background absolue */}
            <div className='hidden lg:flex'>
            <div className=' border-10 border-black/65 blur-sm w-15 h-15 absolute bottom-52 right-100'></div>
            <div className=' border-10 border-black/65 blur-sm w-15 h-15 absolute bottom-35 left-100'></div>
            </div>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl lg:text-[9vh] text-center lg:leading-[10vh] tracking-tight text-pretty max-w-[90vh] absolute top-[20vh]'>
                    Simplify Your Casual Outfit With <strong>Luxqo.drei</strong>
                </h1>
            </div>
            <div className='w-full flex justify-center items-center'>
                <img src={model1} className='absolute bottom-0 lg:w-[40vh] w-[45vh]' alt="" />
            </div>
            <p className='hidden lg:flex absolute bottom-5 max-w-72 left-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulume.</p>

            <div className='hidden lg:flex flex-col absolute bottom-5 right-20 gap-y-2'>
                <p>Choose your size:</p>
                <div className='flex gap-x-2'>
                <div className='flex'>
                    <div className='border border-black w-10 h-10 flex justify-center items-center font-bold'>
                        S
                    </div>
                </div>
                <div className='flex'>
                    <div className='border border-black w-10 h-10 flex justify-center items-center font-bold'>
                        M
                    </div>
                </div>
                <div className='flex'>
                    <div className='border border-black w-10 h-10 flex justify-center items-center font-bold'>
                        L
                    </div>
                </div>
                <div className='flex'>
                    <div className='border border-black w-10 h-10 flex justify-center items-center font-bold'>
                        XL
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
