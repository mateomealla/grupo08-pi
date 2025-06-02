const db = require("../database/models");
const Producto = db.Producto;
const op = db.Sequelize.Op;

const controladorIndex = {
  index: function (req, res) {
    Producto.findAll({
      include:[{association: "usuario", include: [{association: "comentarios"}]}],
    }).then(function (productos) {
      // return res.send(req.session.usuario);
      return res.render("index", {productos: productos});
      // return res.send(productos);
    }
    ).catch(function (error) {
      return error;
    });
  }
};

module.exports = controladorIndex;
