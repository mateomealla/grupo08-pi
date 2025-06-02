var express = require("express");
var router = express.Router();

const controler = require("../controller/productController");

router.get("/details/:id", controler.detalle);
router.get("/search", controler.search)
router.get("/productadd", controler.productAdd);
router.post("/productadd/", controler.productAddCreate);


router.post("/details/:id/comentario", controler.agregarComentario);

module.exports = router;
