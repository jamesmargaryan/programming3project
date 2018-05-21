var Dog = require('./class/Dog.js');
var Gishatich = require('./class/Gishatich.js');
var Grass = require('./class/grass.js');
var GrassEater = require('./class/Grasseater.js');
var Mirg = require('./class/Mirg.js');


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.redirect('public/index.html');
});
server.listen(3000);

