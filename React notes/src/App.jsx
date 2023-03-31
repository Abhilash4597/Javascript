import { useState } from 'react';
import StylePractice from './Components/StylePractice';


import './App.css'

function App() {
  const name = 'Abhilash';
  const time = new Date();
  const year = time.getFullYear();

  const customCSS = {
    color: 'red',
    fontSize: '2rem',
    backgroundColor: 'black',
  };
  return (
    <>
      <StylePractice></StylePractice>
      <div className="App">
        <p style={customCSS}>Created by {name}</p>
        <p style={{ color: 'green' }}>Copyright {year}</p>
      </div>
    </>
  );
}

export default App
