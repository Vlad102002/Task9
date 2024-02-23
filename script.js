let btn1 = document.querySelector('.btn1');
let email = document.querySelector('.em');
let namee = document.querySelector('.nm');

btn1.addEventListener('click', function () {
  if (email.value !== '' && namee.value !== '') {
    email.value = '';
    namee.value = '';
  } else {
    alert('Please enter a valid email address');
  }
});
