const base = require("../db/base");

const controlador = {
  index: function (req, res) {
    return res.render("product", {usuario: base.usuario, id: req.params.id, productos: base.productos});
  },
  search: function (req, res) {
    return res.render("search-results", {usuario: base.usuario, id: req.params.id, productos: base.productos});
  },
  productAdd: function (req, res) {
    return res.render("product-add", {usuario: base.usuario});
  },
};

module.exports = controlador;
