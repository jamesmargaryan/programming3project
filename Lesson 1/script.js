var xqanak = 30;
var yqanak = 30;
var matrix = [];
var side = 20;
var grassArr = [];
var GrassEaterArr = [];
var GishatichArr = [];
var DogArr = [];
var MirgArr = [];
function setup() {
    for (var y = 0; y < yqanak; y++) {
        matrix[y] = [x];

        for (var x = 0; x < xqanak; x++) {
            matrix[y][x] = Math.round(random(0, 5));
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

    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("#acacac")


}


function draw() {

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
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }



        }
    }


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

}



