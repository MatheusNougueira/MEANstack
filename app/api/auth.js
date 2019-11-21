module.exports = function (app) {

    const mongoose = require("mongoose");
    const jwt = require("jsonwebtoken")
    var api = {};
    var model = mongoose.model("Usuario");

    api.autentica = ((req, res) => {
        model
            .findOne({ login: req.body.login, senha: req.body.senha })
            .then(function (usuario) {
                if (!usuario) {
                    res.sendStatus(401);
                } else {
                    //criando token
                    var token = jwt.sign({ login: usuario.login, }, app.get("secret"), {
                        expiresIn: 84600
                    });
                    console.log("Token criado e enviado");
                    res.set("x-access-token", token);
                    res.end();
                }

            }, function (error) {
                console.log("Login e senha inválidos");
                console.log(error);
                res.sendStatus(401)
            });

    });

    api.verificaToken = ((req, res, next) => {

        var token = req.headers["x-access-token"];
        if (token) {
            console.log("Verificando token");
            jwt.verify(token, app.get("secret"), function (err, decoded) {

                if (err) {
                    console.log("Token rejeitado");
                    res.sendStatus(401);
                }
                req.usuario = decoded;
                next();
            });
        } else {
            res.sendStatus(401);
        }
    });

    return api;
};