import React from 'react';

function Pfp_username() {
  return (
    <div className='flex items-center justify-start py-4 gap-2'>
      <div className='w-10 h-10 bg-slate-200 rounded-full'></div>
      <div>
        <div className='font-medium'>Steven Morthy</div>
        <small className='text-xs text-slate-300'>Software Developer</small>
      </div>
    </div>
  );
}

export default Pfp_username;
