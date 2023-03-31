import { useState } from 'react'

import './App.css'

function App() {
  // const [name, setName] = useState('Abhilash');
  // const [year, setYear] = useState(2023);
  const name = 'Abhilash';
  const time = new Date();
  const year = time.getFullYear();

  const customCSS = {
    color: 'red',
    fontSize: '2rem',
    backgroundColor: 'black',
  };
  return (
    <div className="App">
      <p style={customCSS}>Created by {name}</p>
      <p style={{ color: 'green' }}>Copyright {year}</p>
    </div>
  );
}

export default App
