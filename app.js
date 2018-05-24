var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.redirect('public/index.html');
});
server.listen(3000);




var Dog = require('./class/Dog.js');
var Gishatich = require('./class/Gishatich.js');
var Grass = require('./class/grass.js');
var GrassEater = require('./class/Grasseater.js');
var Mirg = require('./class/Mirg.js');


xqanak = 30;
yqanak = 30;
matrix = [];
grassArr = [];
GrassEaterArr = [];
GishatichArr = [];
DogArr = [];
MirgArr = [];



for (var y = 0; y < yqanak; y++) {  
    matrix[y] = [x];

    for (var x = 0; x < xqanak; x++) {
        matrix[y][x] = Math.round(Math.random()*6);
    }
}


/* matrix = [
      [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
      [1, 2, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 1, 0, 0, 1, 2, 5, 0, 0, 1, 0],
      [0, 0, 1, 2, 0, 0, 5, 4, 0, 1, 2],
      [1, 1, 0, 0, 2, 0, 0, 0, 0, 1, 0],
      [1, 1, 0, 1, 4, 5, 0, 0, 5, 0, 0],
      [1, 1, 0, 0, 0, 3, 5, 0, 0, 1, 0],
      [0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0]
 ];*/



for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var gret = new GrassEater(x, y, 2);
            GrassEaterArr.push(gret);
        }
        else if (matrix[y][x] == 3) {
            var gish = new Gishatich(x, y, 3);
            GishatichArr.push(gish);
        }
        else if (matrix[y][x] == 4) {
            var dog = new Dog(x, y, 4);
            DogArr.push(dog);
        }
        else if (matrix[y][x] == 5) {
            var mirg = new Mirg(x, y, 5);
            MirgArr.push(mirg);
        }

    }
}



io.on("connection",function){
socket.on("send message", function (data) {
    setInterval(func, 500);

    function func() {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
        for (var a in GrassEaterArr) {
            GrassEaterArr[a].eating();
        }
        for (var b in GishatichArr) {
            GishatichArr[b].eating();
        }
        for (var c in DogArr) {
            DogArr[c].eating();
        }
        for (var n in MirgArr) {
            MirgArr[n].mul();
        }
        io.sockets.emit('matrix', matrix);
    }

})
};




