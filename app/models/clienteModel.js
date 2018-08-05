module.exports = function(){
	this.getClientes = function(connection, callback){
		connection.query('SELECT * FROM TB_CLIENTE',callback);
	}

	this.getCliente = function(connection, callback){
		connection.query('SELECT * FROM TB_CLIENTE',callback);
	}

	this.insertCliente = function(cliente, connection, callback){
		connection.query('INSERT INTO TB_CLIENTE SET ?',cliente,callback);
	}

	this.updateCliente = function(cliente, connection, callback){
		connection.query('UPDATE TB_CLIENTE SET ?',cliente,callback);
	}

	return this;
}