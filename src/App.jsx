import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import CardDetail from './Components/CardDetails/CardDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<CardDetail/>}/>
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/episodes/:id' element={<CardDetail />} />
        <Route path='/location' element={<Location />} />
        <Route path='/location/:id' element={<CardDetail />} />
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </>
  )
}

export default App
