const Sequelize = require("sequelize")
module.exports =
    db = new Sequelize('sports_db', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
        define: {
            timestamps: false
        },

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },

    });