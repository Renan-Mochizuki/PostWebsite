const Sequelize = require('sequelize')
const mysql2 = require('mysql2');

const sequelize = new Sequelize('sql10639758', 'sql10639758', 'GxQ4BS5Q4I', {
    host: "sql10.freemysqlhosting.net",
    port: "3306",
    dialect: "mysql",
    dialectOptions: {
        dateStrings: true,
        typeCast: true,
    },
    timezone: '-03:00',
});

module.exports = {
    Sequelize, sequelize
}