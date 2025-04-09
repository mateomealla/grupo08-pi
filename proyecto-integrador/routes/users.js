var express = require('express');
var router = express.Router();

const controler = require("../controller/userController")


router.get("/login", controler.login);
router.get("/profile", controler.profile);

module.exports = router;
