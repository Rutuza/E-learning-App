import React from 'react';

function Sidebar() {
  return (
    <>
     <section>
        <div className='border-r-2'>
            <div className="logo text-3xl font-semibold">Codaf<span className='text-[#FF4773]'>fix</span></div>
            <div className='items'>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">My Courses</a></li>
                    <li><a href="#">Assignments</a></li>
                    <li><a href="#">Discussion</a></li>
                    <li><a href="#">Attendence</a></li>
                </ul>
            </div>
            <button type="button" className='border rounded-lg p-3 bg-pastel_blue text-white'>Create Session</button>
        </div>
     </section> 
    </>
  );
}

export default Sidebar;
