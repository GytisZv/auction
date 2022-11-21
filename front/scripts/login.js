const inputs = document.querySelectorAll('input');
const buttons = document.querySelectorAll('button');
const errorDivs = document.querySelectorAll('.error');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');

const post = async (data, url) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const res = await fetch('http://localhost:3000/' + url, options);
  return await res.json();
};

buttons[0].onclick = async () => {
  console.log('mygtukas veikia');
  const user = {
    email: usernameField.value,
    password: passwordField.value,
  };
  console.log('user ===', user);
  const res = await post(user, 'login');

  if (res.error) return (errorDivs[0].innerHTML = res.message);
  errorDivs[0].innerHTML = '';
  console.log(res);
};
