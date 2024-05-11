import Dashboard from './Layout/Dashboard';
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
