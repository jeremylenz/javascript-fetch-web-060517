const app = "I don't do much.";

const token = '1d6968f60c2234d2da8539205ee68b86e62ce1f9'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
