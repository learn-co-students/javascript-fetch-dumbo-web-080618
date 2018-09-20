const app = "I don't do much.";

const token = '338f06af182b4502b9bb97cbdb6fe46c6d03e542';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(resp => resp.json())
  .then(json => console.log(json));
