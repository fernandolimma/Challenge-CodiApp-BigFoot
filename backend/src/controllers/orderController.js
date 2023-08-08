const orderService = require('../services/orderService')

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};
        let pedidos = await orderService.buscarTodos();

        for (let i in pedidos){
            json.result.push({
                id: pedidos[i].nome,
                preco: pedidos[i].preco
            });
        }
        res.json(json);
    },
    buscarUm: async(req, res) => {
        let json =  {error:'', result: {}};

        let codigo = req.params.codigo;
        let pedido = await orderService.buscarUm(codigo);

        if(pedido){
            json.result = pedido;

        }
        res.json(json);
    },
}