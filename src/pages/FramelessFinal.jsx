import React, { useEffect, useState } from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setShowerStyle } from '../redux/slices/showerSlice';
import {
    rain_brushed_bronze, rain_brushed_nickel, rain_matt_black, rain_oil_rubbed, rain_satin_brass,
    clear_brushed_bronze, clear_brushed_nickel, clear_matt_black, clear_oil_rubbed, clear_satin_brass,
    satin_brushed_bronze, satin_brushed_nickel, satin_matt_black, satin_oil_rubbed, satin_satin_brass
} from '../assets/images';

const images = {
    "Rain Glass": {
        "Brushed Bronze": rain_brushed_bronze,
        "Brushed Nickel": rain_brushed_nickel,
        "Matte Black": rain_matt_black,
        "Oil Rubbed Bronze": rain_oil_rubbed,
        "Satin Brass": rain_satin_brass,
    },
    "Satin Glass": {
        "Brushed Bronze": satin_brushed_bronze,
        "Brushed Nickel": satin_brushed_nickel,
        "Matte Black": satin_matt_black,
        "Oil Rubbed Bronze": satin_oil_rubbed,
        "Satin Brass": satin_satin_brass,
    },
    "Clear Glass": {
        "Brushed Bronze": clear_brushed_bronze,
        "Brushed Nickel": clear_brushed_nickel,
        "Matte Black": clear_matt_black,
        "Oil Rubbed Bronze": clear_oil_rubbed,
        "Satin Brass": clear_satin_brass,
    },
};

const FramelessFinal = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const showerStyle = useSelector((state) => state.shower.showerStyle);
    const showerColor = useSelector((state) => state.shower.showerColor);
    const [imageSrc, setImageSrc] = useState(images["Rain Glass"]["Brushed Bronze"]);

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
        navigate('confirmation'); // Navigate to the next step
    };

    return (
        <div className='flex flex-col items-center py-10 h-screen gap-4 w-full font-cardo'>
            <IoArrowBackCircle
                size={40}
                className='absolute top-5 left-5 cursor-pointer text-white hover:text-gray-200 transition-all duration-200'
                onClick={handleGoBack}
            />
            <h1 className='text-white mt-6 text-3xl md:text-6xl text-center text-shadow-md'>Your Customized Design Preview</h1>

            {/* Styles Section */}
            <div className='flex flex-col items-center justify-around xl:flex-row my-2 h-full'>
                {/* Image */}
                <div className='xl:w-1/2'>
                    <img src={imageSrc} alt="Selected Glass Style" className='xl:w-[1000px] md:w-[700px] w-[350px] rounded-xl shadow-lg' />
                </div>

                {/* Result */}
                <div className='xl:w-1/2 flex my-2 text-shadow-md text-customGrey items-center gap-4 text-xl md:text-2xl justify-center'>
                    <div className='flex flex-col'>
                        <p>Style:</p>
                        <p>Color:</p>
                        <p>Type of Glass:</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>Frameless</p>
                        <p>{showerColor}</p>
                        <p>{showerStyle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FramelessFinal;
