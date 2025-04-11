var express = require("express");
var router = express.Router();

const controler = require("../controller/productController");

router.get("/", controler.index);
// router.get("/:nombre", controler.search)
router.get("/productadd", controler.productAdd);

module.exports = router;
