import React from 'react';

import bell from '../assets/icons/bell.svg';
import settings from '../assets/icons/settings.svg';
import help from '../assets/icons/help icon.svg';
import avatar from '../assets/icons/avatar-figma 1.svg';
import Actvty from '../components/Actvty';
import C_card from '../components/Course cards/Essential_crd';
import Essential_crd from '../components/Course cards/Essential_crd';
import Adv_crd from '../components/Course cards/Adv_crd';


function Dashboard() {
  return (
    <>
     <div className=' bg-midnight_blue w-full text-white p-3.5'>
        <header className='flex items-center justify-between'>
          <div className="title text-pastel_blue text-xl font-medium">Dashboard</div>
          <input type="search" name="" id="" className='rounded-full w-2/5 h-8 text-xs bg-transparent border-1 p-3' placeholder='Search for best Lectures, Tutorials, Courses...'/>

          <div className='flex items-center gap-2 justify-center'> 
            <div className='bg-light_navy rounded-full w-12 h-12 flex items-center justify-center'><img src={bell} alt="" srcset="" /></div>
            <div className='bg-light_navy rounded-full w-12 h-12 flex items-center justify-center'><img src={settings} alt="" srcset="" /></div>
            <div className='bg-light_navy rounded-full w-12 h-12 flex items-center justify-center'><img src={help} alt="" srcset="" /></div>
            <div className='bg-light_navy rounded-full w-12 h-12 flex items-center justify-center'><img src={avatar} alt="" srcset="" /></div>
          </div>
        </header>

        {/* wlcm prompt */}
        <div className='my-4'>
          <div className="wlcm text-3xl font-semibold">Welcome back, Ritu</div>
          <div className="subtitle text-xs mt-2 ml-1">You are doing great, keep it up...</div>
        </div>

        <div className='flex flex-row gap-16'>
          <div className='activity'>
            <div className='font-medium text-xl'>Activity</div>
            <Actvty />
          </div>

          <div className='courses'>
            <div className='text-xl font-medium'>Courses</div>
            <Essential_crd/>
            <Adv_crd/>
          </div>

          <div className='ranking'>
            <div className="title text-xl font-medium">Credit score ranking</div>
          </div>
        </div>

        <div className='mt-4'> {}
          <div className='flex items-center justify-between'>
            <div className='font-medium text-xl'>Continue classes</div>
            <div className='text-xs text-blue-500'><u><a href="">See all</a></u></div>
          </div>
        </div>
        
     </div>
    </>
  );
}

export default Dashboard;
