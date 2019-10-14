const Sequelize = require("sequelize")
const db = require("../config/database")

const Team = db.define('team', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    team: {
        type: Sequelize.STRING
    }
});