import React, { useState } from 'react';

const MyButton = ({text,onClick}) => {

  return (
    <div>
      <button
        className="text-sm md:text-lg shadow-lg py-1 px-2 w-fit rounded-lg bg-blue-500"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default MyButton;
