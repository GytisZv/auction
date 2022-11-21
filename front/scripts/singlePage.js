const mainBox = document.getElementById('box');

let params = new URL(document.location).searchParams;
let postID = params.get('id');
console.log('postID ===', postID);

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
async function getItem(id) {
  const data = await http.get(`http://localhost:3000/items/${id}`);
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
