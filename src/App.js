import './App.css';
import About from './components/About';
import FormText from './components/FormText';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path='/' element={<FormText heading="Try It Now!!" />} />
            <Route path='/about' element={<About mode={mode}/>} />
          </Routes>
        </div >
      </BrowserRouter>
    </>
  );
}

export default App;
