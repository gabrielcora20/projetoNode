module.exports = function(application){	
	application.get('/produto/cadastro', function(req,res){
		res.render('produto/form_cad_produto');
	});

	application.post('/produto/cadastro/salvar_produto', function(req,res){
		application.app.models.produtoModel.insertProduto(req.body,application.config.db_connection(),function(error,result){
			res.redirect('/produto/consulta/consulta_produtos');
		});		
	});

	application.get('/produto/consulta/consulta_produtos', function(req,res){
		application.app.models.produtoModel.getProdutos(application.config.db_connection(),function(error,result){
			res.render('produto/consulta_produtos',{produtos:result});
		})
	});
}