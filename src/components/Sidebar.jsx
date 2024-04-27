import React from 'react';
import { Link } from 'react-router-dom';

import { RxDashboard } from "react-icons/rx";
import { IoMdBook } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { RiLiveLine } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";

function Sidebar() {
  return (
    <div className='relative bg-light_navy w-60 h-full text-white flex flex-col justify-between p-2'>
      <div className='text-3xl font-medium'>Codaf<span className='text-[#FF4773]'>fix</span></div>
      
      <ul className='text-slate_blue'>
        <li className='p-3 hover:bg-pastel_pink w-full'>
          <Link to="/" className='flex items-center gap-3 hover:text-white'>
            <i><RxDashboard /></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className='p-3 hover:bg-pastel_pink w-full'>
          <Link to="mycourses" className='flex items-center gap-3 hover:text-white'>
            <i><IoMdBook /></i>
            <span>My courses</span>
          </Link>
        </li>
        <li className='p-3 hover:bg-pastel_pink w-full'>
          <Link to="assignments" className='flex items-center gap-3 hover:text-white'>
            <i><TfiWrite /></i>
            <span>Assignments</span>
          </Link>
        </li>
        <li className='p-3 hover:bg-pastel_pink w-full'>
          <Link to="discussions" className='flex items-center gap-3 hover:text-white'>
            <i><RiLiveLine /></i>
            <span>Discussion</span>
          </Link>
        </li>
        <li className='p-3 hover:bg-pastel_pink w-full'>
          <Link to="attendance" className='flex items-center gap-3 hover:text-white'>
            <i><BsPersonCheck /></i>
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

