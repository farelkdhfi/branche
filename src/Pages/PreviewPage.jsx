import React from 'react';
import { FaStar } from 'react-icons/fa';
import img1 from '../assets/gal3.png';

const PreviewPage = () => {
    const product = {
        title: 'Classy Lips | Oversize Boxy T-shirt',
        rating: 4.5,
        price: 199.99,
        image: img1
    };

    return (
        <div className="container mx-auto p-4 font-sans pt-[15vh]">
            <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                    <div className="w-16 h-1 bg-black/10 mb-4"></div>
                    <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={`${i < Math.floor(product.rating) ? 'text-black' : 'text-gray-300'} mr-1`}
                            />
                        ))}
                        <span className="ml-2 text-gray-600">{product.rating.toFixed(1)}</span>
                    </div>
                    <div className='flex flex-wrap gap-1 mb-4'>
                        <div className='w-10 h-10 border flex justify-center items-center border-black'>S</div>
                        <div className='w-10 h-10 border flex justify-center items-center border-black'>M</div>
                        <div className='w-10 h-10 border flex justify-center items-center border-black'>L</div>
                        <div className='w-10 h-10 border flex justify-center items-center border-black'>XL</div>
                    </div>

                    <a
                        href='https://shopee.co.id/Boxy-Oversize-T-Shirt-Luxqo-Drei-Classy-Lips-i.1105153799.23085417871?sp_atk=e5cbf63f-f4c9-4c89-b8fd-dee7b2b8401e'
                        className="bg-black text-white px-5 py-3 rounded-full hover:bg-black/50 transition duration-300 mb-4 inline-block"
                    >
                        Buy via Shopee
                    </a>

                    <p className="text-gray-600 mt-4">
                        Experience ultimate comfort and style with the Classy Lips Oversize Boxy T-shirt.
                        Made from premium cotton combed 20s, this t-shirt offers the perfect balance of softness and durability.
                        Ideal for casual wear, it features a trendy design and an oversized fit for a modern look.
                    </p>

                    <h2 className="text-lg font-semibold mt-4">Materials:</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>100% Cotton Combed 20s</li>
                        <li>Soft and smooth fabric texture</li>
                        <li>Comfortable for daily wear</li>
                        <li>High absorbency</li>
                        <li>Maintains shape and does not stretch easily</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PreviewPage;