const token = '7515b6e3e00247365414638eb1e1c918417391c5'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
