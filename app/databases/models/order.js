"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Car);
      Order.belongsTo(models.User, {
        targetKey: "id",
        foreignKey: "userId",
      });
    }
  }

  Order.init(
    {
      totalPrice: DataTypes.INTEGER,
      startRentAt: DataTypes.DATE,
      finishRentAt: DataTypes.DATE,
      status: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
      carId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
