const Cajero = require("../../../domain/models/cajero/cajero.model");
const Product = require("../../../domain/models/product/product.model");
const jwt = require("jsonwebtoken");
require("../../../conectDB/database");
const config = require("../../../config");
const Bcrypt = require("bcrypt");

cajeroService = {};

cajeroService.login = async (req, res) => {
  const { email, password } = req.body;
  const cajero = await Cajero.findOne({ email });
  const validpassword = await Bcrypt.compare(password, cajero.password);
  if (!cajero) {
    return res.status(401).send({ Message: "the email doesn't exist" });
  }
  if (!validpassword) {
    return res.status(401).send({ Message: "invalid password" });
  }
  const token = jwt.sign({ id: cajero._id }, config.cajerosecret);

  res.status(200).json({ token });
};

cajeroService.createProduct = async (req, res) => {
  const { productName, productCost, stock } = req.body;
  const newProduct = new Product({productName, productCost, stock});
  const nameProduct =  await Product.findOne({productName})
  console.log(nameProduct);
  if(newProduct.productName === nameProduct){
      return res.status(401).json({"Message":"The product exist"})
  }
  await newProduct.save();
};

cajeroService.showProducts = async (req, res) => {
    const products = await Product.find()
    res.json({products})
}

cajeroService.verifyToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "Unathorize request",
    });
  }

  const token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorize request");
  }

  const payload = jwt.verify(token, config.cajerosecret);
  console.log(payload);
  req.adminId = payload._id;
  next();
};

module.exports = cajeroService;
