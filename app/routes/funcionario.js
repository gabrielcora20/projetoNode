module.exports = function(application){

	application.get('/funcionario/cadastro', function(req,res){
		res.render('funcionario/form_cad_funcionario');
	});

	application.post('/funcionario/cadastro/salvar_funcionario', function(req,res){
		console.log(req.body);
		application.app.models.funcionarioModel.insertFuncionario(req.body,application.config.db_connection(),function(error,result){
			console.log(error);
			res.redirect('/funcionario/consulta/consulta_funcionario');
		});
	});

	application.get('/funcionario/consulta/consulta_funcionario', function(req,res){
		application.app.models.funcionarioModel.getFuncionario( application.config.db_connection(), function(error,result){
			res.render('funcionario/consulta_funcionarios',{funcionarios:result});
		});
	});	
}