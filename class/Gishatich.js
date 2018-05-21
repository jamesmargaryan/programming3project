var LivingCreature = require('./class1.js');

module.exports = class Gishatich extends LivingCreature{
    constructor(x, y,index) {
        super(x, y, index);
        this.energy = 10;


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

