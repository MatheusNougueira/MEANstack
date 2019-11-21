const express = require("express");
const app = express();
const consign = require("consign");
const bodyParser = require("body-parser")

app.set("secret", "datebayo");
app.use(express.static("./public"));

//ativando body parser
app.use(bodyParser.json());

//carregar todos os arquivos que estão na pasta
consign({cwd: "app"})
    .include("models")
    .then("api")
    .then("routes/auth.js")
    .then("routes")
    .into(app)

module.exports = app;

