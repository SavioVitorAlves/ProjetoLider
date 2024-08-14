const bd = require("./bd")

const User = bd.sequelize.define('Usuarios', {
    nome:{
        type: bd.Sequelize.CHAR
    },
    senha:{
        type: bd.Sequelize.INTEGER
    },
    atorizacao:{
        type: bd.Sequelize.BOOLEAN
    }
});

module.exports = User;