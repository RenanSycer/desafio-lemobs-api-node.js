//const Sequelize = require('Sequelize');
//const Sequelize = require('Sequelize');
//const db = require('./config/pg_connection');

const Endereco = require('./enderecos.js');
module.exports =(sequelize,Sequelize) => {
    const Aluno = sequelize.define('alunos',{
        nome:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        data_nascimento:{
            type: Sequelize.DATE,
            allowNull: false
        },
        cpf:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        nota:{
            type: Sequelize.FLOAT,
            allowNull: false
        }
    });

    Endereco.associate = function(models){
        Aluno.hasMany(models.Endereco,{foreingKey:'aluno_id'});
    }
    
    return Aluno;
}