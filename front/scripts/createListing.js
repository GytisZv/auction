const item_name = document.getElementById('item_name');
const starting_bid = document.getElementById('starting_bid');
const image = document.getElementById('image');
const start_date = document.getElementById('start_date');
const owner = document.getElementById('owner');
const end_date = document.getElementById('end_date');
const create_button = document.getElementById('btnCreate');
const form = document.getElementById('form');

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

create_button.addEventListener('click', async (e) => {
  e.preventDefault();
  const randomId = Math.floor(Math.random() * 1000);
  const item = {
    id: randomId,
    item_name: item_name.value,
    starting_bid: starting_bid.value,
    image: image.value,
    start_date: start_date.value,
    owner: owner.value,
    end_date: end_date.value,
  };
  console.log('item ===', item);

  const res = await post(item, 'createItem');
  console.log('res ===', res);
  if (res.ok === 'ok') {
    window.location.href = '../index.html';
  }
});
