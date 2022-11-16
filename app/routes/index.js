const express = require("express").Router;
const router = express();
const routerAPI = require("./api");

router.use("/api", routerAPI);

module.exports = router;
