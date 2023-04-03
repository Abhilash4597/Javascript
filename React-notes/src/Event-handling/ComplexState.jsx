import React, { useState } from 'react';
import './HandleEvent.css';

export default function ComplexState() {
  // const [fname, setFname] = useState('');
  // const [lname, setLname] = useState('');
  const [mainText, setMainText] = useState('');
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
  });

  function handleFullName(e) {
    // const inputValue = e.target.value;
    // const inputName = e.target.name;

    // function handleChangeFname(e) {
    //   setFname(e.target.value);
    // }

    // function handleChangeLname(e) {
    //   setLname(e.target.value);
    // }

    // function handleClick(e) {
    //   e.preventDefault();
    //   setMainText(fname +' '+ lname)
    // }
    // console.log(fullName.fname);

    // # Effective solution
    const { value, name } = e.target;

    setFullName(preValue => {
      if (name === 'fname') {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === 'lname') {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  }

  function handleClick(e) {
    e.preventDefault();
    setMainText(fullName.fname +' '+ fullName.lname)
  }

  return (
    <div className="container">
      <h1>
        Hello {mainText}
      </h1>
      <form onSubmit={handleClick}>
        <input
          name="fname"
          placeholder="First Name"
          onChange={handleFullName}
          value={fullName.fname}
        />
        <input
          name="lname"
          placeholder="Last Name"
          onChange={handleFullName}
          value={fullName.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
