const express = require('express');
const router = express.Router();

const orderController = require('./controllers/orderController');

router.get('/pedidos'), orderController.buscarTodos;
router.get('/pedido/:codigo', orderController.buscarUm);

module.exports = router;