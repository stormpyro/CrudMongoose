require("./connection");
const Product = require("./models/Product");

const main = async () => {
  const product = new Product({
    name: "mouse",
    description: "gaming xlr8",
    price: 45.99,
  });
  const productSaved = await product.save();
  console.log(productSaved);
};

main();
