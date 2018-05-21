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