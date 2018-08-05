//este require serve para puxar o retorno do modulo que esta no arquivo 'server.js'
var app = require('./config/server');

app.listen(1000, function(){
	console.log('Servidor ON');
});