const base = require("../db/base");
const db = require("../database/models");
const User = db.Usuario;
const bcryptjs = require("bcryptjs");
const Producto = db.Producto;


const controladorUser = {
  loginShow: function (req, res) {
    return res.render("login", {
      usuario: base.usuario,
      logueado: false,
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
        if (!user) {
          return res.render("login", {
            usuario: base.usuario,
            logueado: false,
            error: "El email no está registrado",
          });
        }

        const check = bcryptjs.compareSync(userInfo.password, user.contraseña);

        if (!check) {
          return res.render("login", {
            usuario: base.usuario,
            logueado: false,
            error: "La contraseña es incorrecta",
          });
        }
        else{
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

    if (!req.session.usuario) {
        return res.redirect('/user/login');
    }  
    else if (req.session.usuario.id == undefined) {
        return res.redirect('/user/register');
    }
    
  Producto.findAll({
        where: { idUsuario: req.session.usuario.id },
        include: [{ association: "comentarios" }]
    })
    .then(function (productos) {
        res.render("profile", {
            usuario: req.session.usuario,
            logueado: true,
            productos: productos
        });
        // return res.send(req.session.usuario);
    })
    .catch(function (error) {
        return res.send(error);
    });
   
    
   
  },
  
  registerCreate: function (req, res) {
    let error = undefined;
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
        usuario: base.usuario,
        logueado: false,
        error: "Por favor, complete todos los campos",
      });
    }
    if (req.body.contraseña.length < 3 || req.body.contraseña == "") {
      return res.render("register", {
        usuario: base.usuario,
        logueado: false,
        error: "La contraseña debe tener al menos 3 caracteres",
      });
    }
    User.findOne({
      where: { email: req.body.email },
    })
      .then(function (results) {
        if (results) {
          return res.render("register", {
            usuario: base.usuario,
            logueado: false,
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
      usuario: base.usuario,
      logueado: false,
      error: undefined,
    });
  },
};

module.exports = controladorUser;
