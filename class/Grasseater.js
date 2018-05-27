var LivingCreature = require('./class1.js');

module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.tariq = 0;
	 this.energy = 8;
    }
   getNewCoordinates() {
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
       this.getNewCoordinates();
       return super.chooseCell(character);
   }

    move() {
        grasseatermove++;
        this.energy--;
        var Cell = this.chooseCell(0);
        var index = Math.floor(Math.random() * Cell.length);
        var newCell = Cell[index];

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
        var Cell = this.chooseCell(0);
        var index = Math.floor(Math.random() * Cell.length);
        var newCell = Cell[index];
        


        if (newCell && this.energy >= 12) {
            grasseatermul++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newEat = new GrassEater(newX, newY, this.index);
            GrassEaterArr.push(newEat);
            this.energy = 6;

        }
    }
    eating() {


        var newCellGrass = this.chooseCell(1);
        var index = Math.floor(Math.random() * newCellGrass.length);
        var newCell = newCellGrass[index];
        
        if (newCell) {
            grasseat++;
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
        else {
           
            this.move();
           
        }
        if(weather == "dzmer" && this.energy >= 34) {
            this.mul();
    }
        if (this.energy <= 0) {
            this.dead();
        }
        if (this.energy >= 12) {
            this.mul();
        }


    }

}