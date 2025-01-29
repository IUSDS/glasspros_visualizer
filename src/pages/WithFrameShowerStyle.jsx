import React, { useEffect, useState } from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setShowerStyle } from '../redux/slices/showerSlice';
import {
    wfs_clear_brushed_nickel,wfs_clear_chrome,wfs_clear_matt_black,wfs_clear_oil_rubbed_bronze,wfs_rain_brushed_nickel,wfs_rain_chrome,wfs_rain_matt_black,wfs_rain_oil_rubbed_bronze,wfs_satin_brushed_nickel,wfs_satin_chrome,wfs_satin_matt_black,wfs_satin_oil_rubbed_bronze
} from '../assets/images';

const images = {
    "Rain Glass": {
        "Brushed Nickel": wfs_rain_brushed_nickel,
        "Matte Black": wfs_rain_matt_black,
        "Oil Rubbed Bronze": wfs_rain_oil_rubbed_bronze,
        "Chrome": wfs_rain_chrome,
    },
    "Satin Glass": {
        "Brushed Nickel": wfs_satin_brushed_nickel,
        "Matte Black": wfs_satin_matt_black,
        "Oil Rubbed Bronze": wfs_satin_oil_rubbed_bronze,
        "Chrome": wfs_satin_chrome,
    },
    "Clear Glass": {
        "Brushed Nickel": wfs_clear_brushed_nickel,
        "Matte Black": wfs_clear_matt_black,
        "Oil Rubbed Bronze": wfs_clear_oil_rubbed_bronze,
        "Chrome": wfs_clear_chrome,
    },
};

const WithFrameShowerStyle = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const showerStyle = useSelector((state) => state.shower.showerStyle);
    const showerColor = useSelector((state) => state.shower.showerColor);
    const [imageSrc, setImageSrc] = useState(images["Rain Glass"]["Brushed Bronze"]); // Default image

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleSelectStyle = (style) => {
        dispatch(setShowerStyle(style));
    };

    useEffect(() => {
        if (showerStyle && showerColor) {
            const selectedImage = images[showerStyle]?.[showerColor];
            if (selectedImage) {
                setImageSrc(selectedImage);
            } else {
                console.error("Invalid style or color selection", { showerStyle, showerColor });
            }
        }
    }, [showerStyle, showerColor]);

    const handleNext = () => {
        navigate('/showers/withframe/final'); // Navigate to the next step
    };

    return (
        <div className='flex flex-col items-center py-5 h-screen gap-4 font-cardo'>
            <IoArrowBackCircle
                size={40}
                className='absolute top-5 left-5 cursor-pointer text-white hover:text-gray-200 transition-all duration-200'
                onClick={handleGoBack}
            />
            <h1 className='text-white text-2xl md:text-6xl px-10 mt-10 text-center text-shadow-md'>Customize Your Glass Style</h1>

            {/* Styles Section */}
            <div className='grid grid-cols-1 xl:grid-cols-2 xl:gap-20 my-2 h-full items-start xl:items-center justify-center'>
                {/* Image */}
                <div className='flex justify-center items-center'>
                    <img src={imageSrc} alt="Selected Glass Style" className='md:h-[680px] xl:h-[550px] h-[350px] rounded-xl shadow-lg' />
                </div>

                {/* Options */}
                <div className='flex flex-col my-2 items-center gap-4'>
                    <p className='text-center text-lg md:text-2xl font-semibold text-shadow-md text-gray-800'>
                        Please Select Glass Style
                    </p>
                    {/* Buttons */}
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-2 max-w-md mx-auto">
                        {Object.keys(images).map((style, index) => (
                            <button
                                key={style}
                                onClick={() => handleSelectStyle(style)}
                                className={`
                                    inline-flex animate-shimmer items-center justify-center rounded-md border border-cyan-400 bg-white p-[14px] h-[25px] md:w-[300px] font-medium text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:text-2xl md:h-[45px]
                                    ${showerStyle === style ? 'ring-2 ring-cyan-300' : ''}
                                    ${index === Object.keys(images).length - 1 ?
                                        'col-span-2 md:col-span-1 justify-self-center md:w-full' : ''}
                                `}
                            >
                                {style}
                            </button>
                        ))}
                    </div>
                    <button onClick={handleNext} className="px-3 py-1 w-28 md:w-40 text-sm md:text-2xl text-shadow-md text-white font-bold rounded-full border-4 border-white bg-transparent hover:text-cyan-400 hover:bg-white transition duration-300">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WithFrameShowerStyle;
