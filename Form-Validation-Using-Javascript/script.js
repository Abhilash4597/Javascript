'use strict';

function validate() {
  let password = document.querySelector('#password');
  let cpassword = document.querySelector('#cpassword');
  let phone = document.querySelector('#phone');

  if (cpassword.value !== password.value) {
    alert('please write correct password');
    cpassword.style.border = '1px solid red';
    return false;
  } else if (phone.value.trim().length !== 10) {
    alert('please write correct number');
    phone.style.border = '1px solid red';
    return false;
  } else {
    cpassword.style.border = '1px solid black';
    phone.style.border = '1px solid black';
    return true;
  }
}
