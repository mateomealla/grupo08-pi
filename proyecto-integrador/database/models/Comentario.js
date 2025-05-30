module.exports = function (sequelize, DataTypes) {
  let alias = "Comentario";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idProducto: {
      type: DataTypes.INTEGER,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
    },
    texto: {
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
    tableName: "comentarios",
    timestamps: false,
    // underscored: true,
  };
  let Comentario = sequelize.define(alias, cols, config);
  Comentario.associate = function (models) {
    Comentario.belongsTo(models.Usuario, {
      as: "usuario",
      foreignKey: "idUsuario",
    });
    Comentario.belongsTo(models.Producto, {
      as: "producto",
      foreignKey: "idProducto",
    });
  };
  return Comentario;
};
