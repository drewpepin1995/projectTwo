const Sequelize = require("sequelize")
module.exports =
    db = new Sequelize('sports.db', 'root', 'hockey930', {
        host: 'localhost',
        dialect: 'mysql',

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },

    });