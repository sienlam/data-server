const config = require('./config.js');
const sqlite3 = require('sqlite3');
var sqlite = {};

sqlite.setup = function(setupCallback) {
    sqlite3.verbose();
    sqlite.source = new sqlite3.Database(config.SQLITE_PATH, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, function(err) {
        if (setupCallback) {
            setupCallback(err)
        }
    });
};

sqlite.checkTable = function(checkCallback) {
    sqlite.source.run("CREATE TABLE IF NOT EXISTS client " +
    "(id VARCHAR(128), pwd VARCHAR(64), token VARCHAR(64), ts DATETIME, note TEXT)",
    function(err) {
        if (checkCallback) {
            checkCallback(err, "client");
        }
    });
}

sqlite.loadClient = function(account, password, loadClientCallback) {

};

module.exports = sqlite;
