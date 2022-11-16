"use strict";
const { hashPassword } = require("../../helpers/bcryptHelper");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order, {
        sourceKey: "id",
        foreignKey: "userId",
      });
    }
  }

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [6],
            msg: "password must be at least 6 characters",
          },
        },
      },
      role: {
        type: DataTypes.ENUM(["Admin", "Customer"]),
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.password = hashPassword(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
