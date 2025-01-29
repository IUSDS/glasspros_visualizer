import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";
import { V1, V2 } from '../assets/images';

const PickYourView = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    const handleShowerClick = () => {
        navigate('/showers');
    }
    const handleWindowClick = () => {
        navigate('/windows');
    }

    return (
        <div className='flex flex-col justify-evenly items-center text-center py-20 h-screen w-full'>
            <IoArrowBackCircle size={40} className='absolute top-5 left-5 cursor-pointer text-white hover:text-gray-200 transition-all duration-200' onClick={handleGoBack} />
            <h1 className='text-3xl px-8 md:text-6xl font-semibold text-customGrey'>Welcome to Our Glass Visualizer</h1>
            <div className='flex flex-col xl:flex-row gap-4 md:gap-20'>
                {/* Image 1 */}
                <div className='relative group cursor-pointer customBorderRadius' onClick={handleShowerClick} >
                    <img
                        src={V2}
                        alt=""
                        className='h-[200px] w-[300px] md:h-[300px] md:w-[500px] transition-all duration-300'
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300 mx-1 mb-2"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white text-2xl">Showers</p>
                    </div>
                </div>

                {/* Image 2 */}
                <div className='relative group cursor-pointer customBorderRadius' onClick={handleWindowClick}>
                    <img
                        src={V1}
                        alt=""
                        className='h-[200px] w-[300px] md:h-[300px] md:w-[500px] transition-all duration-300'
                    />
                    <div className="absolute inset-0 bg-black opacity-0 mx-1 mb-2 group-hover:opacity-50 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white text-2xl">Don Young Windows</p>
                    </div>
                </div>
            </div>
            <h3 className='text-lg md:text-2xl text-customGrey'>Pick Your View</h3>
        </div>
    )
}

export default PickYourView
