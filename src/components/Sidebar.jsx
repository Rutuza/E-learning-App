import React from 'react';

import block from '../assets/icons/blocks.svg';
import book from '../assets/icons/book.svg';
import bookwithpen from '../assets/icons/bookwithpen.svg';
import camera from '../assets/icons/camera.svg';
import person from '../assets/icons/person-done.svg';

function Sidebar() {
  return (
    <>
     <aside className='relative'>
        <nav className='h-screen grid grid-flow-row items-center relative'>
            <div className="logo text-3xl font-semibold absolute top-0">Codaf<span className='text-[#FF4773]'>fix</span></div>
            <div className='wrapper'>
                <ul>
                    <li className='w-full p-3 text-slate_blue text-lg hover:bg-pastel_blue hover:text-white'><a href="#" className='flex items-center justify-center gap-3'><img src={block} alt="" srcset="" /><div>Dashboard</div></a></li>
                    <li className='w-full p-3 text-slate_blue text-lg hover:bg-pastel_blue hover:text-white'><a href="#" className='flex items-center justify-center gap-3'><img src={book} alt="" srcset="" /><div>My Courses</div></a></li>
                    <li className='w-full p-3 text-slate_blue text-lg hover:bg-pastel_blue hover:text-white'><a href="#" className='flex items-center justify-center gap-3'><img src={bookwithpen} alt="" srcset="" /><div>Assignments</div></a></li>
                    <li className='w-full p-3 text-slate_blue text-lg hover:bg-pastel_blue hover:text-white'><a href="#" className='flex items-center justify-center gap-3'><img src={camera} alt="" srcset="" /><div>Discussions</div></a></li>
                    <li className='w-full p-3 text-slate_blue text-lg hover:bg-pastel_blue hover:text-white'><a href="#" className='flex items-center justify-center gap-3'><img src={person} alt="" srcset="" /><div>Attendence</div></a></li>
                </ul>
            </div>
            <button type="button" className='bg-pastel_blue h-12 w-full rounded-lg absolute bottom-0'>Create Session</button>
        </nav>
     </aside> 
    </>
  );
}

export default Sidebar;
