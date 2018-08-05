module.exports = function(application){

	application.get('/funcionario/cadastro', function(req,res){
		res.render('funcionario/form_cad_funcionario');
	});

	application.post('/funcionario/cadastro/salvar_funcionario', function(req,res){
		var model = new application.app.models.FuncionarioDAO(application.config.dbConnection());
		model.insertFuncionario(req.body,function(error,result){
			res.redirect('/funcionario/consulta/consulta_funcionario');
		});
	});

	application.get('/funcionario/consulta/consulta_funcionario', function(req,res){
		var model = new application.app.models.FuncionarioDAO(application.config.dbConnection());
		model.getFuncionarios(function(error,result){
			res.render('funcionario/consulta_funcionarios',{funcionarios:result});
		});
	});	
}