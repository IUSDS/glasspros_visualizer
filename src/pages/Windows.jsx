import React, { useState, useEffect } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { casement, double_hung, single_hung } from "../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { setWindowType } from "../redux/slices/windowSlice";
import { useNavigate } from "react-router-dom";

const images = {
    "Single Hung": single_hung,
    "Double Hung": double_hung,
    "Casement": casement,
};

const Windows = () => {
    const dispatch = useDispatch();
    const [imageSrc, setImageSrc] = useState(images["Single Hung"]);
    const windowType = useSelector((state) => state.window.type);
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    const handleWindowType = (type) => {
        dispatch(setWindowType(type));
        // console.log("Selected Window:", windowType)
    }
    useEffect(() => {
        if (windowType) {
            const selectedImage = images[windowType];
            if (selectedImage) {
                setImageSrc(selectedImage);
            } else {
                console.error("Invalid style or color selection", { showerStyle, showerColor });
            }
        }
    }, [windowType]);
    return (
        <div className="grid grid-cols-1 w-[1200px] h-screen py-20">
            <IoArrowBackCircle
                size={40}
                className="absolute top-5 left-5 cursor-pointer text-white hover:text-gray-200 transition-all duration-200"
                onClick={handleGoBack}
            />

            <h1 className='text-white px-6 text-3xl md:text-6xl text-center text-shadow-md'>Customize Your Experience</h1>

            <div className='flex flex-col xl:flex-row my-2 h-full items-center'>
                {/* Image */}
                <div className="xl:w-1/2 px-4">
                    <img
                        src={imageSrc}
                        alt="Selected Glass Style"
                        className="md:h-[600px] xl:h-[500px] h-[300px]"
                    />
                </div>

                {/* Options */}
                <div className="xl:w-1/2 flex flex-col my-2 items-center gap-4 mt-10">
                    {/* Buttons */}
                    <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                        {Object.keys(images).map((type, index) => (
                            <button
                                key={type}
                                onClick={() => handleWindowType(type)}
                                className={` inline-flex animate-shimmer items-center justify-center rounded-md border border-cyan-400 bg-white p-3 h-[35px] w-[200px] md:w-[300px] font-medium text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:text-2xl md:h-[45px] ${windowType === type ? "ring-2 ring-cyan-300" : ""}`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Windows;
