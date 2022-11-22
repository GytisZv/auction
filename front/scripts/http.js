export const post = async (data, url) => {
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
export const get = async (url) => {
  const res = await fetch(url);
  return await res.json();
};
