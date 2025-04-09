var express = require("express");
var router = express.Router();

const controler = require("../controller/productController");

router.get("/", controler.index);
router.get("/producto/:nombre", controler.search)

module.exports = router;
