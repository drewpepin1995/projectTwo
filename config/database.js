require('dotenv').config()
const Sequelize = require("sequelize")
let db;
if (process.env.NODE_ENV != "production") {
    db = new Sequelize('sports.db', 'root', 'hockey930', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false
    },

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }});


  } else {
    db = new Sequelize(process.env.JAWSDB_URL);
  }

module.exports = db;