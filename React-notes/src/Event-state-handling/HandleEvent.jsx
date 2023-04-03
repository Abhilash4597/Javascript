import React, { useState } from 'react';
import './HandleEvent.css';

export default function HandleEvent() {
  const [text, setText] = useState('Hello');
  const [mousedOver, setMousedOver] = useState(false);

  function handleClick() {
    setText('Submitted');
  }
  
  function handleMouseOver() {
    setMousedOver(true);
  }
  
  function handleMouseOut() {
    setMousedOver(false);
  }

  return (
    <div className="container">
      <h1>{text}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: mousedOver?'black':'white' }}
      >
        Submit
      </button>
    </div>
  );
}
