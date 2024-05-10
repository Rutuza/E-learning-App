import React from 'react';
import Due_btn from '../Buttons/Due_btn';

function Quiz() {
  return (
    <>

      <div className='flex items-center'>
        <div>Take Quizzes</div>
        <button type="button"><Due_btn/></button>
      </div>

      <div className="date_time mt-2 text-xs text-gray-300 flex justify-between">
        <div className="">Jackey Miles</div>
        <div>30 Mar, 11:59 PM</div>
      </div>
    
    </>
  );
}

export default Quiz;
