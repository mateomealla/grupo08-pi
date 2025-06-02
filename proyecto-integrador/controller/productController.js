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
    return res.render("product-add")
  },
  productAddCreate: function (req, res) {
    // return res.render("product-add");
    let nombre = req.body.productName;
    let imagen1 = req.body.productImage;
    let imagen2 = req.body.productImage2;
    let descripcion = req.body.productDescription;
    let descripcionC = req.body.productDescriptionC;
    let idUsuario = req.session.usuario.id;

    // if (
    //   req.body.email == "" ||
    //   req.body.usuario == "" ||
    //   req.body.fecha == "" ||
    //   req.body.nroDocumento == ""
    // ) {
    //   return res.render("register", {
    //     error: "Por favor, complete todos los campos",
    //   });
    // }
    // if (req.body.contraseña.length < 3 || req.body.contraseña == "") {
    //   return res.render("register", {
    //     error: "La contraseña debe tener al menos 3 caracteres",
    //   });
    // }
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
        return res.redirect("/");
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
        if (producto == undefined) {
          return res.send("No existe ese producto.");
        }

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
      return res.redirect("/user/login");
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
