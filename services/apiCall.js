export const makeRequest = (url, method, body) => {
  return fetch(url, {
    method, 
    body: (method === 'GET' || method === 'DELETE') ? null : JSON.stringify(JSON.parse(body)),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    } 
  })
    .then(res => res.json());
};
