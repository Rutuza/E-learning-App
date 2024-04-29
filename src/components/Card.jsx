import React from 'react';
import Bar from './Bar';
import Pfp_username from './Pfp_username';


function Card() {
  return (
    <div className='relative'>
      <div className='w-96 h-80 rounded-md bg-light_navy flex justify-center'>
        <div className='w-80 h-24 bg-red-300 mt-8 rounded-md'></div>
      </div>

      <div className='absolute top-36 px-4'>
        <div className='font-semibold text-lg max-w-80'>Beginner's guide for becoming a professional Frontend Developer</div>
        <Bar/>

        <Pfp_username/>
      </div>
    </div>
  );
}

export default Card;
