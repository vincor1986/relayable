const xss = require("xss");
console.log(xss("<a href='javascript:alert(1)'>Click me</a>"));
