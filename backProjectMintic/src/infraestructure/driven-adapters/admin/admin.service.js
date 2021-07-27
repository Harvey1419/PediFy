const Admin = require("../../../domain/models/administrator/admin.model");
const jwt = require("jsonwebtoken");
require("../../../conectDB/database");
const config = require("../../../config");
const Bcrypt = require("bcrypt");
adminService = {};

adminService.saveAdmin = async (req, res) => {
  req.body.password = Bcrypt.hashSync(req.body.password, 10);
  const { email, password } = req.body;
  const newAdmin = new Admin({ email, password });
  await newAdmin.save();
  console.log(newAdmin);
  const token = jwt.sign({ id: newAdmin._id }, config.secret, {
    expiresIn: 60 * 20,
  });
  return res.status(200).json({ token });
};
module.exports = adminService;
