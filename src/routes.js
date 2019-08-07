const express = require('express');
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router();
/**
 *  Métodos mais utilizados: 
 * GET - Obter informações -> Node js capturamos os parametros através do 'requisicao.query.{nome do parâmetro}'
 * PUT - Fazer alterações -> 
 * POS - Criação de dados -> Capturamos os parâmetros através da 'requisicao.body.{nome do parâmetro}'
 * DELETE - Deleção de dados
 */

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;