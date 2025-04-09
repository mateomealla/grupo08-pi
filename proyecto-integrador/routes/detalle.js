var express = require("express");
var router = express.Router();

const controler = require("../controller/productController");

router.get("/", controler.index);


module.exports = router;
