require("dotenv").config();

const { FIREBASE_STORAGE_BUCKET } = process.env;

const { Car } = require("../../databases/models");
const firebase = require("../../helpers/firebaseHelpers");

class CarAPIController {
  static async addCar(req, res) {
    try {
      const { name, category, price, status } = req.body;
      const searchCar = await Car.findOne({
        where: { name },
        rejectOnEmpty: false,
      });
      if (searchCar) {
        res.status(400).json({
          name: "Bad Request",
          message: "Car Already exists.",
        });
      } else {
        let addImgUrl;
        if (!req.files || Object.keys(req.files).length === 0) {
          addImgUrl = null;
        } else {
          let image = req.files.image;
          let imgName = `car-${Number(new Date())}-${image.name}`;
          imgName = imgName.replace(/ /g, "_");
          addImgUrl = `https://firebasestorage.googleapis.com/v0/b/${FIREBASE_STORAGE_BUCKET}/o/uploads%2Fcars%2F${imgName}?alt=media`;
          await firebase
            .file(`uploads/cars/${imgName}`)
            .createWriteStream()
            .end(req.files.image.data);
        }

        const data = await Car.create({
          name,
          category,
          price,
          status,
          image: addImgUrl,
        });
        res.status(201).json(data);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getCars(req, res) {
    try {
      const data = await Car.findAll({ order: [["id", "ASC"]] });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getCarById(req, res) {
    try {
      const id = req.params.id;
      const car = await Car.findOne({
        where: { id },
        rejectOnEmpty: true,
      });
      res.status(200).json(car);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async editCar(req, res) {
    try {
      const id = req.params.id;
      const { name, category, price } = req.body;
      const searchCar = await Car.findOne({
        where: { name },
        rejectOnEmpty: false,
      });
      if (searchCar) {
        res.status(400).json({
          name: "Bad Request",
          message: "Car Already exists.",
        });
      } else {
        let editImgUrl;
        if (!req.files || Object.keys(req.files).length === 0) {
          editImgUrl = null;
        } else {
          let image = req.files.image;
          let imgName = `car-${Number(new Date())}-${image.name}`;
          imgName = imgName.replace(/ /g, "_");
          editImgUrl = `https://firebasestorage.googleapis.com/v0/b/${FIREBASE_STORAGE_BUCKET}/o/uploads%2Fcars%2F${imgName}?alt=media`;
          await firebase
            .file(`uploads/cars/${imgName}`)
            .createWriteStream()
            .end(req.files.image.data);
        }
        const data = await Car.update(
          {
            name,
            category,
            price,
            image: editImgUrl,
          },
          {
            where: { id },
            returning: 1,
          }
        );
        if (data[0]) {
          res.status(200).json(data[1][0]);
        } else {
          res.status(400).json({
            name: "Not Found",
            message: `Car with id = ${id} is not Found`,
          });
        }
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteCar(req, res) {
    try {
      const id = req.params.id;
      const data = await Car.destroy({
        where: {
          id,
        },
      });
      if (data) {
        res.status(200).json({
          name: "Delete Success",
          message: `Car with id = ${id} has been delete`,
        });
      } else {
        res.status(404).json({
          name: "Not Found",
          message: `Car with id = ${id} is not Found`,
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = CarAPIController;
