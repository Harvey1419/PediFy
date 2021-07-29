const { Schema, model } = require("mongoose");

const productSchema = Schema({
  productName: String,
  productCost: Number,
  stock: Number
});
module.exports = model("Product", productSchema);
