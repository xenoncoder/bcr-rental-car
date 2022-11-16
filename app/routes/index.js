const express = require("express").Router;
const router = express();
const routerCar = require("./car");
const routerAPI = require("./api");

router.use("/", routerCar);
router.use("/api", routerAPI);

module.exports = router;
