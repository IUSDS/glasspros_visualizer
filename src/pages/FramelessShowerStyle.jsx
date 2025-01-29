import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowerStyle } from "../redux/slices/showerSlice";
import {
    rain_brushed_bronze,
    rain_brushed_nickel,
    rain_matt_black,
    rain_oil_rubbed,
    rain_satin_brass,
    clear_brushed_bronze,
    clear_brushed_nickel,
    clear_matt_black,
    clear_oil_rubbed,
    clear_satin_brass,
    satin_brushed_bronze,
    satin_brushed_nickel,
    satin_matt_black,
    satin_oil_rubbed,
    satin_satin_brass,
} from "../assets/images";

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

const FramelessShowerStyle = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const showerStyle = useSelector((state) => state.shower.showerStyle);
    const showerColor = useSelector((state) => state.shower.showerColor);
    const [imageSrc, setImageSrc] = useState(
        images["Rain Glass"]["Brushed Bronze"]
    ); // Default image

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
                console.error("Invalid style or color selection", {
                    showerStyle,
                    showerColor,
                });
            }
        }
    }, [showerStyle, showerColor]);

    const handleNext = () => {
        navigate("/showers/frameless/final"); // Navigate to the next step
    };

    return (
        <div className="flex flex-col items-center py-10 h-screen gap-4 w-full font-cardo">
            <IoArrowBackCircle
                size={40}
                className="absolute top-5 left-5 cursor-pointer text-white hover:text-gray-200 transition-all duration-200"
                onClick={handleGoBack}
            />
            <h1 className="text-white mt-6 text-3xl md:text-6xl text-center text-shadow-md">
                Customize Your Glass Style
            </h1>

            {/* Styles Section */}
            <div className="flex flex-col items-center justify-around xl:flex-row my-2 h-full">
                {/* Image */}
                <div className="xl:w-1/2">
                    <img
                        src={imageSrc}
                        alt="Selected Glass Style"
                        className="xl:w-[1000px] md:w-[700px] w-[350px] rounded-xl shadow-lg"
                        loading="lazy"
                    />
                </div>

                {/* Options */}
                <div className="xl:w-1/2 flex flex-col my-2 items-center gap-4">
                    <p className="text-center text-lg md:text-2xl font-semibold text-shadow-md text-customGrey">
                        Please Select Glass Style
                    </p>
                    {/* Buttons */}
                    <div className="grid grid-cols-2 xl:grid-cols-1 gap-2 xl:gap-4 mx-auto">
                        {Object.keys(images).map((style, index) => (
                            <button
                                key={style}
                                onClick={() => handleSelectStyle(style)}
                                className={`inline-flex animate-shimmer items-center justify-center rounded-md border border-cyan-400 bg-white p-[14px] h-[25px] md:w-[300px] font-sm text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:text-2xl md:h-[45px]
                                    ${showerStyle === style
                                        ? "ring-2 ring-cyan-300"
                                        : ""
                                    }
                                    ${index === Object.keys(images).length - 1
                                        ? "col-span-2 md:col-span-1 justify-self-center md:w-full"
                                        : ""
                                    }
                                `}
                            >
                                {style}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        className="px-3 py-1 w-40 text-xl md:text-2xl text-shadow-md text-white font-bold rounded-full border-4 border-white bg-transparent hover:text-cyan-400 hover:bg-white transition duration-300"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FramelessShowerStyle;
