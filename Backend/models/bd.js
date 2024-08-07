//Nome do banco: liderdb
//Nome do usuario: postgres
//Senha: $Bode1234

const Sequelize = require("sequelize");
const sequelize = new Sequelize('liderdb', 'postgres', '$Bode1234', {
    host: 'localhost',
    dialect: 'postgres',
    port: 3001,
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