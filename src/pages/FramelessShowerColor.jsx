import React from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setShowerColor } from '../redux/slices/showerSlice';
import { brushed_bronze, brushed_nickle, matt_black, oil_rubbed_bronze, satin_brass } from '../assets/images';

const images = {
  "Oil Rubbed Bronze": oil_rubbed_bronze,
  "Satin Brass": satin_brass,
  "Brushed Bronze": brushed_bronze,
  "Brushed Nickel": brushed_nickle,
  "Matte Black": matt_black,
};

const FramelessShowerColor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showerColor = useSelector((state) => state.shower.showerColor);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSelectColor = (color) => {
    dispatch(setShowerColor(color));
    // console.log('Selected Color:', showerColor);
  };

  const handleNext = () => {
    navigate('style');
  }

  return (
    <div className='flex flex-col items-center py-10 h-screen gap-4 w-full font-cardo'>
      <IoArrowBackCircle
        size={40}
        className='absolute top-5 left-5 cursor-pointer text-white hover:text-gray-200 transition-all duration-200'
        onClick={handleGoBack}
      />
      <h1 className='text-white mt-6 text-3xl md:text-6xl text-center text-shadow-md'>Customize Your Experience</h1>

      {/* Styles Section */}
      <div className='flex flex-col items-center justify-around xl:flex-row my-2 h-full'>
        {/* Image */}
        <div className='xl:w-1/2'>
          <img src={images[showerColor] || brushed_bronze} alt="" className='xl:w-[1000px] md:w-[700px] w-[350px] rounded-xl shadow-lg' loading='lazy' />
        </div>

        {/* Options */}
        <div className='xl:w-1/2 flex flex-col my-2 items-center gap-4 '>
          <p className='text-center text-lg md:text-2xl font-semibold text-shadow-md text-customGrey'>
            Please Select Enclosure Color
          </p>
          {/* Buttons */}
          <div className="grid grid-cols-2 xl:grid-cols-1 gap-2 xl:gap-4 mx-auto">
            {Object.keys(images).map((color, index) => (
              <button
                key={color}
                onClick={() => handleSelectColor(color)}
                className={`inline-flex animate-shimmer items-center justify-center rounded-md border border-cyan-400 bg-white p-[14px] h-[25px] md:w-[300px] font-sm text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:text-2xl md:h-[45px] ${showerColor === color ? 'ring-2 ring-cyan-300' : ''} ${index === Object.keys(images).length - 1 ? 'col-span-2 xl:col-span-1 justify-self-center w-[calc(50%-0.25rem)] xl:w-full' : ''}`}
              >
                {color}
              </button>
            ))}
          </div>
          <button onClick={handleNext} className="px-3 py-1 w-40 text-xl md:text-2xl text-shadow-md text-white font-bold rounded-full border-4 border-white bg-transparent hover:text-cyan-400 hover:bg-white transition duration-300">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FramelessShowerColor;
