'use strict';

function validate() {
  let password = document.querySelector('#password');
  let cpassword = document.querySelector('#cpassword');
  let phone = document.querySelector('#phone');
  
  if (cpassword.value !== password.value) {
    alert('please write correct password');
    return false;
  } else if (phone.value.trim().length!==10) {
    alert('please write correct number');
    return false;
  } else {
    return true;
  }
}
