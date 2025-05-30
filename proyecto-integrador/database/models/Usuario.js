module.exports = function (sequelize, DataTypes) {
  let alias = "Usuario";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    contraseña: {
      type: DataTypes.STRING,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    dni: {
      type: DataTypes.INTEGER,
    },
    perfil: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  };
  let config = {
    tableName: "usuarios",
    timestamps: false,
    // underscored: true,
  };
  let Usuario = sequelize.define(alias, cols, config);

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Producto, {
      as: "productos",
      foreignKey: "idUsuario",
    });
    Usuario.hasMany(models.Comentario, {
      as: "comentarios",
      foreignKey: "idUsuario",
    });
  };

  return Usuario;
};
