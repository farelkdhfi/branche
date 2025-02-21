import React from 'react'
import { TbShoppingBag } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Logo from '../assets/catharsis.png'

const Navbar = () => {

    return (
        <header className='w-full px-5 md:px-10 lg:px-20 absolute py-5 border border-black/5 bg-black/35 backdrop-blur-2xl z-[9999]'>
            <nav className='flex justify-between items-center'>
                {/* Logo */}
                <Link to="/" >
                <img src={Logo} alt="" className='w-8'/>
                </Link>

                {/* Tombol Shop */}
                <div className='flex gap-x-2 justify-center items-center'>
                <Link className='text-white text-sm'>Gallery</Link>
                <p className='text-white'>|</p>
                <a href="https://shopee.co.id/luxqodrei" className='flex justify-center items-center text-white gap-x-1'>
                    <span className='text-sm'>Shop</span>
                    <TbShoppingBag />
                </a>
                </div>   
            </nav>
        </header>
    )
}

export default Navbar
