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
    inserir: async(req, res) => {
        let json =  {error:'', result: {}};

        let nome = req.body.nome;
        let preco = req.body.preco;


        if(nome && preco){
            let lancheCodigo = await orderService.inserir(nome, preco);
            json.result = {
                codigo: lancheCodigo,
                nome,
                preco
            };
        }
            else{
                json.error = 'Campos não enviados';
            }

        
        res.json(json);
    },

    alterar: async(req, res) => {
        let json =  {error:'', result: {}};

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let preco = req.body.preco;


        if(codigo && nome && preco){
            await orderService.alterar(id, nome, preco);
            json.result = {
                codigo,
                nome,
                preco
            };
        }
            else{
                json.error = 'Campos não enviados';
            }

        
        res.json(json);
    },

    excluir: async (req, res) => {
        let json = {error:'', result:{}};

        await orderService.excluir(req.params.codigo);

        res.json(json);
    }
}
    