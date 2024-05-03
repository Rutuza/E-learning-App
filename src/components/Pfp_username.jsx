import React from 'react';

function Pfp_username() {
  return (
    <div className='flex items-center justify-start py-3 gap-2'>
      <div className='w-8 h-8 bg-slate-200 rounded-full'></div>
      <div>
        <div className='font-medium text-sm'>Steven Morthy</div>
        <small className='text-xs text-slate-300'>Software Developer</small>
      </div>
    </div>
  );
}

export default Pfp_username;
