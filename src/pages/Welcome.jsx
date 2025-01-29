import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import { Loading } from './';

const Welcome = () => {
  const containerRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.to(containerRef.current, {
      delay: 4,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      onComplete: () => {
        containerRef.current.style.display = 'none';
      },
    });
  }, []);

  const handleOnClick = () => {
    navigate('pick_your_view');
  };

  return (
    <>
      {/* Loading screen */}
      <div
        ref={containerRef}
        className="h-screen z-10 bg-white absolute top-0 left-0 w-full"
      >
        <Loading />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center text-center space-y-10">
        <h1 className="text-4xl font-semibold text-customGrey">Welcome to our Glass Visualizer</h1>
        <h3 className="text-lg text-customGrey">
          Explore endless possibilities and bring your vision to life with just a few clicks
        </h3>
        <button
          className="text-lg shadow-lg py-3 px-6 w-fit rounded-2xl text-white transition-all duration-300 ease-in-out bg-glassBlue hover:border hover:border-glassBlue hover:bg-white hover:text-[#35C9DD] active:opacity-90"
          onClick={handleOnClick}
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default Welcome;
