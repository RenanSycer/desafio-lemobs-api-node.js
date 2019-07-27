/**
 * Conexão com PostgreSQL utilizando os dados de configuração do .env
 */

'use strict';

const Sequelize = require('sequelize');
const urlConexao = `postgres://${process.env.BD_USUARIO}:${process.env.BD_SENHA}@${process.env.BD_HOST}:${process.env.BD_PORTA}/${process.env.BD_NOME}?application_name=${process.env.BD_NOME_APLICACAO}`;

const db = new Sequelize(process.env.BD_NOME,process.env.BD_USUARIO, process.env.BD_SENHA,{
    hots:process.env.BD_HOST,
    dialect:'postgres'
    },{
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.authenticate()
  .then(() => {
     console.log('CONECTOU!!!!!');
  })
  .catch(err =>{
      console.error('Deu erro :', err);
  });

module.exports = urlConexao;
module.exports = db;

