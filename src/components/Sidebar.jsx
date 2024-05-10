import React from 'react';
import { Link } from 'react-router-dom';

import { RxDashboard } from "react-icons/rx";
import { IoMdBook } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { RiLiveLine } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";
import CreateSessionBtn from './Buttons/CreateSessionBtn';
import AppName from './AppName';

function Sidebar() {
  return (
    <div className='w-60 grid grid-flow-row items-center justify-center gap-20'>
      <AppName />
      
      <div className='py-3'>
        <ul className='grid grid-flow-row gap-4 items-center'>
          <li className='hover:bg-pastel_pink hover:rounded-md'>
            <Link to="/" className='flex items-center gap-3 hover:text-white'>
              <i><RxDashboard /></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className='hover:bg-pastel_pink w-full hover:rounded-md'>
            <Link to="mycourses" className='flex items-center gap-3 hover:text-white'>
              <i><IoMdBook /></i>
              <span>My courses</span>
            </Link>
          </li>
          <li className='hover:bg-pastel_pink w-full hover:rounded-md'>
            <Link to="assignments" className='flex items-center gap-3 hover:text-white'>
              <i><TfiWrite /></i>
              <span>Assignments</span>
            </Link>
          </li>
          <li className='hover:bg-pastel_pink w-full hover:rounded-md'>
            <Link to="discussions" className='flex items-center gap-3 hover:text-white'>
              <i><RiLiveLine /></i>
              <span>Discussion</span>
            </Link>
          </li>
          <li className='hover:bg-pastel_pink w-full hover:rounded-md'>
            <Link to="attendance" className='flex items-center gap-3 hover:text-white'>
              <i><BsPersonCheck /></i>
              <span>Attendance</span>
            </Link>
          </li>
        </ul>
      </div>
      
      <CreateSessionBtn />
    </div>
  );
}

export default Sidebar;

