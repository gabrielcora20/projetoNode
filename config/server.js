//express é um modulo que serve parafacilitar a configuracao do servidor
var application = require('express')();
//o consign carrega altomaticamente modulos ao inicir a aplicacao, é util pois economiza diversas linhas de codigo
var consign = require('consign');
//o body-parser serve para que o express saiba que deve pegaro conteudo de formularios e jogar na requisicao
var bodyParser = require('body-parser');
//Define como as views serão tratadas e pelo que serao tratadas.
application.set('view engine','ejs');
//diz onde o servidor irá procurar as views
application.set('views','./app/views');
//comando para que a aplicacao use o body-parser quando submeter algum formulario
application.use(bodyParser.urlencoded({extended:true}));

consign()
.include('./app/routes')
.include('./app/models')
.then('./config/db_connection.js')
.into(application);
module.exports = application;
