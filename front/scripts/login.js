const buttons = document.querySelectorAll('button');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const errorDiv = document.getElementById('error');
const form = document.getElementById('form');
import { post, get } from './http.js';

// const post = async (data, url) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   };

//   const res = await fetch('http://localhost:3000/' + url, options);
//   return await res.json();
// };
const initPage = () => {
  if (sessionStorage.getItem('WhoLoggedIn') !== null) {
    form.style.display = 'none';
    errorDiv.style.display = 'inline-block';
    errorDiv.innerHTML = `You are already logged in, ${sessionStorage.getItem(
      'WhoLoggedIn'
    )}`;
  }
};
initPage();
buttons[0].addEventListener('click', async (e) => {
  e.preventDefault();
  const user = {
    email: usernameField.value,
    password1: passwordField.value,
  };
  console.log('user ===', user);
  const res = await post(user, 'login');
  console.log('res ===', res.message);
  if (!res.error) {
    window.alert(`Prisijungta`);
    sessionStorage.setItem('WhoLoggedIn', `${user.email}`);
    window.location.href = '../index.html';
  }
  console.log('gavome duomenis atgal=', res.data);
});
