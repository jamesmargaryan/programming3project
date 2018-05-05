
class Grass {
    constructor(x, y, index, ) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var norVandak = random(this.chooseCell(0));

        if (this.multiply >= 5 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            var newX = norVandak[0];
            var newY = norVandak[1];
            matrix[newY][newX] = 1;
            this.multiply = 0;
        }
    }


}

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
    }
    choosenewKordinats() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.choosenewKordinats();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    //console.log(this.directions[i]);
                    found.push(this.directions[i]);
                }
            }
        }
        //console.log(found);

        return found;
    }
    move() {
        this.energy--;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            this.y = newY;
            this.x = newX;


        }

    }
    dead() {
        for (var i in GrassEaterArr) {
            if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                GrassEaterArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
    mul() {
        var Cells = this.chooseCell(0);
        var newCell = random(Cells);


        if (newCell && this.energy >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newEat = new GrassEater(newX, newY, this.index);
            GrassEaterArr.push(newEat);
            this.energy = 6;

        }
    }
    eating() {

        var emptyCells = this.chooseCell(1);
        var newCellGrass = random(emptyCells);
        if (newCellGrass) {
            matrix[this.y][this.x] = 0;
            var newX = newCellGrass[0];
            var newY = newCellGrass[1];
            matrix[newY][newX] = 2;
            this.y = newY;
            this.x = newX;
            this.energy++;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }



        }
        else {
            this.move();
        }
        if (this.energy <= 0) {
            this.dead();
        }
        if (this.energy >= 12) {
            this.mul();
        }


    }

}



class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];
        this.index = 2;

    }
    choosenewKordinats() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.choosenewKordinats();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {

                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    dead() {
        matrix[this.y][this.x] = 0;
        for (var i in GishatichArr) {

            if (GishatichArr[i].x == this.x && GishatichArr[i].y == this.y) {
                GishatichArr.splice(i, 1);
                break;
            }
        }
    }
    move() {
        var Cell = random(this.chooseCell(1));
        if (Cell) {

            this.energy--;
            var x = Cell[0];
            var y = Cell[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

            matrix[this.y][this.x] = 3;

            for (var i in grassArr) {

                if (x == grassArr[i].x && grassArr[i].y == y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            var Cell  = random(this.chooseCell(0))
            if(Cell){
                this.energy--;
                var x = Cell[0];
                var y = Cell[1];
                matrix[this.y][this.x] = 0;
                this.x = x;
                this.y = y;
                matrix[this.y][this.x] = 3;
            }
        }




        if (this.energy <= 0) {
            this.dead();


        }


    }




mul() {
    var datarkVandakner = this.chooseCell(0);
    var newCell = random(datarkVandakner);

    if (newCell) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 3;

        var newGishatich = new Gishatich(newX, newY, this.index);
        GishatichArr.push(newGishatich);
        this.energy = 6;
    }
}
eating() {

    var xotvandak2 = random(this.chooseCell(4));
    if (xotvandak2) {
        this.move();

    }
    else {
        var xotvandak = (this.chooseCell(2));
        var xotvandak3 = (this.chooseCell(5));
        var xotvandak4 = random(xotvandak.concat(xotvandak3));

        if (xotvandak4) {
            var newx = xotvandak4[0];
            var newy = xotvandak4[1];
            if (matrix[newy][newx] == 2) {
                this.energy++;
                matrix[this.y][this.x] = 0;
                for (var i in GrassEaterArr) {
                    if (GrassEaterArr[i].x == xotvandak4[0] && GrassEaterArr[i].y == xotvandak4[1]) {

                        GrassEaterArr.splice(i, 1)
                        break;

                    }
                }
                this.x = xotvandak4[0];
                this.y = xotvandak4[1];
                matrix[this.y][this.x] = 3;

                if (this.energy >= 12) {
                    this.mul();
                }

            }
            else if (matrix[newy][newx] == 5) {

                matrix[this.y][this.x] = 0;
                for (var i in MirgArr) {
                    if (MirgArr[i].x == xotvandak4[0] && MirgArr[i].y == xotvandak4[1]) {
                        MirgArr.splice(i, 1);
                        this.dead();
                        break;

                    }
                }
                this.x = xotvandak4[0];
                this.y = xotvandak4[1];
                matrix[this.y][this.x] = 0;
            }


        }
        else {
            this.move();
        }
    }
}
}


class Dog {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 9;
        this.index = index;
    }
    choosenewKordinats() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.choosenewKordinats();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        this.energy--;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            this.y = newY;
            this.x = newX;


        }
        else {
            this.energy--;
        }

    }
    mul() {
        var Cells = this.chooseCell(0);
        var newCell = random(Cells);


        if (newCell && this.energy >= 13) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var newEat = new Dog(newX, newY, this.index);
            DogArr.push(newEat);
            this.energy = 6;

        }
    }
    eating() {

        var emptyCells = this.chooseCell(5);
        var newCellGrass = random(emptyCells);
        if (newCellGrass) {
            matrix[this.y][this.x] = 0;
            var newX = newCellGrass[0];
            var newY = newCellGrass[1];
            matrix[newY][newX] = 4;

            this.y = newY;
            this.x = newX;
            this.energy++;
            for (var i in MirgArr) {
                if (newX == MirgArr[i].x && newY == MirgArr[i].y) {
                    MirgArr.splice(i, 1);
                    break;
                }
            }



        }
        else {
            this.move();
        }
        if (this.energy <= 0) {
            this.dead();
        }
        if (this.energy >= 12) {
            this.mul();
        }


    }
    dead() {
        for (var i in DogArr) {
            if (this.x == DogArr[i].x && this.y == DogArr[i].y) {
                DogArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}



class Mirg {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;

    }
    choosenewKordinats() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        var found = [];
        this.choosenewKordinats();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var datarkVandakner = this.chooseCell(0);
        var norVandak = random(datarkVandakner);

        if (norVandak && this.multiply >= 15) {
            var norX = norVandak[0];
            var norY = norVandak[1];
            matrix[norY][norX] = 5;


            var newMirg = new Mirg(norX, norY, this.index);
            MirgArr.push(newMirg);
            this.multiply = 0;
        }
    }






}