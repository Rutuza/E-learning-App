// import Dashboard from './Layout/Dashboard';
// import Home from './Pages/Home';
import './index.css'
import demoicon from './assets/svg/demoicon.svg';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="flex">
      <div className={`w-72 h-screen bg-violet-950 text-white p-5 pt-8`}>
        <img src="" alt="" />

        <div className='flex items-center gap-x-4'>
          <img src={demoicon} alt="" />
          <h1 className={`text-white origin-left font-semibold text-xl`}>Coderoom</h1>
        </div>
      </div>
      <div className='p-7 text-2xl font-semibold flex-1 h-screen duration-300'><h1>Home Page</h1></div>
    </div>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}>
            <Route path='home' element={<Home/>}>
              <Route path='event' element={<div>event</div>}></Route>
            </Route>
            <Route path='contact' element={<div>hi</div>}></Route>
          </Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
