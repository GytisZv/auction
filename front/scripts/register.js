const inputs = document.querySelectorAll('input');
const buttons = document.querySelectorAll('button');
const errorDivs = document.querySelectorAll('.error');

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
  const user = {
    email: inputs[0].value,
    passOne: inputs[1].value,
    passTwo: inputs[2].value,
  };

  const res = await post(user, 'register');

  if (res.error) return (errorDivs[0].innerHTML = res.message);
  errorDivs[0].innerHTML = '';

  console.log(res);
};
