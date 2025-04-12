const base = require("../db/base");

const controladorUser = {
    login: function (req, res) {
      return res.render("login", {});
    },
    profile: function (req, res) {
        return res.render("profile", {usuario: base.usuario, id: req.params.id, productos: base.productos});
      },
    register: function (req, res) {
        return res.render("register", {});
      }
  };
  
  
  module.exports = controladorUser;