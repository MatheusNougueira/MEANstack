var api = {};

api.lista = ((req, res) => {
    var grupos = [
        { _id: 1, nome: "esporte" },
        { _id: 2, nome: "lugares" },
        { _id: 3, nome: "animais" },
        { _id: 4, nome: "animação" }
    ];
    res.json(grupos)
});

module.exports = api;
