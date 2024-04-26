import React from 'react';
import Advance_btn from '../Buttons/Advance_btn';
import Bar from '../Bar';

function Adv_crd() {
  return (
    <div>
      <div className='w-80 h-28 bg-light_navy rounded-md p-3 mt-4'>
        <div className='flex flex-row justify-between items-center'>
            <div>Advanced</div>
            <Advance_btn/>
        </div>
        <div className='text-xs font-thin text-gray-200 flex flex-row items-center justify-between mt-2'>
            <div className="modules">8 modules</div>
            <div>5/30</div>
        </div>
        <Bar/>
      </div>
    </div>
  );
}

export default Adv_crd;
