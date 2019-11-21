const mongoose = require("mongoose");
var api = {};
var model = mongoose.model("Foto");

api.lista = ((req, res) => {
	//buscando as fotos
	model.find(function (error, fotos) {
		if (error) {
			res.status(500).json(error);
		}
		res.json(fotos);
	});

	model
		.find({})
		.then(function (fotos) {
			res.json(fotos);
		}, function (error) {
			console.log(error);
			res.status(500).json(error);
		});
});

/*função model.findById recebe o ID da foto enviada na 
requisição. Quando o documento é encontrado a partir do seu ID, 
temos acesso a ele na função passada para.then da nossa 
promise. Se o documento não existir, a função receberá undefined. É por isso 
que precisamos testar na função de sucesso da promise: se for undefined, 
lançamos um Error. Isso fará com que o callback de fracasso da promise seja chamado*/

api.buscaPorId = ((req, res) => {
	model
		//passando ID que eu quero
		.findById(req.params.id)
		.then(function (foto) {
			//se não encontrar a foto lança o fluxo para a função de erro
			if (!foto) throw Error("Foto não encontrada");
			res.json(foto);

		}, function (error) {
			console.log(error);
			res.status(404).json(error)
		})

});

/*para removermos um documento, usamos a função model.remove que recebe como primeiro 
parâmetro um JSON contendo o critério da remoção. No caso, estamos procurando um documento cujo 
_id seja o valor de req.params.id. Como resposta, escrevemos res.sendStatus(200) indicando apenas 
que tudo foi OK, pois não queremos enviar nada. Quando algum erro inesperado acontece, enviamos o 
código de erro 500*/

api.removePorId = ((req, res) => {
	model
		.remove({ _id: req.params.id })
		.then(function () {
			res.sendStatus(204);
		}, function (error) {
			console.log(error);
			res.status(500).json(error);
		})
});

/*função model.create que recebe como parâmetro a foto que recebemos em req.body. 
Quando a função é executada com sucesso, recebemos como parâmetro o documento que foi 
criado, inclusive com seu ID já preenchido. Dependendo da sua aplicação, pode ser interessante 
ter acesso ao ID do novo documento. Este documento é enviado como resposta*/

api.adiciona = ((req, res) => {
	model
		//recebendo os dados das fotos criadas
		.create(req.body)
		.then(function (foto) {
			res.json(foto)

		}, function (error) {
			console.log(error);
			res.status(500).json(error)

		})
	console.log(model);
});

/*função model.findByIdAndUpdate que recebe como primeiro parâmetro o ID do 
documento que desejamos atualizar e como segundo os novos dados daquele documento*/

api.atualiza = ((req, res) => {

	model
		.findByIdAndUpdate(req.params.id, req.body)
		.then(function (foto) {
			res.json(foto)
		}, function (error) {
			console.log(error);
			res.status(500).json(error);
		})


})

module.exports = api;