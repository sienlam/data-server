const config = require('./config.js');
const mysql = require('mysql');
var database = {};

database.setup = function(setupCallback) {
    database.pool = mysql.createPool({
        host: config.DB_HOST,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        port: config.DB_PORT,
        database: config.DB_SCHEMA,
    });
    database.pool.getConnection(function (err, connection) {
        if (setupCallback) {
            setupCallback(err)
        }
		if (connection) {
			connection.release();
		}
    });
};

database.loadClient = function(account, password, loadClientCallback) {
    database.pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
        if (loadClientCallback) {
            tryConnectCallback(err)
        }
        if (err) throw err;
    });
};

module.exports = database;
