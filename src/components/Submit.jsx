import React from 'react';
import Due_btn from './Buttons/Due_btn';

function Submit() {
  return (
    <div>
      <div className='flex items-center gap-16'>
        <div className='text-sm'>Submit assignment</div>
        <button type="button"><Due_btn /></button>
      </div>

      <div className="date_time mt-2 text-xs text-gray-300 flex justify-between">
        <div className="">Jackey Miles</div>
        <div>30 Mar, 11:59 PM</div>
      </div>
    </div>
  );
}

export default Submit;
