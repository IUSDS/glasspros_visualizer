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

const WithFrameFinal = () => {
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

    return (
        <div className='flex flex-col items-center py-5 h-screen gap-4 font-cardo'>
            <IoArrowBackCircle
                size={40}
                className='absolute top-5 left-5 cursor-pointer text-white hover:text-gray-200 transition-all duration-200'
                onClick={handleGoBack}
            />
            <h1 className='text-white text-2xl mt-10 px-10 md:text-6xl text-center text-shadow-md'>Your Customized Design</h1>

            {/* Styles Section */}
            <div className='grid grid-cols-1 xl:grid-cols-2 xl:gap-20 my-2 h-full items-start xl:items-center justify-center'>
                {/* Image */}
                <div className=''>
                    <img src={imageSrc} alt="Selected Glass Style" className='md:h-[680px] xl:h-[550px] h-[350px] rounded-xl shadow-lg' />
                </div>

                {/* Result */}
                <div className=' flex items-center justify-center text-customGrey gap-4 text-xl md:text-3xl'>
                    <div className='flex flex-col'>
                        <p>Style:</p>
                        <p>Color:</p>
                        <p>Type of Glass:</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>With Frame</p>
                        <p>{showerColor}</p>
                        <p>{showerStyle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithFrameFinal;
