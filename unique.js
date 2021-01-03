require("./connection");
const User = require("./models/Users");

async function createUsers() {
  const userOne = new User({
    username: "donna",
    password: "12345",
  });
  await userOne.save();
  const userTwo = new User({
    username: "luciana",
    password: "12345",
  });
  await userTwo.save();
}

createUsers();
