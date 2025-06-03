const db = require("../database/models");
const User = db.Usuario;
const bcryptjs = require("bcryptjs");
const Producto = db.Producto;
const Comentario = db.Comentario;
const op = db.Sequelize.Op;

const controladorUser = {
  loginShow: function (req, res) {
    return res.render("login", {
      error: undefined,
    });
  },
  loginCreate: function (req, res) {
    let userInfo = {
      email: req.body.email,
      password: req.body.contraseña,
      recordarme: req.body.recordarme,
    };

    User.findOne({ where: [{ email: userInfo.email }] })
      .then(function (user) {
        if (user == undefined) {
          return res.render("login", {
            error: "El email no está registrado",
          });
        }

        const check = bcryptjs.compareSync(userInfo.password, user.contraseña);

        if (check == false) {
          return res.render("login", {
            error: "La contraseña es incorrecta",
          });
        } else {
          req.session.usuario = user;
        }

        if (userInfo.recordarme != undefined) {
          res.cookie("usuario", user, { maxAge: 1000 * 60 * 60 }); // 1 hora
        }

        return res.redirect("/user/profile");
      })
      .catch(function (err) {
        return res.send(err);
      });
  },
  profile: function (req, res) {
    if (req.session.usuario == undefined) {
      return res.redirect("/user/login");
    }

    Producto.findAll({
      where: { idUsuario: req.session.usuario.id },
      include: [{ association: "comentarios" }],
    })
      .then(function (productos) {
        User.findAll({
          where: { id: req.session.usuario.id },
          include: [{ association: "comentarios" }],
        })
          .then(function (usuarios) {
            res.render("profile", {
              productos: productos,
              comentarios: usuarios[0].comentarios,
            });
          })
          .catch(function (error) {
            return res.send(error);
          });
      })
      .catch(function (error) {
        return res.send(error);
      });
  },

  registerCreate: function (req, res) {
    let email = req.body.email;
    let username = req.body.usuario;
    let password = req.body.contraseña;
    let fechaNac = req.body.fecha;
    let dni = req.body.nroDocumento;
    let perfil = req.body.fotoPerfil;

    if (
      req.body.email == "" ||
      req.body.usuario == "" ||
      req.body.fecha == "" ||
      req.body.nroDocumento == ""
    ) {
      return res.render("register", {
        error: "Por favor, complete todos los campos",
      });
    }
    if (req.body.contraseña.length < 3 || req.body.contraseña == "") {
      return res.render("register", {
        error: "La contraseña debe tener al menos 3 caracteres",
      });
    }
    User.findOne({
      where: { email: req.body.email },
    })
      .then(function (results) {
        if (results) {
          return res.render("register", {
            error: "El email ya está registrado",
          });
        } else {
          let usuario = {
            nombre: username,
            email: email,
            contraseña: bcryptjs.hashSync(password, 10),
            fecha: fechaNac,
            dni: dni,
            perfil: perfil,
          };
          User.create(usuario)
            .then(function (results) {
              return res.redirect("/user/login");
            })
            .catch(function (err) {
              return res.send(err);
            });
        }
      })
      .catch(function (err) {
        return res.send(err);
      });
  },
  registerShow: function (req, res) {
    return res.render("register", {
      error: undefined,
    });
  },
  logout: function (req, res) {
    req.session.destroy();
    res.clearCookie("usuario");
    return res.redirect("/");
  },

  profileById: function (req, res) {
    let id = req.params.id;

    User.findByPk(id, {
      include: [{ association: "productos" }, { association: "comentarios" }],
    })
      .then(function (otroUsuario) {
        return res.render("otroProfile", {
          otroUsuario: otroUsuario,
          productos: otroUsuario.productos,
          comentarios: otroUsuario.comentarios,
        });
      })
      .catch(function (error) {
        return res.send(error);
      });
  },
};

module.exports = controladorUser;
