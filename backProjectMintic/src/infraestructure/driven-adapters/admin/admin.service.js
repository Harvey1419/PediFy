const Admin = require("../../../domain/models/administrator/admin.model");
const Cajero = require("../../../domain/models/cajero/cajero.model");
const jwt = require("jsonwebtoken");
require("../../../conectDB/database");
const config = require("../../../config");
const Bcrypt = require("bcrypt");
const { filter } = require("rxjs");

adminService = {};

adminService.saveAdmin = async (req, res) => {
  req.body.password = Bcrypt.hashSync(req.body.password, 10);
  const { email, password } = req.body;
  const newAdmin = new Admin({ email, password });
/*   if (email == newAdmin.email) {
    return res.status(401).send({ Message: "the email already exist" });
  } else  */
    await newAdmin.save();
    console.log(newAdmin);
    const token = jwt.sign({ id: newAdmin._id }, config.secret, {
      expiresIn: 60 * 20,
    });
    return res.status(200).json({ token });
};

adminService.singin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin)
    return res.status(401).send({ Message: "the email doesn't exist" });
  const token = jwt.sign({ id: admin._id }, config.secret, {
    expiresIn: 60 * 20,
  });
  return res.status(200).json({ token });
};

adminService.generalShow = async (req, res) => {
  const cajeros = await Cajero.find();
  console.log(cajeros);
  res.json({ cajeros });
};

adminService.createCashier = async (req, res) => {
  req.body.password = Bcrypt.hashSync(req.body.password, 10);
  const { email, password } = req.body;
  const newCajero = new Cajero({ email, password });
/*   if (email == newCajero.email) {
    return res.status(401).send({ Message: "the email already exist" });
  } */
  await newCajero.save();
  console.log(newCajero);
  const token = jwt.sign({ id: newCajero._id }, config.secret, {
    expiresIn: 60 * 60,
  });
  return res.status(200).json({ token });
};

adminService.verifyToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "Unathorize request",
    });
  }

  const token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorize request");
  }

  const payload = jwt.verify(token, config.secret);
  console.log(payload);
  req.adminId = payload._id;
  next();
};

module.exports = adminService;
