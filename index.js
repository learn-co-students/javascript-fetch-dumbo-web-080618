const app = "I don't do much.";

const token = "6b144d4bf1c4608afa7bd0248732dca0cc508f68"

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }

})
  .then(res => res.json())
  .then(json => console.log(json))
