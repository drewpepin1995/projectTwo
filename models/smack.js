const Sequelize = require("sequelize")
const db = require("../config/database")

const Smack = db.define('smack', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    team: {
        type: Sequelize.STRING
    },
    smack: {
        type: Sequelize.TEXT
    }
});

module.exports = Smack;