const express = require("express").Router;
const router = express();
const CarController = require("../controllers/carControllers");

router.get("/", CarController.getHomepage);

module.exports = router;
