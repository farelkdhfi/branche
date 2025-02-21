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
                <Link to="/gallery" className='text-white text-sm'>Gallery</Link>
                <p className='text-white'>|</p>
                <a href="https://www.tokopedia.com/catharsisempire?fbclid=PAZXh0bgNhZW0CMTEAAaa7RiDLAcwHlnOFLQm_Uh4OamWs8YVGHs5DZ8KHNF9OkJPUDGTqUG29XOc_aem_RC57TgFxTpVgh1rhIOSEtw&_branch_match_id=1327227113431142027&utm_source=sellerchannel&utm_campaign=Shop-0-8065060-0&utm_medium=share&_branch_referrer=H4sIAAAAAAAAAwXB2wqCMAAA0L%2FpMS0SNZAQr5U5s3nJF5k6t%2BG1bWBPfXvnUClXcVYUuQzLijuG9iObB6VFkiIumMDTyji%2B9E07ss5K7KqkakNiWhWq84CebSOkp8yN7HYLxxn40XOqM3oCaCqE8c6DUGhuZdzD2DfBcEsyN4CfLDiaJWhrhKc6dTQdEv8L15zQA6dX8PLktvtx3GPO2Uzqhi%2BbwNzyOoL%2F%2FZ6Oz64AAAA%3D" className='flex justify-center items-center text-white gap-x-1'>
                    <span className='text-sm'>Shop</span>
                    <TbShoppingBag />
                </a>
                </div>   
            </nav>
        </header>
    )
}

export default Navbar
