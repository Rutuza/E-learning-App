import React from 'react';


import { RxDashboard } from "react-icons/rx";
import { BsBook } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { RiLiveLine } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";

function Sidebar() {
  return (
    <>
     <aside className='relative'>
        <nav className='h-screen grid grid-flow-row items-center relative'>
            <div className="logo text-3xl font-semibold absolute top-0">Codaf<span className='text-[#FF4773]'>fix</span></div>
            <div className='wrapper'>
                <ul>
                    <li className='w-full p-3 text-slate_blue text-md hover:bg-pastel_blue hover:text-white'><a href="#" className='flex items-center justify-center gap-3'><RxDashboard /><div>Dashboard</div></a></li>
                    <li className='w-full p-3 text-slate_blue text-md hover:bg-pastel_blue hover:text-white'><a href="#" className='flex items-center justify-center gap-3'><BsBook /><div>My Courses</div></a></li>
                    <li className='w-full p-3 text-slate_blue text-md hover:bg-pastel_blue hover:text-white'><a href="#" className='flex items-center justify-center gap-3'><TfiWrite /><div>Assignments</div></a></li>
                    <li className='w-full p-3 text-slate_blue text-md hover:bg-pastel_blue hover:text-white'><a href="#" className='flex items-center justify-center gap-3'><RiLiveLine /><div>Discussions</div></a></li>
                    <li className='w-full p-3 text-slate_blue text-md hover:bg-pastel_blue hover:text-white'><a href="#" className='flex items-center justify-center gap-3'><BsPersonCheck /><div>Attendence</div></a></li>
                </ul>
            </div>
            <button type="button" className='bg-pastel_blue h-12 w-full rounded-lg absolute bottom-0'>Create Session</button>
        </nav>
     </aside> 
    </>
  );
}

export default Sidebar;
