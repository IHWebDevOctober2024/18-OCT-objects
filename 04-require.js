console.clear();
const users = require("./users.json"); // this works only when we are using nodejs

users.forEach((user) => {
  console.log(user.name);
});
