const config = require('./config.js');
const db = require('./database.js');
const Client  = require('./client.js');
const express = require('express');
const app = express();
var clientMap = {};

db.tryConnect(function(err) {
    if (err) {
		console.log('Database connection fail (%s)', err);
    } 
	else {
		console.log('Database connected...');
	}
})

const client = new Client(1000);
clientMap[client.id] = client;
console.log("client id:%d", client.id);

const client2 = clientMap['1000'];
console.log("client2 id:%d", client2.id);

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
    handleAction(action)
    resp.send('test pages...');
})

app.listen(config.PORT, () => {
    console.log('Server listening on port:%s', config.PORT);
});

console.log('Server running...');
