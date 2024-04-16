import React from 'react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <>
      <div className='relative bg-midnight_blue'>
        {/* <Sidebar></Sidebar> */}

        <header className='flex items-center absolute left-72'>
          <div>Dashboard</div>
          <input type="search" name="" id="" placeholder='Search for Courses, Lectures, Tutorials...' className='text-xs border-2 rounded-full p-2 w-96'/>
          <div className=''>
            <ul className='flex items-center gap-2'>
              <li>Noti</li>
              <li>Settings</li>
              <li>help</li>
              <li>Profile</li>
            </ul>
          </div>

        </header>
      </div>
    </>
  );
}

export default Dashboard;
