import React from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setShowerColor } from '../redux/slices/showerSlice';
import { wfs_clear_brushed_nickel, wfs_clear_chrome, wfs_clear_matt_black, wfs_clear_oil_rubbed_bronze } from '../assets/images';

const images = {
  "Oil Rubbed Bronze": wfs_clear_oil_rubbed_bronze,
  "Chrome": wfs_clear_chrome,
  "Brushed Nickel": wfs_clear_brushed_nickel,
  "Matte Black": wfs_clear_matt_black,
};

const WithFramelessShowerColor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showerColor = useSelector((state) => state.shower.showerColor);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSelectColor = (color) => {
    dispatch(setShowerColor(color));
    console.log('Selected Color:', showerColor);
  };

  const handleNext = () => {
    navigate('style');
  }

  return (
    <div className='flex flex-col items-center py-5 h-screen gap-4 font-cardo w-full'>
      <IoArrowBackCircle
        size={40}
        className='absolute top-5 left-5 cursor-pointer text-white hover:text-gray-200 transition-all duration-200'
        onClick={handleGoBack}
      />
      <h1 className='text-white text-2xl md:text-6xl px-10 mt-10 text-center text-shadow-md'>Customize Your Experience</h1>

      {/* Styles Section */}
      <div className='grid grid-cols-1 xl:grid-cols-2 xl:gap-20 my-2 h-full items-start xl:items-center justify-center'>
        {/* Image */}
        <div className='flex justify-center items-center'>
          <img src={images[showerColor] || wfs_clear_brushed_nickel} alt="" className='md:h-[680px] xl:h-[550px] h-[350px] rounded-xl shadow-lg' />
        </div>

        {/* Options */}
        <div className='flex flex-col my-2 items-center gap-4'>
          <p className='text-center text-lg md:text-2xl font-semibold text-shadow-md text-gray-800'>
            Please Select Enclosure Color
          </p>
          {/* Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 max-w-md mx-auto">
            {Object.keys(images).map((color, index) => (
              <button
                key={index}
                onClick={() => handleSelectColor(color)}
                className={`
            inline-flex animate-shimmer items-center justify-center 
            rounded-md border border-cyan-400 bg-white 
            p-[14px] h-[25px] md:w-[300px] font-medium text-cyan-400 
            transition-colors focus:outline-none focus:ring-2 
            focus:ring-cyan-400 focus:ring-offset-2 
            focus:ring-offset-slate-50 md:text-2xl md:h-[45px]
            ${showerColor === color ? 'ring-2 ring-cyan-300' : ''}
          `}
              >
                {color}
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

export default WithFramelessShowerColor;