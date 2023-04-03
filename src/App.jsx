import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/location' element={<Location />} />
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </>
  )
}

export default App
