require("./connection");
const Product = require("./models/Product");

const product = new Product({
  name: "laptop",
  description: "lenovo thinkpad x1 carbon 6th gen",
  price: 1399.99,
});

product.save((err, document) => {
  if (err) console.log(err);
  console.log(document);
});

console.log(product);
