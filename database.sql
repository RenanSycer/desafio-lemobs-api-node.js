CREATE TABLE Alunos(
    aluno_id SERIAL UNIQUE PRIMARY KEY,
    nome TEXT NOT NULL,
    data_nascimento DATE NOT NULL,
    cpf TEXT UNIQUE NOT NULL,
    nota NUMBER NOT NULL,
    
);


CREATE TABLE Enderecos(
    endereco_id SERIAL UNIQUE PRIMARY KEY,
    rua TEXT NOT NULL,
    complemento TEXT ,
    bairro VARCHAR(50) NOT NULL,
    aluno_id INT NOT NULL,
    (endereco_id),
    FOREIGN KEY (aluno_id) REFERENCES Alunos (aluno_id)
);
