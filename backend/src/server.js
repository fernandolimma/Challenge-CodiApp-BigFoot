const port = process.env.PORT || 3000;
require('dotenv').config({path : 'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.use('/api', routes);

server.listen(port, ()=> {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})

//server.use(router)