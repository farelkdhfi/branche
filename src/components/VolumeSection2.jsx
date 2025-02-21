import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Img from '../assets/imgSection3.png'

const VolumeSection2 = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section className='h-screen bg-[#0c0c0c] flex justify-center items-center relative px-20'>
            <div>
                <img src={Img} alt="" className='w-[35vw]' />
            </div>



            <div ref={ref} className=" flex items-center justify-center right-[20rem] top-72">
                {/* Titik Bulat */}
                <div className="w-5 h-5 bg-white rounded-full flex justify-center items-center"></div>

                {/* Garis Animasi */}
                <motion.div
                    className="h-1 bg-white left-0"
                    initial={{ width: 0 }}
                    animate={{ width: inView ? 200 : 0 }} // Animasi saat masuk viewport
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                ></motion.div>

                <motion.p
                    className="text-white/70 max-w-md text-sm ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 100 : 0 }} // Animasi saat masuk viewport
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil inventore laborum eveniet odio blanditiis exercitationem sint voluptate impedit similique quibusdam corporis dolorum dolor nobis soluta facere tempore earum, quae amet!</motion.p>
            </div>

        </section>
    )
}

export default VolumeSection2