const inputs = document.querySelectorAll('input');
const button = document.getElementById('btnRegister');
const errorDivs = document.querySelectorAll('.error');
import { post, get } from './http.js';

button.addEventListener('click', async (e) => {
  e.preventDefault();
  const user = {
    email: inputs[0].value,
    passOne: inputs[1].value,
    passTwo: inputs[2].value,
  };

  const res = await post(user, 'register');

  if (res.error) {
    window.alert(
      `Vartotojas ${user.email} jau yra sukurtas. Prašome pasirinkti kitą vardą`
    );
  } else {
    window.alert(`Vartotojas ${user.email} sukurtas. Sveiki atvyke !`);
    window.location.href = '../index.html';
  }
});
