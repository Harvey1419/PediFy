const { Router } = require("express");
const router = Router();
const adminService = require("../driven-adapters/admin/admin.service");

router.post("/signup", adminService.saveAdmin);

router.post("/login", adminService.singin);

router.post("/createCajero", adminService.verifyToken, adminService.createCashier);

router.get("/generalshow", adminService.verifyToken, adminService.generalShow);

module.exports = router;
