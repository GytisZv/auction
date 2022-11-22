const mainBox = document.getElementById('box');
import { post, get } from './http.js';

let params = new URL(document.location).searchParams;
let postID = params.get('id');
console.log('postID ===', postID);

async function getItem(id) {
  const data = await get(`http://localhost:3000/items/${id}`);
  console.log(data);
  displayItem(data.items);
}
getItem(postID);

async function displayItem(item) {
  mainBox.innerHTML += `<div class='card'>
    <img src="${item.image}" alt=""> 
    <h3>${item.item}</h3>
    <p>Current bid=$ ${item.starting_bid}</p>
    <p>Sold by : ${item.owner}</p>
    <p>Auction ends at: ${item.end_date.slice(0, 10)}</p>
    </div>`;
}
