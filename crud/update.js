require("../connection");

const User = require("../models/Users");

const someFunction = async () => {
  const user = await User.findOne({ username: "donna" });
  console.log(user);
  user.password = "minuevacontraseña";
  await user.save();
};

async function updateUsers() {
  const user = await User.updateOne(
    {
      username: "fazt",
    },
    {
      password: "contraseñasegura",
    }
  );

  console.log(user);
}

const otherFunction = async () => {
  const user = await User.findOneAndUpdate(
    { username: "luciana" },
    { name: "lucianaammmn" },
    { new: true }
  );

  console.log(user);
};

otherFunction();
