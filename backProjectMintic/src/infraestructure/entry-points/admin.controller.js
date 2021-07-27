const { Router } = require("express");
const router = Router();
const adminController = require("../driven-adapters/admin/admin.service")
const { jwt } = require('jsonwebtoken')

router.post("/login", (req, res) => {
  res.send("login");
});

router.post("/signup", adminController.saveAdmin);

module.exports = router;
