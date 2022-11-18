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
}
getItems();
