const http = require("http");
const app = require("./config/app")
require("./config/database")("localhost/alurapic");

http.createServer(app).listen(3000, function () {
    console.log("Server iniciado");
})