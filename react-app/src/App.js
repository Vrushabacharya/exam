

import Navbar from './components/Navbar';

import React, { useState } from "react";
import Add from './components/Add';



function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
     
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Add/>
     
      
    </>
  );
}

export default App;
