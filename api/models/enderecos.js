
const Aluno = require('./alunos.js');

module.exports  = (sequelize,Sequelize) => {
    const Endereco = sequelize.define('enderecos',{
        rua:{
            type: Sequelize.STRING,
            allowNull: false
        },
        numero:{
            type: Sequelize.INTEGER
        },
        complemento:{
            type: Sequelize.STRING
        },
        bairro:{
            type: Sequelize.STRING,
            allowNull: false
        },
        aluno_id:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }); 

    Endereco.associate = function(models){
        Endereco.belongsTo(models.Aluno,{foreingKey:'aluno_id'})
    }

    return Endereco

}