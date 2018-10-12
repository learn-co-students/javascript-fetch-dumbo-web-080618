const app = "I don't do much.";

// fetch('https://api.github.com/repos/jquery/jquery/commits')
//   .then(res => res.json())
//   .then(json => console.log(json));
//
//   fetch('https://api.github.com/user/repos').
//     then(res => res.json()).
//     then(json => console.log(json))

    const token = '5c21ddfa61b1143b3ca4790172ac8196a37cd031'
    fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${token}`
      }
    }).then(res => res.json()).then(json => console.log(json));
