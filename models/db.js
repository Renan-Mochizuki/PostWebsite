const Sequelize = require('sequelize')
const mysql2 = require('mysql2');
require('dotenv').config()

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: "mysql",
    host: 'gateway01.us-west-2.prod.aws.tidbcloud.com',
    port: 4000,
    dialectOptions: {
        ssl: {
            require: true,
            minVersion: 'TLSv1.2',
            rejectUnauthorized: false
        }, 
        dateStrings: true,
        typeCast: true,
    },
    timezone: '-03:00'
});

module.exports = {
    Sequelize, sequelize
}