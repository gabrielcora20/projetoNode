function ClienteDAO(connection){
	this._connection = connection;
}

ClienteDAO.prototype.getClientes = function(callback){
	this._connection.query('SELECT * FROM TB_CLIENTE',callback);
}

ClienteDAO.prototype.getCliente = function(callback){
	this._connection.query('SELECT * FROM TB_CLIENTE',callback);
}

ClienteDAO.prototype.insertCliente = function(cliente, callback){
	this._connection.query('INSERT INTO TB_CLIENTE SET ?',cliente,callback);
}

ClienteDAO.prototype.updateCliente = function(cliente, callback){
	this._connection.query('UPDATE TB_CLIENTE SET ?',cliente,callback);
}

module.exports = function(){
	return ClienteDAO;
}