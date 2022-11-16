"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      Car.hasMany(models.Order, {
        sourceKey: "id",
        foreignKey: "carId",
      });
    }
  }

  Car.init(
    {
      name: DataTypes.STRING,
      category: {
        type: DataTypes.ENUM,
        values: ["small", "medium", "large"],
      },
      price: DataTypes.INTEGER,
      status: {
        type: DataTypes.ENUM,
        values: ["true", "false"],
      },
      image: DataTypes.STRING,
      startRentAt: DataTypes.DATE,
      finishRentAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Car",
    }
  );
  return Car;
};
