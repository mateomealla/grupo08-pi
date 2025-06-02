var express = require('express');
var router = express.Router();

const controler = require("../controller/userController")


router.get("/login", controler.loginShow);
router.post("/login/", controler.loginCreate);

router.get("/profile", controler.profile);

router.get("/register", controler.registerShow);
router.post("/register/", controler.registerCreate);

router.post("/logout", controler.logout);



module.exports = router;
