const mongoose = require('mongoose');

const RevisoesSchema = new mongoose.Schema({
    data_revisao: String,
    valor: Number,
});

const VeiculoSchema = new mongoose.Schema({
    placa: {
        type: String,
        required: true,
        unique: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    ano_fabricacao: {
        type: Date,
        required: true
    },
    data_cadastro: {
        type: Date,
        default: Date.now
    },
    revisoes: [RevisoesSchema]
});

mongoose.model('Veiculos', VeiculoSchema);