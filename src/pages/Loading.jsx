import React, { useEffect, useRef } from 'react';
import { glasspros_logo } from '../assets/logos';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className='logo flex'>
        <img src={glasspros_logo} alt="logo" className="" />
      </div>
    </div>
  );
};

export default Loading;
