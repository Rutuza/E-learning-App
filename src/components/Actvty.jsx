import React from 'react';
import SquareBox from './SquareBox';
import Act_content from './Submit';
import Submit from './Submit';
import Participate from './Dashboard Contents/Actvity/Participate';

function Actvty() {
  return (
      <div className='mt-3 grid grid-flow-row gap-3'>
        <div className='bg-light_navy w-80 h-16 relative flex items-center justify-center rounded-md'>
            <div className='flex gap-4'>
                <div><SquareBox /></div>
                <div><Submit/></div>
            </div> 
        </div>
        <div className='bg-light_navy w-80 h-16 relative flex items-center justify-center rounded-md'>
            <div className='flex gap-4'>
                <div><SquareBox /></div>
                <div></div>
            </div> 
        </div>
        <div className='bg-light_navy w-80 h-16 relative flex items-center justify-center rounded-md'>
            <div className='flex gap-4'>
                <div><SquareBox /></div>
                <div></div>
            </div> 
        </div>
        <div className='bg-light_navy w-80 h-16 relative flex items-center justify-center rounded-md'>
            <div className='flex gap-4'>
                <div><SquareBox /></div>
                <div></div>
            </div> 
        </div>
      </div>
  );
}

export default Actvty;
