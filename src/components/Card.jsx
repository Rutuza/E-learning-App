import React from 'react';
import Bar from './Bar';
import Pfp_username from './Pfp_username';


function Card() {
  return (
    <div className='relative'>
      <div className='w-80 h-80 rounded-md bg-light_navy flex justify-center'>
        <div className='w-72 h-24 bg-red-300 mt-3 rounded-md'></div>
      </div>

      <div className='absolute top-36 px-4 mt-0'>
        <div className='font-semibold text-base max-w-64'>Beginner's guide for becoming a professional Frontend Developer</div>
        <Bar/>
        <Pfp_username />
      </div>
    </div>
  );
}

export default Card;
