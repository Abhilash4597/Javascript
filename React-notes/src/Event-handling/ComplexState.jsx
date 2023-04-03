import React, { useState } from 'react';
import './HandleEvent.css';

export default function ComplexState() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [mainText, setMainText] = useState('');

  function handleChangeFname(e) {
    setFname(e.target.value);
  }

  function handleChangeLname(e) {
    setLname(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setMainText(fname +' '+ lname)
  }

  return (
    <div className="container">
      <h1>
        Hello {mainText}
      </h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChangeFname}
          value={fname}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChangeLname}
          value={lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
