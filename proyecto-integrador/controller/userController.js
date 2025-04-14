const base = require("../db/base");

const controladorUser = {
    login: function (req, res) {
      return res.render("login", {usuario: base.usuario, logueado: false});
    },
    profile: function (req, res) {
        return res.render("profile", {usuario: base.usuario, logueado: true, id: req.params.id, productos: base.productos});
      },
    register: function (req, res) {
        return res.render("register", {usuario: base.usuario, logueado: false});
      }
  };
  
  
  module.exports = controladorUser;