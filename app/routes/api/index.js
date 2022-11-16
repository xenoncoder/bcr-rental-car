const express = require("express").Router;
const router = express();

const routerUser = require("./userApiRoute");
const routerCar = require("./carApiRoute");
const routerOrder = require("./orderApiRoute");

router.use("/users", routerUser);
router.use("/cars", routerCar);
router.use("/orders", routerOrder);

module.exports = router;
