require("../connection");

const User = require("../models/Users");

async function getUser() {
  const user = await User.findOne({ username: "danixsa" });
  console.log(user);
}

getUser();
