import React,{useState} from 'react';
import './HandleEvent.css';

export default function FormEvent() {
  const [change, setChange] = useState('');
  const [mainText, setMainText] = useState('');

  function handleChange(e) {
    setChange(e.target.value);
  }

  function handleClick() {
    setMainText(change);
  }

  return (
    <div className="container">
      <h1>Hello {mainText}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
