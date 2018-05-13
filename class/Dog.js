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
