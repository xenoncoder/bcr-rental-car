require("dotenv").config();
const { SERVER_HOST, SERVER_PORT } = process.env;

const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");
const router = require("./app/routes");

const app = express();

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "2mb", extended: true }));
app.use(cors());

app.use(fileUpload());
app.use(router);

app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(
    `\x1b[32m[nodemon] starting server on ${SERVER_HOST}:${SERVER_PORT}\x1b[0m`
  );
});

module.exports = app;
