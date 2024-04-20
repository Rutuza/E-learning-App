import React from 'react';
import { Link } from 'react-router-dom';

import { RxDashboard } from "react-icons/rx";
import { BsBook } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { RiLiveLine } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";

// import { IconBase } from 'react-icons/lib';

// const Sidebar = () => {
//     const menuItem =[
//       {
        
//       }
//     ]
//   return (
//     <>
//      <aside className='relative bg-light_navy w-60 px-4'>
//         <nav className='h-screen grid grid-flow-row items-center relative'>
//             <div className="logo text-white text-3xl font-semibold absolute top-0">Codaf<span className='text-[#FF4773]'>fix</span></div>
//             <div className='wrapper'>
//                 <ul>
//                     <li className='p-3 text-slate_blue text-lg hover:bg-crimson hover:text-white hover:rounded-md'><a href="#" className='flex items-center justify-center gap-3'><RxDashboard /><div>Dashboard</div></a></li>
//                     <li className='p-3 text-slate_blue text-lg hover:bg-crimson hover:text-white hover:rounded-md'><a href="#" className='flex items-center justify-center gap-3'><BsBook /><div>My Courses</div></a></li>
//                     <li className='p-3 text-slate_blue text-lg hover:bg-crimson hover:text-white hover:rounded-md'><a href="#" className='flex items-center justify-center gap-3'><TfiWrite /><div>Assignments</div></a></li>
//                     <li className='p-3 text-slate_blue text-lg hover:bg-crimson hover:text-white hover:rounded-md'><a href="#" className='flex items-center justify-center gap-3'><RiLiveLine /><div>Discussions</div></a></li>
//                     <li className='p-3 text-slate_blue text-lg hover:bg-crimson hover:text-white hover:rounded-md'><a href="#" className='flex items-center justify-center gap-3'><BsPersonCheck /><div>Attendence</div></a></li>
//                 </ul>
//             </div>
//             <button type="button" className='bg-pastel_blue h-12 w-full rounded-lg absolute bottom-4 flex items-center justify-center gap-4 font-medium text-white'>
//                 <div>Create Session</div>
//                 <GrAdd/>
//             </button>
//         </nav>
//      </aside> 
//     </>
//   );
// }

// export default Sidebar;
function Sidebar() {
  return (
    <div className='relative bg-light_navy h-screen w-60 text-white grid grid-flow-row p-2'>
      <div className='text-3xl font-medium'>Codaf<span className='text-[#FF4773]'>fix</span></div>
      

      <ul className=''>
        <li className='p-3 hover:bg-pastel_pink w-full'>
          <Link to="/" className='flex items-center gap-3'>
            <i><RxDashboard></RxDashboard></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className='p-3 hover:bg-pastel_pink w-full'>
          <Link to="mycourses" className='flex items-center gap-3'>
            <i><BsBook></BsBook></i>
            <span>My courses</span>
          </Link>
        </li>
        <li className='p-3 hover:bg-pastel_pink w-full'>
          <Link to="assignments" className='flex items-center gap-3'>
            <i><TfiWrite></TfiWrite></i>
            <span>Assignments</span>
          </Link>
        </li>
        <li className='p-3 hover:bg-pastel_pink w-full'>
          <Link to="discussions" className='flex items-center gap-3'>
            <i><RiLiveLine></RiLiveLine></i>
            <span>Discussion</span>
          </Link>
        </li>
        <li className='p-3 hover:bg-pastel_pink w-full'>
          <Link to="attendance" className='flex items-center gap-3'>
            <i><BsPersonCheck></BsPersonCheck></i>
            <span>Attendance</span>
          </Link>
        </li>
      </ul>

      <button type="button" className='border-2 w-full h-16 rounded-xl bg-pastel_blue'>
        <div className='flex items-center gap-3 justify-center text-lg'>
          <div>Create Session</div>
          <i>+</i>
        </div>
      </button>
    </div>
  );
}

export default Sidebar;

