const express = require("express").Router;
const router = express();
const CarAPIController = require("../../controllers/api/carApiControllers");

router.get("/", CarAPIController.getCars);
router.get("/:id", CarAPIController.getCarById);

router.post("/", CarAPIController.addCar);

router.patch("/:id", CarAPIController.editCar);

router.delete("/:id", CarAPIController.deleteCar);

module.exports = router;
