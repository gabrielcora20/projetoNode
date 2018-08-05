module.exports = function(){
	this.getFuncionarios = function(connection, callback){
		connection.query('SELECT * FROM TB_FUNCIONARIO',callback);
	}

	this.getFuncionario = function(connection, callback){
		connection.query('SELECT * FROM TB_FUNCIONARIO',callback);
	}

	this.insertFuncionario = function(funcionario, connection, callback){
		connection.query('INSERT INTO TB_FUNCIONARIO SET ?',funcionario,callback);
	}

	this.updateFuncionario = function(funcionario, connection, callback){
		connection.query('UPDATE TB_FUNCIONARIO SET ?',funcionario,callback);
	}

	return this;
}