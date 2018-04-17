const config = require('./config.js');
const mysql = require('mysql');

const pool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    port: config.DB_PORT,
    database: config.DB_SCHEMA,
});

var db = {};
db.tryConnect = function(tryConnectCallback) {
    pool.getConnection(function (err, connection) {
        if (tryConnectCallback) {
            tryConnectCallback(err)
        }
        if (err) throw err;
        connection.release();
    });
};

db.loadClient = function(account, password, loadClientCallback) {
    pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
        if (loadClientCallback) {
            tryConnectCallback(err)
        }
        if (err) throw err;
    });
};

module.exports = db;
