CREATE DATABASE "desafio-lemobs"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
	CREATE TABLE Alunos(
    aluno_id SERIAL UNIQUE PRIMARY KEY,
    nome TEXT NOT NULL,
    data_nascimento DATE NOT NULL,
    cpf TEXT UNIQUE NOT NULL,
    nota NUMERIC NOT NULL);
	
	CREATE TABLE Enderecos(
    endereco_id SERIAL UNIQUE PRIMARY KEY,
    rua TEXT NOT NULL,
	numero INT,
    complemento TEXT ,
    bairro TEXT NOT NULL,
    aluno_id INT NOT NULL,
    FOREIGN KEY (aluno_id) REFERENCES Alunos (aluno_id));
	
