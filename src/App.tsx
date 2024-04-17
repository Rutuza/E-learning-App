import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Assignments from './pages/Assignments';
import Discussions from './pages/Discussions';
import Attendance from './pages/Attendance';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='mycourses' element={<Courses />}/>
          <Route path='assignments' element={<Assignments/>}/>
          <Route path='discussions' element={<Discussions/>}/>
          <Route path='attendance' element={<Attendance/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  
  )
}

export default App
