var LivingCreature = require('./class1.js');

module.exports = class Mirg extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);


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

    mul() {
        this.multiply++;
        var datarkVandakner = this.chooseCell(0);
        var index = Math.floor(Math.random() * datarkVandakner.length);
        var newCell = datarkVandakner[index];

        if (newCell && this.multiply >= 6) {
            var norX = newCell[0];
            var norY = newCell[1];
            matrix[norY][norX] = 5;


            var newMirg = new Mirg(norX, norY, this.index);
            MirgArr.push(newMirg);
            this.multiply = 0;
        }
    }






}