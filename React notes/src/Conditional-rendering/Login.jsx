import React from 'react'
import '../Conditional.css'

export default function Login() {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Log In</button>
    </form>
  );
}
