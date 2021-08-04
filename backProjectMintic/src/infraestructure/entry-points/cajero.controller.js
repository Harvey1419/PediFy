const { Router } = require("express");
const router = Router();
const cajeroService  = require("../driven-adapters/cajero/cajero.service");

router.post("/login", cajeroService.login);

router.post("/createProduct",cajeroService.verifyToken, cajeroService.createProduct);

router.get("/showProducts", cajeroService.verifyToken, cajeroService.showProducts);

router.post("/update", cajeroService.verifyToken, cajeroService.updateQuantity);

router.post("/factura", cajeroService.verifyToken, cajeroService.pay)

module.exports = router;