const express = require('express');
const router = express.Router();

const orderController = require('./controllers/orderController');

router.get('/cardapio', orderController.buscarTodos);
router.get('/cardapio/:codigo', orderController.buscarUm);
router.post('/cardapio', orderController.inserir);
router.put('/cardapio/:codigo', orderController.alterar);
router.delete('/cardapio/:codigo', orderController.excluir);

module.exports = router;