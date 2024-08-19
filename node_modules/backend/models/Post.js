const bd = require("./bd")

const Postagem = bd.sequelize.define('Transacoes', {
    descricao:{
        type: bd.Sequelize.STRING
    },
    valor:{
        type: bd.Sequelize.DECIMAL(10, 2)
    },
    data:{
        type: bd.Sequelize.DATE
    },
    tipo:{
        type: bd.Sequelize.STRING
    }
});

module.exports = Postagem;