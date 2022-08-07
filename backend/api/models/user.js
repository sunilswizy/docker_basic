const Sequelize = require('sequelize');
const db = require('../sequalize')

const User = db.define('users', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    email: {
        type: Sequelize.STRING
    },
    pass: {
        type: Sequelize.STRING
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
})

module.exports = User;