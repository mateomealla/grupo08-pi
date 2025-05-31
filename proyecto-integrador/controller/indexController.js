const base = require("../db/base");
const db = require("../database/models");
const Producto = db.Producto;
const op = db.Sequelize.Op;

const controladorIndex = {
  index: function (req, res) {
    Producto.findAll({
      include:[{association: "usuario", include: [{association: "comentarios"}]}],
    }).then(function (productos) {
      return res.render("index", {usuario: base.usuario, logueado: true, productos: productos});
      // return res.send(productos);
    }
    ).catch(function (error) {
      return error;
    });
  }
};

module.exports = controladorIndex;
