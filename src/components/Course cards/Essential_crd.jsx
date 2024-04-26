import React from 'react';
import Foundation_btn from '../Buttons/Foundation_btn';
import Advance_btn from '../Buttons/Advance_btn';
import Line from '../Bar';
import Bar from '../Bar';

function Essential_crd() {
  return (
    <div className='mt-3'>
      <div className='w-80 h-28 bg-light_navy rounded-md p-3'>
        <div className='flex flex-row justify-between items-center'>
            <div>Essential</div>
            <Foundation_btn />
        </div>

        <div className='text-xs font-thin text-gray-200 flex flex-row items-center justify-between mt-2'>
            <div className="modules">4 modules</div>
            <div>4/28</div>
        </div>

        <Bar/>
      </div>
    </div>
  );
}

export default Essential_crd;
