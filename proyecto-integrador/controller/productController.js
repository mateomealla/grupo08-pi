const base = require("../db/base");
const db = require("../database/models");
const Producto = db.Producto;
const op = db.Sequelize.Op;

const controlador = {
  index: function (req, res) {
    return res.render("product", {usuario: base.usuario, logueado: true, id: req.params.id, productos: base.productos});
  },
  search: function (req, res) {
           Producto.findAll({
            where: [{nombre:{[op.like]: `%${req.query.search}%`}}],include:[{association: "usuario", include: [{association: "comentarios"}]}],
            }).then(function(resultados){
                return res.render("search-results", {usuario: base.usuario, logueado: true, productos: resultados});
                // return res.send(resultados);
            })
            .catch(function(error){
                return res.send(error);
            })
  },
  productAdd: function (req, res) {
    return res.render("product-add", {usuario: base.usuario, logueado: true});
  },
};

module.exports = controlador;
