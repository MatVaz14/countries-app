const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tag: {
        type: DataTypes.STRING(3),
        allowNull: false,
        unique: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      region: {
        type: DataTypes.STRING
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.STRING,
      },
      timezones: {
        type: DataTypes.STRING
      },
      population: {
        type: DataTypes.INTEGER,
      },
      maps: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
