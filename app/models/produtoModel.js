module.exports = function(){
	this.getProdutos = function(connection, callback){
		connection.query('SELECT * FROM TB_PRODUTO',callback);
	}

	this.getProduto = function(connection, callback){
		connection.query('SELECT * FROM TB_PRODUTO',callback);
	}

	this.insertProduto = function(cliente, connection, callback){
		connection.query('INSERT INTO TB_PRODUTO SET ?',cliente,callback);
	}

	this.updateProduto = function(cliente, connection, callback){
		connection.query('UPDATE TB_PRODUTO SET ?',cliente,callback);
	}

	return this;
}