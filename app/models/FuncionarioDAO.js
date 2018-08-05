function FuncionarioDAO(connection){
	this._connection = connection;
}

FuncionarioDAO.prototype.getFuncionarios = function(callback){
	this._connection.query('SELECT * FROM TB_FUNCIONARIO',callback);
}

FuncionarioDAO.prototype.getFuncionario = function(callback){
	this._connection.query('SELECT * FROM TB_FUNCIONARIO',callback);
}

FuncionarioDAO.prototype.insertFuncionario = function(funcionario, callback){
	this._connection.query('INSERT INTO TB_FUNCIONARIO SET ?',funcionario,callback);
}

FuncionarioDAO.prototype.updateFuncionario = function(funcionario, callback){
	this._connection.query('UPDATE TB_FUNCIONARIO SET ?',funcionario,callback);
}

module.exports = function(){
	return FuncionarioDAO;
}