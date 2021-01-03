const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/mywebstore";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("open", (_) => {
  console.log("Database is connected to: ", uri);
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
