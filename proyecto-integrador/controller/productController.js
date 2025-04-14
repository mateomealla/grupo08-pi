const base = require("../db/base");

const controlador = {
  index: function (req, res) {
    return res.render("product", {usuario: base.usuario, logueado: true, id: req.params.id, productos: base.productos});
  },
  search: function (req, res) {
    return res.render("search-results", {usuario: base.usuario, logueado: true, id: req.params.id, productos: base.productos});
  },
  productAdd: function (req, res) {
    return res.render("product-add", {usuario: base.usuario, logueado: true});
  },
};

module.exports = controlador;
