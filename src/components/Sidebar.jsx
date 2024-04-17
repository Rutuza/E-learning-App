import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { BsBook } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { RiLiveLine } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";
// import { GrAdd } from "react-icons/gr";
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
    <div className='d-flex flex-column bg-dark text-white p-2'>
      <a href="d-flex align-items-center">
        <i className='bi bi-bootstrap fs-5 me-2'></i>
        <span className='fs-4'>Sidebar</span>
      </a>
      <hr className='text-secondary'/>

      <ul className='nav nav-pills flex-column'>
        <li className=''>
          <a href="" className='flex items-center gap-3'>
            <i><RxDashboard></RxDashboard></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className='nav-item'>
          <a href="" className='flex items-center gap-3'>
            <i><BsBook></BsBook></i>
            <span>My courses</span>
          </a>
        </li>
        <li className='nav-item'>
          <a href="" className='flex items-center gap-3'>
            <i><TfiWrite></TfiWrite></i>
            <span>Assignments</span>
          </a>
        </li>
        <li className='nav-item'>
          <a href="" className='flex items-center gap-3'>
            <i><RiLiveLine></RiLiveLine></i>
            <span>Discussion</span>
          </a>
        </li>
        <li className='nav-item'>
          <a href="" className='flex items-center gap-3'>
            <i><BsPersonCheck></BsPersonCheck></i>
            <span>Attendance</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

