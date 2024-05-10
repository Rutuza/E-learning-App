import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Assignments from './pages/Assignments';
import Discussions from './pages/Discussions';
import Attendance from './pages/Attendance';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
    <div className='flex flex-col'>
      <div className='fixed w-80'>
        <Sidebar />
      </div>
      
       <div className=''>
       <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/mycourses' element={<Courses />}/>
          <Route path='/assignments' element={<Assignments />} />
          <Route path='/discussions' element={<Discussions />} />
          <Route path='/attendance' element={<Attendance />} />
      </Routes>
       </div>
        
    </div>
    
    </BrowserRouter>
  
  )
}

export default App
