const express = require("express").Router;
const router = express();

const routerUser = require("./userApiRoutes");
const routerCar = require("./carApiRoutes");
const routerOrder = require("./orderApiRoutes");

router.use("/users", routerUser);
router.use("/cars", routerCar);
router.use("/orders", routerOrder);

module.exports = router;
