'use strict';

// let messH1 = document.querySelector('.mesH1');
// console.log(messH1.innerHTML = `<h1>hello</h1>`)
// messH1.innerHTML = `<p>Hello ${name.value}</p>`;
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let cpassword = document.querySelector('#cpassword');
let phone = document.querySelector('#phone');

function validate() {
  if (password.value.trim().length >= 12) {
    alert('length is so long');
    return false;
  } else if (cpassword.value.trim() !== password.value.trim()) {
    alert('please write password');
    return false;
  } else if (phone.value.length !== 10) {
    alert('please write correct number');
    return false;
  }
  return true;
}
