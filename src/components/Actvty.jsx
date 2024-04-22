import React from 'react';
import SquareBox from './SquareBox';
import Act_content from './Act_content';

function Actvty() {
  return (
    <div>
      <div className="title">Activity</div>
      <div className='mt-3'>
        <div className='bg-light_navy w-80 h-16 relative flex items-center justify-center rounded-md'>
            <div className='flex gap-4'>
                <div><SquareBox /></div>
                <div><Act_content /></div>
            </div> 
        </div>
      </div>
    </div>
  );
}

export default Actvty;
