var LivingCreature = require('./class1.js');

module.exports = class Grass extends LivingCreature {
    mul() {
        this.multiply++;
        var vandakner = this.chooseCell(0);
        var index = Math.floor(Math.random() * vandakner.length);
        var newCell = vandakner[index];
       
        if (this.multiply >= 3 && newCell) {
            grassmul++;
            var norXot = new Grass(newCell[0], newCell[1]);
            grassArr.push(norXot);
            var newY = newCell[1];
            var newX = newCell[0];
            matrix[newY][newX] = 1;
            this.multiply = 0;
        }
    }


}








