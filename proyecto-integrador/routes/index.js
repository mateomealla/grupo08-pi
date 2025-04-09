var express = require('express');
var router = express.Router();

const controler = require("../controller/indexController")

/* GET home page. */
router.get("/", controler.index);

module.exports = router;
