const base = require("../db/base");
const db = require("../database/models");
const Producto = db.Producto;
const op = db.Sequelize.Op;
const Comentario = db.Comentario;

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

  detalle: function(req, res) {
  Producto.findByPk(req.params.id, {
    include: [
      { association: "comentarios", include: [{ association: "usuario" }] }
    ]
  })
  .then(function(producto) {
  if (producto == undefined) {
    return res.send("No existe ese producto.");
  }

  var logueado;
  if (req.session.usuario) {
    logueado = true;
  } else {
    logueado = false;
  }

  res.render("product", {
    producto: producto,
    usuario: req.session.usuario,
    logueado: logueado  
  });
})

  .catch(function(error) {
    res.send(error);
  });
},

  agregarComentario: function(req, res) {
    
    if (req.session.usuario == undefined) {
      return res.redirect("/user/login");
    }

    
    Comentario.create({
      texto: req.body.texto,
      idProducto: req.params.id,
      idUsuario: req.session.usuario.id,
      
    })
    .then(function() {
    
      res.redirect("/product/details/" + req.params.id);
    })
    .catch(function(error) {
      res.send("Error");
    });
  },

};

module.exports = controlador;
