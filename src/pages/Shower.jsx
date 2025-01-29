import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';
import { setShowerType } from '../redux/slices/showerSlice';

const Shower = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleFrameless = () => {
    dispatch(setShowerType('frameless'));
    navigate('frameless');
  };

  const handleWithFrame = () => {
    dispatch(setShowerType('with_frame'));
    navigate('withframe');
  };

  return (
    <div className="flex flex-col items-center text-center gap-8">
      <IoArrowBackCircle
        size={40}
        className="absolute top-5 left-5 cursor-pointer text-white hover:text-gray-200 transition-all duration-200"
        onClick={handleGoBack}
      />
      <h1 className="text-4xl md:text-5xl font-semibold">Choose Your Style</h1>
      <button
        className="w-[200px] px-5 py-3 rounded-xl text-black bg-white hover:text-white hover:bg-zinc-700 transition-all duration-300 hover:border hover:border-white"
        onClick={handleFrameless}
      >
        Frameless
      </button>
      <button
        className="w-[200px] px-5 py-3 rounded-xl text-black bg-white hover:text-white hover:bg-zinc-700 transition-all duration-300 hover:border hover:border-white"
        onClick={handleWithFrame}
      >
        With Frame
      </button>
    </div>
  );
};

export default Shower;
