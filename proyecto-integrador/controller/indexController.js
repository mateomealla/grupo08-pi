const base = require("../db/base");

const controladorIndex = {
  index: function (req, res) {
    return res.render("index", {usuario: base.usuario, productos: base.productos});
  }
};

module.exports = controladorIndex;
