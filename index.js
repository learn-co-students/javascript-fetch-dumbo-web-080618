const app = "I don't do much.";

const token = 'b959eb929eccfa5c66b597a910ff6970e6e5d376'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
