import Dashboard from './Layout/Dashboard';
import Home from './Pages/Home';
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}>
            <Route path='home' element={<Home/>}>
              <Route path='event' element={<div>event</div>}></Route>
            </Route>
            <Route path='contact' element={<div>hi</div>}></Route>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
