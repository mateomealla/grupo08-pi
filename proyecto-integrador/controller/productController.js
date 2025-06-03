const db = require("../database/models");
const Producto = db.Producto;
const op = db.Sequelize.Op;
const Comentario = db.Comentario;

const controlador = {
  search: function (req, res) {
    Producto.findAll({
      where: [{ nombre: { [op.like]: `%${req.query.search}%` } }],
      include: [
        { association: "usuario", include: [{ association: "comentarios" }] },
      ],
    })
      .then(function (resultados) {
        return res.render("search-results", { productos: resultados });
        // return res.send(resultados);
      })
      .catch(function (error) {
        return res.send(error);
      });
  },
  productAdd: function (req, res) {
    return res.render("product-add", {error: undefined});
  },
  productAddCreate: function (req, res) {
    let nombre = req.body.productName;
    let imagen1 = req.body.productImage;
    let imagen2 = req.body.productImage2;
    let descripcion = req.body.productDescription;
    let descripcionC = req.body.productDescriptionC;
    let idUsuario = req.session.usuario.id;

    if (
      nombre == "" ||
      imagen1 == "" ||
      descripcion == ""
    ) {
      return res.render("product-add", {
        error: "Por favor, complete los campos obligatorios",
      });
    }
    let productoadd = {
      idUsuario: idUsuario,
      imagen: imagen1,
      imagen2: imagen2,
      nombre: nombre,
      descripcion: descripcion,
      descripcionCorta: descripcionC,
    };
    Producto.create(productoadd)
      .then(function (results) {
        return res.redirect("/user/profile");
      })
      .catch(function (err) {
        return res.send(err);
      });
  },

  detalle: function (req, res) {
    Producto.findByPk(req.params.id, {
      include: [
        { association: "comentarios", include: [{ association: "usuario" }] },
      ],
    })
      .then(function (producto) {
        res.render("product", {
          producto: producto,
        });
      })

      .catch(function (error) {
        res.send(error);
      });
  },

  agregarComentario: function (req, res) {
    if (req.session.usuario == undefined) {
      return res.render("login", {error: "Debe iniciar sesión para comentar"});
    }

    Comentario.create({
      texto: req.body.texto,
      idProducto: req.params.id,
      idUsuario: req.session.usuario.id,
    })
      .then(function () {
        res.redirect("/product/details/" + req.params.id);
      })
      .catch(function (error) {
        res.send("Error");
      });
  },
};

module.exports = controlador;
