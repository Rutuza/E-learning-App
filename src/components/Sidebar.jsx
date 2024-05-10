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
    <div className='w-60 '>
      <AppName />
      
      <div className='py-3'>
        <ul className='text-slate_blue grid grid-flow-row items-center justify-center gap-4 w-full'>
          <li className='hover:bg-pastel_pink w-full hover:rounded-md'>
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

        <CreateSessionBtn/>
      </div>
    </div>
  );
}

export default Sidebar;

