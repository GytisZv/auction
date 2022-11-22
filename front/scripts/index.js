const mainBox = document.getElementById('box');
import { post, get } from './http.js';

async function getItems() {
  const data = await get('http://localhost:3000/items');
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
