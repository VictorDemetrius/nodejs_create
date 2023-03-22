const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

const Cadastro = sequelize.define("cadastros", {
    nome:{
        type: Sequelize.STRING
    },
    telefone:{
        type: Sequelize.INTEGER
    },
    origem:{
        type: Sequelize.STRING
    },
    data:{
        type: Sequelize.DATE
    },
    observacao:{
        type: Sequelize.STRING
    }
})

 //Cadastro.sync({force : true})