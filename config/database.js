module.exports = function (uri) {

    const mongoose = require("mongoose");

    mongoose.connect("mongodb://" + uri );

    mongoose.connection.on("connected", function () {
        console.log("CONECTADO A DB");
    });

    mongoose.connection.on("disconnected", function () {
        console.log("Desconectado do MongoDB  ");
    });

    process.on("sigint", function () {
        mongoose.connection.close(function () {
            console.log("Conexão fechada");
            process.exit(0)
        });
    });
};