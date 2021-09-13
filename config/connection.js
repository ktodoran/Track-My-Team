const mysql = require('mysql2');
require('dotenv').config();

//connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user:  process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME     
    },
    console.log('Connected to the database.')
);

module.exports = db;