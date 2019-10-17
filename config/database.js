require('dotenv').config()
const Sequelize = require("sequelize")
<<<<<<< HEAD
module.exports =
    db = new Sequelize('sports_db', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
        define: {
            timestamps: false
        },
=======
let db;
if (process.env.NODE_ENV != "production") {
    db = new Sequelize('sports.db', 'root', 'hockey930', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false
    },
>>>>>>> 9361c7fefa968aa06af6f6404d609467e2ca42e4

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }});


  } else {
    db = new Sequelize(process.env.JAWSDB_URL);
  }

module.exports = db;