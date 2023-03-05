'use strict';

// let messH1 = document.querySelector('.mesH1');
// console.log(messH1.innerHTML = `<h1>hello</h1>`)
// messH1.innerHTML = `<p>Hello ${name.value}</p>`;

function validate() {
  let password = document.querySelector('#password');
  let name = document.querySelector('#name');
  let email = document.querySelector('#email');
  let cpassword = document.querySelector('#cpassword');
  let phone = document.querySelector('#phone');
  
  if (cpassword.value !== password.value) {
    alert('please write correct password');
    return false;
  } else if (phone.value.trim().length!==10) {
    alert('please write correct number');
    return false;
  }
}
