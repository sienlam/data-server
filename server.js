const config = require('./config.js');
const Client  = require('./client.js');
const express = require('express');
const app = express();
var server = {};


function setupDatabase(typeName, setupCallback) {
    switch (typeName) {
        case 'mysql': {
            const database = require('./database.js');
            database.setup(function(err) {
                if (err) {
                    console.log('Database connection fail (%s)', err.message);
                    setupDatabase('sqlite', setupCallback);
                }
                else {
                    console.log('Database connected...');
                    server.db = database;
                    // database.checkTable();
                    setupCallback('mysql');
                }
            })
            break;
        }
        case 'sqlite': {
            const sqlite = require("./sqlite.js");
            sqlite.setup(function(err) {
                if (err) {
                    console.log('Sqlite connection fail (%s)', err.message);
                }
                else {
                    console.log('Sqlite connected...');
                    server.db = sqlite;
                    // sqlite.checkTable();
                    setupCallback('sqlite');
                }
            });
            break;
        }
        default:
            break;
    }
}

// setup database source
setupDatabase(config.DEFAULT_DATABASE_TYPE, function(typeName) {
    console.log('Server swith database: %s', typeName);
});

// const client = new Client(1000);
// clientMap[client.id] = client;
// console.log("client id:%d", client.id);

// const client2 = clientMap['1000'];
// console.log("client2 id:%d", client2.id);

// ------------------
function handleAction(action) {
    console.log("action: %s", action);
}

app.get('/', function (req, resp) {
    console.log("主页 GET 请求");
    resp.send('Hello GET');
})

app.get('/test', function (req, resp) {
    var action = req.query['action'];
    if (action == undefined) {
        return;
    }
    handleAction(action)
    resp.send('test pages...');
})

app.listen(config.PORT, function () {
    console.log('Server listening on port:%s', config.PORT);
    console.log('Server running...');
});
