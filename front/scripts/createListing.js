const item_name = document.getElementById('item_name');
const starting_bid = document.getElementById('starting_bid');
const image = document.getElementById('image');
const start_date = document.getElementById('start_date');
const owner = document.getElementById('owner');
const end_date = document.getElementById('end_date');
const create_button = document.getElementById('btnCreate');
const form = document.getElementById('form');
const errorDiv = document.getElementById('error');
import { post, get } from './http.js';

const initPage = () => {
  if (sessionStorage.getItem('WhoLoggedIn') == null) {
    form.style.display = 'none';
    errorDiv.style.display = 'inline-block';
    errorDiv.innerHTML = '<h3>You need to log in to create a listing</h3>';
  } else {
    errorDiv.innerHTML = 'Please create a listing';
  }
};
initPage();
create_button.addEventListener('click', async (e) => {
  e.preventDefault();
  const randomId = Math.floor(Math.random() * 1000000);
  const item = {
    id: randomId,
    item_name: item_name.value,
    starting_bid: starting_bid.value,
    image: image.value,
    start_date: start_date.value,
    owner: sessionStorage.getItem('WhoLoggedIn'),
    end_date: end_date.value,
  };
  console.log('item ===', item);

  const res = await post(item, 'createItem');

  if (res.ok === 'ok') {
    window.location.href = '../index.html';
  }
});
