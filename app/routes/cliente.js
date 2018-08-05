module.exports = function(application){

	application.get('/cliente/cadastro', function(req,res){
		res.render('cliente/form_cad_cliente');
	});

	application.post('/cliente/cadastro/salvar_cliente', function(req,res){
		var model = new application.app.models.ClienteDAO(application.config.dbConnection());
		model.insertCliente(req.body,function(error,result){
			res.redirect('/cliente/consulta/consulta_clientes');
		});
	});

	application.get('/cliente/consulta/consulta_clientes', function(req,res){
		var model = new application.app.models.ClienteDAO(application.config.dbConnection());
		model.getClientes(function(error,result){
			res.render('cliente/consulta_clientes',{clientes:result});
		});
	});	
}