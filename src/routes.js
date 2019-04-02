
const express = require('express');
const routes = express.Router();

const VeiculosController = require('./controllers/VeiculosController');

routes.get('/veiculo', VeiculosController.mostrarTodos);
routes.post('/veiculo', VeiculosController.cadastro);
routes.put('/veiculo/:placa', VeiculosController.editar);
routes.delete('/veiculo/:placa', VeiculosController.deletarVeiculo);

routes.get('/veiculo/marca/:marca', VeiculosController.listarPorMarca);
routes.get('/veiculo/cor/:cor', VeiculosController.listarPorCor);
routes.get('/veiculo/:placa', VeiculosController.listarPorPlaca);

routes.post('/veiculo/revisao/:placa', VeiculosController.revisao);
routes.get('/veiculo/revisao/total-placa/:placa', VeiculosController.consultaPlacaTotal);
routes.get('/veiculo/revisao/total-marca/:marca', VeiculosController.consultaMarcaTotal);
module.exports = routes;
