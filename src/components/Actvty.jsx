import React from 'react';
import SquareBox from './SquareBox';
import Act_content from './Act_content';

function Actvty() {
  return (
    <div>
      <div className="title">Activity</div>
      <div className='mt-3'>
        <div className='bg-light_navy w-80 h-16 p-2'>
            <div className='flex gap-2'>
                <SquareBox />
                <Act_content></Act_content>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Actvty;
