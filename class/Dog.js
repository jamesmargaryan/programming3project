var LivingCreature = require('./class1.js');

module.exports = class Dog extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 9;
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
    move() {
        this.energy--;
        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];

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
        var index = Math.floor(Math.random() * Cells.length);
        var newCell = Cells[index];


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
        if (weather == "ashun") {
            var newCellGrass = this.chooseCell(1);
            var index = Math.floor(Math.random() * newCellGrass.length);
            var newCell = newCellGrass[index];

            if (newCell) {
                matrix[this.y][this.x] = 0;
                var newX = newCell[0];
                var newY = newCell[1];
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
        }
        else {
            var emptyCells = this.chooseCell(5);
            var index = Math.floor(Math.random() * emptyCells.length);
            var newCellGrass = emptyCells[index];

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
            } else {
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

