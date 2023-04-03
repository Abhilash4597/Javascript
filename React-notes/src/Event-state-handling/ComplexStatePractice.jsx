import React, { useState } from 'react';
import './HandleEvent.css';

export default function ComplexStatePractice() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState({
    fName: '',
    lName: '',
    email: '',
  });

  // function handleContact(e) {
  //   const { name, value } = e.target;

  //   setContact(preValue => {
  //     if (name === 'fName') {
  //       return {
  //         fName: value,
  //         lName: preValue.lName,
  //         email: preValue.email,
  //       };
  //     } else if (name === 'lName') {
  //       return {
  //         fName: preValue.fName,
  //         lName: value,
  //         email: preValue.email,
  //       };
  //     } else if (name === 'email') {
  //       return {
  //         fName: preValue.fName,
  //         lName: preValue.lName,
  //         email: value,
  //       };
  //     }
  //   });
  // }

  // # Optimizing the above function code

  function handleContact(e) {
    const { name, value } = e.target;

    setContact(preValue => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  // # On form submission

  function handleClick(e) {
    e.preventDefault();
    setFullName(contact.fName + ' ' + contact.lName);
    setEmail(contact.email);
  }

  return (
    <div className="container">
      <h1>Hello {fullName}</h1>
      <p>{email}</p>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleContact}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleContact}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleContact}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
