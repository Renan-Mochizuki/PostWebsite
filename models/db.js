const Sequelize = require('sequelize')
const mysql2 = require('mysql2');

const sequelize = new Sequelize('postapp', 'PCwuSye894AJuf8.root', '1MOs6YaQm3kRWoyA', {
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