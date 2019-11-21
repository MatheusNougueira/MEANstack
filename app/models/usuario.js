const mongoose = require("mongoose");

//criando schema do login
var schema = mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
});

//criando modelo
mongoose.model("Usuario", schema);