const base = require("../db/base");
const db = require("../database/models");
const User = db.Usuario;
const controladorUser = {
    login: function (req, res) {
      // let relacion = {
      //       include: [
      //         {association: "productos", include: [{association: "comentarios"}]},
      //       ]
      //   }
      //   User.findByPk(1, relacion)
      //       .then(function(resultados){
      //           return res.send(resultados)
      //       })
      //       .catch(function(error){
      //           return res.send(error);
      //       })
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