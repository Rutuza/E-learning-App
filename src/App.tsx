import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='flex'>
      <div className='w-60 h-screen bg-light_navy text-white'><Sidebar /></div>
      <div className='w-full bg-midnight_blue text-white text-2xl font-semibold'>Dasboard</div>
    </div>
  
  )
}

export default App
