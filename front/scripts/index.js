const mainBox = document.getElementById('box');

const http = {
  get: async (url) => {
    const res = await fetch(url);
    return await res.json();
  },
  post: async (url, data) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(url, options);
    return await res.json();
  },
};
async function getItems() {
  const data = await http.get('http://localhost:3000/items');
  console.log(data);
  displayItems(data.items);
}
getItems();

async function displayItems(data) {
  console.log('data:', data);
  data.forEach((e) => {
    mainBox.innerHTML += `<div class='card'>
    <img src="${e.image}" alt=""> 
    <h3>${e.item}</h3>
    <p>Current bid=$ ${e.starting_bid}</p>
    <p>Sold by : ${e.owner}</p>
    <p>Auction ends at: ${e.end_date.slice(0, 10)}</p>
    <a href="./pages/singlePage.html?id=${e._id}">Select this one</a>
    </div>`;
  });
}
