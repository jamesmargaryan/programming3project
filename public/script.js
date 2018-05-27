var xqanak = 30;
var yqanak = 30;
var side = 20;
var guin = "#acacac";
var socket = io.connect('http://localhost:3000');
socket.on('matrix', gcel);
function setup() {
    createCanvas(xqanak * side, yqanak * side);
    background("#acacac")
}

socket.on("matrix",gcel);

socket.on("exanak", function(weather){
    if (weather == "garun"){
        guin = "#AAD4A4";
    }
    else if (weather == "amar"){
        guin = "#F3CD94";
    }
    else if (weather == "ashun"){
        guin = "#F0F38A";
    }
    else if (weather == "dzmer"){
        guin = "#C2D2D8";
    }

});




function gcel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#e68600");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#6600ff");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill(guin);
                rect(x * side, y * side, side, side);
            }
        }
    }
}



