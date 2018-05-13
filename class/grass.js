class Grass extends LivingCreature {
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








