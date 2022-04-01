const Dados = require('../models/model');

exports.index = function(req, res){
    Dados.get(function(err, dadis){
        if(err)
            res.json({
                status: "error",
                message: "Erro na obtenção de dados"
            });
        res.json({
            status: "ok",
            message: "Dados coletados com sucesso",
            data: dados
        });
    });
};

// Criação dos dados
exports.add = function(req, res){
    var dados = new Dados();
    dados.nome = req.body.nome? req.body.nome: dados.nome;
    dados.email = req.body.email;
    dados.telefone = req.body.telefone;
    dados.endereço = req.body.endereço;

    // Salvar e Verificar erros
    dados.save(function(err){
        if(err)
            res.json(err)
        res.json({
            message: "Dados atualizandos com sucesso",
            data: dados
        })
    })
}

// Ver os dados
exports.view = function(req, res){
    Dados.findById(req.params.dados_id, function(err, dados){
        if(err)
            res.send(err);
        res.json({
            message: "Detalhes dos Dados",
            data: dados
        });
    });
};

// Atualizar os dados
exports.update = function(req, res){
    Dados.findById(req.params.dados_id, function(err, dados){
        if(err)
            res.send(err);
        dados.nome = req.body.nome ? req.body.nome : dados.nome;
        dados.email = req.body.email;
        dados.telefone = req.body.telefone;
        dados.morada = req.body.morada;

        //Guardar e verificar erros
        dados.save(function(err){
            if(err)
                res.json(err)
            res.json({
                message: "Dados Updated Successfully!",
                data: dados
            });
        });
    });
};

// Apagar os dados
exports.delete = function(req, res){
    Dados.deleteOne({
        _id: req.params.dados_id
    }, function(err, contacts){
        if(err)
            res.send(err);
        res.json({
            status: "Ok",
            message: "Dados Eliminando com Sucesso!"
        });
    });
};