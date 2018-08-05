module.exports = function(application){	

	application.get('/produto/cadastro', function(req,res){
		res.render('produto/form_cad_produto');
	});

	application.post('/produto/cadastro/salvar_produto', function(req,res){
		var model = new application.app.models.ProdutoDAO(application.config.dbConnection());
		model.insertProduto(req.body,function(error,result){
			res.redirect('/produto/consulta/consulta_produtos');
		});		
	});

	application.get('/produto/consulta/consulta_produtos', function(req,res){
		var model = new application.app.models.ProdutoDAO(application.config.dbConnection());
		model.getProdutos(function(error,result){
			res.render('produto/consulta_produtos',{produtos:result});
		});
	});
}