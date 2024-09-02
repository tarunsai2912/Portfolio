import React, { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
   }, []);

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage width={width} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
