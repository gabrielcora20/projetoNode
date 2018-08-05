module.exports = function(application){

	application.get('/cliente/cadastro', function(req,res){
		res.render('cliente/form_cad_cliente');
	});

	application.post('/cliente/cadastro/salvar_cliente', function(req,res){
		application.app.models.clienteModel.insertCliente(req.body,application.config.dbConnection(),function(error,result){
			res.redirect('/cliente/consulta/consulta_clientes');
		});
	});

	application.get('/cliente/consulta/consulta_clientes', function(req,res){
		application.app.models.clienteModel.getClientes( application.config.dbConnection(), function(error,result){
			res.render('cliente/consulta_clientes',{clientes:result});
		});
	});	
}