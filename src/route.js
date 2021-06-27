const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');


const route = express.Router();

//Quando estamos falando de rotas, o Get é o que usamos para pegar conteúdo de uma rota.
//Quando queremos enviar algma coisa para a rota usamos o post para enviar dados por exemplo de uma formulãrio para a rota.
//O navegador por si só, ele não faz envios de informações para rotas. Ele apenas pega as rotas e mostra, ele só funciona com o get.
route.get('/', (req, res) => res.render('index', {page:'enter-room'}));
route.get('/create-pass', (req, res) => res.render('index', {page:'create-pass'}));

route.post('/create-room', RoomController.create);//Função de trabalhar o room
route.get('/room/:room', RoomController.open);
route.post('/enterroom', RoomController.enter);
//Quando colocamos o : estamos expressando para o express que não sabemos qual o conteúdo da plavra posterior
//Formato que o formulário de dentro da modal tem que passar informação
route.post('/question/create/:room', QuestionController.create);
route.post('/question/:room/:question/:action', QuestionController.index);//Objetivo de trabalhar as questions
module.exports = route;