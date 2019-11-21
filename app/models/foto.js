const mongoose = require("mongoose");

//criando schema da foto
var schema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    grupo: {
        type: Number,
        required: true
    }
})

//criando modelo
mongoose.model("Foto", schema);