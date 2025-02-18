import React, { useState } from 'react'
import { TbShoppingBag } from 'react-icons/tb'
import { FiMenu, FiX } from 'react-icons/fi' // Ikon menu
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className='w-full px-5 md:px-10 lg:px-20 fixed py-5 border border-black/5 bg-white/35 backdrop-blur-2xl z-[9999]'>
            <nav className='flex justify-between items-center'>
                {/* Logo */}
                <Link to="/" className='text-xl font-bold'>lxq.drei</Link>

                {/* Menu untuk desktop */}
                <div className='hidden md:flex gap-6 lg:gap-10'>
                    <Link to="/gallery" className='text-sm font-semibold'>Gallery</Link>
                    <Link to="/about" className='text-sm font-semibold'>About Us</Link>
                    <Link to="/contact" className='text-sm font-semibold'>Contact</Link>
                </div>

                {/* Tombol Shop */}
                <a href="https://shopee.co.id/luxqodrei" className='flex justify-center items-center bg-black p-2 px-4 rounded-full text-white gap-x-1'>
                    <span className='text-sm font-bold'>Shop</span>
                    <TbShoppingBag />
                </a>

                {/* Menu Hamburger */}
                <button 
                    className='md:hidden text-2xl' 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Dropdown Menu untuk Mobile */}
            <div className={`absolute top-[100%] left-0 w-full bg-white shadow-md flex flex-col items-center gap-5 py-5 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Link to="/gallery" className='text-sm font-semibold'>Gallery</Link>
                <Link to="/about" className='text-sm font-semibold'>About Us</Link>
                <Link to="/contact" className='text-sm font-semibold'>Contact</Link>
            </div>
        </header>
    )
}

export default Navbar
