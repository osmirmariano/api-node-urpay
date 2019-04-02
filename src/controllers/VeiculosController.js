const mongoose = require('mongoose');
const Veiculos = mongoose.model('Veiculos');

module.exports = {
    async mostrarTodos(req, res){
        const veiculos = await Veiculos.find();
        return res.json(veiculos);
    },

    async cadastro(req, res){
        let regex = /^[a-zA-Z]{3}[0-9]{4}$/;
        if(!regex.test(req.body.placa)){
            return res.json({
                erro: 'Placa Inválida, a placa não atende ao padrão.'
            });
        }
        else{
            const veiculos = await Veiculos.create(req.body);
            return res.json(veiculos);
        }
    },


    async editar(req, res){
        const veiculos = await Veiculos.findOneAndUpdate({ placa: req.params.placa }, req.body, { new: true });
        return res.json(veiculos);
    },

    async deletarVeiculo(req, res){
        await Veiculos.findOneAndRemove({ placa: req.params.placa });
        return res.json({
            success: 'Deletado com sucesso!'
        });
    },

    async listarPorMarca(req, res){
        const veiculos = await Veiculos.find({ marca: req.params.marca });
        return res.json(veiculos);
    },

    async listarPorCor(req, res){
        const veiculos = await Veiculos.find({ cor: req.params.cor });
        return res.json(veiculos);
    },
    
    async listarPorPlaca(req, res){
        const veiculos = await Veiculos.find({ placa: req.params.placa });
        return res.json(veiculos);
    },

    async revisao(req, res){
        const veiculos = await Veiculos.update(
            { placa: req.params.placa }, 
            { $push: { revisoes: { 'data_revisao': req.body.data_revisao, 'valor': req.body.valor }}}, 
            { new: true }
        );
        return res.json(veiculos);
    },

    async consultaPlacaTotal(req, res){            
        const veiculos = await Veiculos.aggregate([
            { $match: {"placa": req.params.placa}},
            { $project : {
                _id : "$revisoes", total : { $sum : "$revisoes.valor" } 
            }}
        ]);
        return res.json(veiculos);
    },

    async consultaMarcaTotal(req, res){            
        const veiculos = await Veiculos.aggregate([
            { $match: {"marca": req.params.marca}},
            { $project : {
                _id : "$revisoes", total : { $sum : "$revisoes.valor" } 
            }}
        ]);
        return res.json(veiculos);
    }
}