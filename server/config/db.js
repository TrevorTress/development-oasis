const mysql = require('mysql2');
const db = mysql.createConnection({
	host: 'localhost',
	port: '3001',
	user: 'root',
	password: 'password',
	database: 'emporium',
});

module.exports = db;
