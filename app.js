require("dotenv").config();

const cors = require("cors");
const path = require("path");
const express = require("express");

const router = require("./app/routes");

const app = express();
const fileUpload = require("express-fileupload");
const { SERVER_HOST, SERVER_PORT } = process.env;

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "2mb", extended: true }));
app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");

app.use(fileUpload());
app.use(router);

app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`[nodemon] starting server on ${SERVER_HOST}:${SERVER_PORT}`);
});

module.exports = app;
