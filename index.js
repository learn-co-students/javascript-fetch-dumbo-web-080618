const app = "I don't do much.";
const token = 'ec58d7ed51ab438fd15eaa65943e539aed0d9b89' 
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));