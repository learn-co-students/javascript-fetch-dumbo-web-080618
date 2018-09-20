const app = "I don't do much.";

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(resp => resp.json())
  .then(json => console.log(json));
