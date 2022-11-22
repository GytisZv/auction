const mainBox = document.getElementById('box');
import { post, get } from './http.js';
import timeLeft from './timeleft.js';

async function getItems() {
  const data = await get('http://localhost:3000/items');
  console.log(data);
  displayItems(data.items);
}
getItems();

async function displayItems(data) {
  console.log('data:', data);

  data.forEach((e) => {
    let timeMessage = 'Auction ends in : ';
    const timeleft = timeLeft(e.end_date);
    if (timeleft === 'ended') {
      timeMessage = 'Auction has ';
    }

    mainBox.innerHTML += `<div class='card'>
    <img src="${e.image}" alt=""> 
    <h3>${e.item}</h3>
    <p>Current bid=$ ${e.starting_bid}</p>
    <p>Sold by : ${e.owner}</p>
    <p>${timeMessage}${timeleft}</p>
    <a href="./pages/singlePage.html?id=${e._id}">Select this one</a>
    </div>`;
  });
}
