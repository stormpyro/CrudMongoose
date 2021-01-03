require("../connection");

const Product = require("../models/Product");

const someFunction = async () => {
  const result = await Product.findOneAndDelete({ name: "mouse" });
  console.log(result);
};
someFunction();
