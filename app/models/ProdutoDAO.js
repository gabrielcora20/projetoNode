function ProdutoDAO(connection){
	this._connection = connection;
}

ProdutoDAO.prototype.getProdutos = function(callback){
	this._connection.query('SELECT * FROM TB_PRODUTO',callback);
}

ProdutoDAO.prototype.getProduto = function(callback){
	this._connection.query('SELECT * FROM TB_PRODUTO',callback);
}

ProdutoDAO.prototype.insertProduto = function(produto, callback){
	this._connection.query('INSERT INTO TB_PRODUTO SET ?',produto,callback);
}

ProdutoDAO.prototype.updateProduto = function(produto, callback){
	this._connection.query('UPDATE TB_PRODUTO SET ?',produto,callback);
}

module.exports = function(){
	return ProdutoDAO;
}