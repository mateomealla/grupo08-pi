module.exports = function (sequelize, DataTypes) {
  let alias = "Producto";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
    },
    imagen: {
      type: DataTypes.STRING,
    },
    imagen2: {
      type: DataTypes.STRING,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    descripcionCorta: {
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
    tableName: "productos",
    timestamps: false,
    // underscored: true,
  };
  let Producto = sequelize.define(alias, cols, config);
  Producto.associate = function (models) {
    Producto.belongsTo(models.Usuario, {
      as: "usuario",
      foreignKey: "idUsuario",
    });
    Producto.hasMany(models.Comentario, {
      as: "comentarios",
      foreignKey: "idProducto",
    });
  };
  return Producto;
};
