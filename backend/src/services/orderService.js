const db = require('../db')

module.exports = {
    buscarTodos: () =>{
        return new Promise ((aceito, rejeitado) =>{

            db.query('SELECT * FROM cardapio', (error, results) =>{
                if (error) { rejeitado(error); return; }
                aceito(results);
        });
        });
    },
    buscarUm: (codigo) => {
        return new Promise ((aceito, rejeitado) => {
            db.query ('SELECT * FROM cardapio WHERE codigo = ?', [codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            })
        })
    },

    inserir: (nome, preco) => {
        return new Promise ((aceito, rejeitado) => {
            db.query ('INSERT INTO cardapio (nome, preco) VALUES (?, ?)', [nome, preco], (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results.insertId);
            })
        });
    },

    alterar: (codigo, nome, preco) => {
        return new Promise ((aceito, rejeitado) => {
            db.query ('UPDATE cardapio SET nome = ?, preco= ? WHERE codigo = ?',
             [nome, preco, codigo],
             (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            })
        });
    },

    excluir: (codigo) =>{
        return new Promise ((aceito, rejeitado) =>{

            db.query('DELETE FROM cardapio WHERE codigo = ?',[codigo],
            (error, results) =>{
                if (error) { rejeitado(error); return; }
                aceito(results);
        });
        });
}
}