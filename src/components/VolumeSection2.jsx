import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Img from '../assets/imgSection3.png'

const VolumeSection2 = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section className='lg:h-screen py-20 lg:py-0 bg-[#0c0c0c] flex flex-col lg:flex-row justify-center items-center relative lg:px-20 px-5'>
            <motion.img src={Img} alt="" className='lg:w-[35vw] w-[70vw]'
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 100 : 0 }} // Animasi saat masuk viewport
                transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }} />

            <p className='text-sm text-white/70 lg:hidden mt-3 lg:mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minus aspernatur quidem. Recusandae, dolore! Consequuntur temporibus, deserunt ullam minus deleniti voluptatibus in vero porro sed! Nostrum debitis maiores deserunt exercitationem?</p>



            <div ref={ref} className="hidden lg:flex items-center justify-center right-[20rem] top-72">
                {/* Titik Bulat */}
                <motion.div className="w-5 h-5 bg-white rounded-full flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 100 : 0 }} // Animasi saat masuk viewport
                    transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                ></motion.div>

                {/* Garis Animasi */}
                <motion.div
                    className="h-1 bg-white left-0"
                    initial={{ width: 0 }}
                    animate={{ width: inView ? 200 : 0 }} // Animasi saat masuk viewport
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
                ></motion.div>

                <motion.p
                    className="text-white/70 max-w-md text-sm ml-2"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: inView ? 100 : 0, y: inView ? 0 : 40 }} // Animasi saat masuk viewport
                    transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil inventore laborum eveniet odio blanditiis exercitationem sint voluptate impedit similique quibusdam corporis dolorum dolor nobis soluta facere tempore earum, quae amet!</motion.p>
            </div>

        </section>
    )
}

export default VolumeSection2