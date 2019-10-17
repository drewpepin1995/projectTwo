require("dotenv").config();
console.log(process.env.USER_NAME);
console.log(process.env.PASSWORD);
console.log(process.env.DATABASE);
const config = {
    "development": {
        "username": process.env.USER_NAME,
        "password": process.env.PASSWORD,
        "database": process.env.DATABASE,
        "host": "127.0.0.1",
        "port": 3306,
        "dialect": "mysql"
    },
    "test": {
        "username": process.env.USER_NAME,
        "password": process.env.PASSWORD,
        "database": process.env.DATABASE,
        "host": "127.0.0.1",
        "port": 3306,
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": "root",
        "database": "database_production",
        "host": "127.0.0.1",
        "port": 3306,
        "dialect": "mysql"
    }
}
module.exports = config;