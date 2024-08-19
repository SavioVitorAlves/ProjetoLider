//Nome do banco: liderdb
//Nome do usuario: postgres
//Senha: $Bode1234
require('dotenv').config();

//VARIAVEIS DE AMBIENTE
const dbUser = process.env.DATABASE_USER;
const dbPassword = process.env.DATABASE_PASSWORD;
const dbPort = process.env.DATABASE_PORT;
const dbHost = process.env.DATABASE_HOST;

const Sequelize = require("sequelize");
const sequelize = new Sequelize('liderdb', dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres',
    port: dbPort,
});
//VERIFICAÇÃO DE AUTENTICAÇÃO COM BANCO DE DADOS
sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso!");
}).catch(function(error){
    console.log("falha ao se conectar com o banco " + error);
});

//EXPORTAÇÃO DO BANCO DE DADOS
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}