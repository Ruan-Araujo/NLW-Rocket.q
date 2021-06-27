const express = require('express');
const route = require('./route');
const path = require('path');

const server = express();

server.set('view engine', 'ejs');   

server.use(express.static('public'));
//O path é o caminho do projeto no meu computador, o joins junta o camingo com o __dirname (src) com o views
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true})); //Aqui estou utilizando um 'middleware' para pegar dados do input, decodificar e enviar para o controller.

server.use(route);

server.listen(3000, () => console.log('RODANDO'));

