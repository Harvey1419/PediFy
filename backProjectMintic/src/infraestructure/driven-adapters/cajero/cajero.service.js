const Cajero = require("../../../domain/models/cajero/cajero.model");
const Product = require("../../../domain/models/product/product.model");
const Facture = require("../../../domain/models/facture/facture.model");
const jwt = require("jsonwebtoken");
require("../../../conectDB/database");
const config = require("../../../config");
const Bcrypt = require("bcrypt");

let cajeroService = {};

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
  const token = jwt.sign(
    { id: cajero._id },
    config.cajerosecret /* {
    expiresIn: 60 * 20,
  } */
  );

  res.status(200).json({ token });
};

cajeroService.createProduct = async (req, res) => {
  const { productName, productCost, stock } = req.body;
  const newProduct = new Product({ productName, productCost, stock });
  const nameProduct = await Product.findOne({ productName });
  console.log(nameProduct);
  if (newProduct.productName === nameProduct) {
    return res.status(401).json({ Message: "The product exist" });
  }
  await newProduct.save();
};

cajeroService.pay = async (req, res) => {
  const list = ([
    {
      product: { productName, productPrice },
      quantity,
    },
  ] = req.body);
  console.log(productName);

  const total = list
    .map((x) => {
      a = x.product.productPrice * x.quantity;
      console.log(a);
      return a;
    })
    .reduce((a, b) => {
      return a + b;
    });
  const newFacture = new Facture({ list, total });
  await newFacture.save();
  console.log(newFacture);
  res.json({ list });
  console.log(total);
};

cajeroService.updateQuantity = async (req, res) => {
  const filter = { productName: req.body.name };
  const update = { stock: req.body.quantity };
  await Product.findOneAndUpdate(filter, update, {
    new: true,
  });
  res.json({ Message: "Update Correctly" });
};

cajeroService.showProducts = async (req, res) => {
  const products = await Product.find();
  res.json({ products });
};

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
  req.adminId = payload._id;
  next();
};

module.exports = cajeroService;
