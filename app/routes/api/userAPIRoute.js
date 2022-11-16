const express = require("express").Router;
const router = express();
const UserAPIController = require("../../controllers/userApiController");

router.post("/register", UserAPIController.register);
router.post("/login", UserAPIController.login);

module.exports = router;
