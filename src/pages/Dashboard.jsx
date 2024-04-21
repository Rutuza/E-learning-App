import React from 'react';

import bell from '../assets/icons/bell.svg';
import settings from '../assets/icons/settings.svg';
import help from '../assets/icons/help icon.svg';
import avatar from '../assets/icons/avatar-figma 1.svg';

function Dashboard() {
  return (
    <>
     <div className=' bg-midnight_blue w-full text-white'>
        <header className='flex items-center p-2 justify-between'>
          <div className="title text-pastel_blue text-xl font-medium">Dashboard</div>
          <input type="search" name="" id="" className='rounded-full w-2/5 h-8 text-xs bg-transparent border-1 p-3' placeholder='Search for best Lectures, Tutorials, Courses...'/>

          <div className='flex items-center gap-2 justify-center'> 
            <div className='bg-light_navy rounded-full w-12 h-12 flex items-center justify-center'><img src={bell} alt="" srcset="" /></div>
            <div className='bg-light_navy rounded-full w-12 h-12 flex items-center justify-center'><img src={settings} alt="" srcset="" /></div>
            <div className='bg-light_navy rounded-full w-12 h-12 flex items-center justify-center'><img src={help} alt="" srcset="" /></div>
            <div className='bg-light_navy rounded-full w-12 h-12 flex items-center justify-center'><img src={avatar} alt="" srcset="" /></div>
          </div>
        </header>
        
     </div>
    </>
  );
}

export default Dashboard;
