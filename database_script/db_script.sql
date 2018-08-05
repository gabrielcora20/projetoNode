CREATE DATABASE db_loja;

USE db_loja;

CREATE TABLE TB_CLIENTE(
ID_CLIENTE INT PRIMARY KEY AUTO_INCREMENT,
NOME_CLIENTE VARCHAR(100),
CPF_CLIENTE VARCHAR(14),
DATA_NASC_CLIENTE DATE,
CEP_CLIENTE VARCHAR(9),
EMAIL_CLIENTE VARCHAR(100)
);

CREATE TABLE TB_FUNCIONARIO(
ID_FUNCIONARIO INT PRIMARY KEY AUTO_INCREMENT,
NOME_FUNCIONARIO VARCHAR(100),
CPF_FUNCIONARIO VARCHAR(14),
DATA_NASC_CLIENTE DATE,
CEP_FUNCIONARIO VARCHAR(9),
EMAIL_CLIENTE VARCHAR(100)
);

CREATE TABLE TB_PRODUTO(
ID_PRODUTO INT PRIMARY KEY AUTO_INCREMENT,
NOME_PRODUTO VARCHAR(100),
PRECO_PRODUTO DECIMAL(7,2)
);

CREATE TABLE TB_FABRICANTE();