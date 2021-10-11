// Конструкторы и их прототипы
// Основной блок
function Block(col, row){
    this.col = col;
    this.row = row;
}

// Метод блока - квадрат
Block.prototype.drawSquare = function(color) {
    let x = this.col * blockSize;
    let y = this.row * blockSize;
    q.fillStyle = color;
    q.fillRect(x, y, blockSize, blockSize)
}

// Метод блока - круг
Block.prototype.drawCircle = function (color) {
    let centerX = this.col * blockSize + blockSize / 2;
    let centerY = this.row * blockSize + blockSize / 2;
    q.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);
}

// Проверка столкновения на тру фолс подойдёт для любых столкновений
Block.prototype.equal = function (otherBlock) {
    return ( this.col === otherBlock.col && this.row === otherBlock.row ); //true/false
}


// Змейка
function Snake() {
    this.segments = [
        new Block(9, 8),
        new Block(8, 8),
        new Block(7, 8),
    ];
    this.direction = "right";
    this.nextDirection = "right";
}

Snake.prototype.draw = function () {
    this.segments[0].drawSquare("LimeGreen");
    let isEvenSegment = 1;

    for (let i = 1; i < this.segments.length; i++) {
        if (isEvenSegment === 1) {
            this.segments[i].drawSquare("Blue");
        } else if (isEvenSegment === 2) {
            this.segments[i].drawSquare("red");
        }
        else {
            this.segments[i].drawSquare("Yellow");
            isEvenSegment = 0;
        }

        isEvenSegment++;
    }
}

Snake.prototype.move = function () {
    let head = this.segments[0];
    let newHead;

    this.direction = this.nextDirection;

    if (this.direction === "right") {
        newHead = new Block(head.col + 1, head.row);
    } else if (this.direction === "down") {
        newHead = new Block(head.col, head.row + 1);
    } else if (this.direction === "left") {
        newHead = new Block(head.col - 1, head.row);
    } else if (this.direction === "up") {
        newHead = new Block(head.col, head.row - 1);
    }

    if (this.checkCollision(newHead)) {
        gameOver();
        return;
    }

    this.segments.unshift(newHead);

    if (newHead.equal(apple.position)) {
        score++;
        animationTime -= 5;
        apple.move(this.segments);
    } else {
        this.segments.pop();
    }
};



Snake.prototype.checkCollision = function (head) {
    var leftCollision = (head.col === 0);
    var topCollision = (head.row === 0);
    var rightCollision = (head.col === widthInBlocks - 1);
    var bottomCollision = (head.row === heightInBlocks - 1);

    var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

    var selfCollision = false;

    for (var i = 0; i < this.segments.length; i++) {
        if (head.equal(this.segments[i])) {
            selfCollision = true;
        }
    }

    return wallCollision || selfCollision;
};
















Snake.prototype.setDirection = function (newDirection) {
    if (this.direction === "up" && newDirection === "down") {
        return;
    } else if (this.direction === "right" && newDirection === "left") {
        return;
    } else if (this.direction === "down" && newDirection === "up") {
        return;
    } else if (this.direction === "left" && newDirection === "right") {
        return;
    }

    this.nextDirection = newDirection;
}


// Конструктор яблока
function Apple() {
    this.position = new Block(10, 10);
}

Apple.prototype.draw = function () {
    this.position.drawCircle(`LimeGreen`);
}

Apple.prototype.move = function (occupiedBlocks) {
    let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    this.position = new Block(randomCol, randomRow);

    var index = occupiedBlocks.length - 1;
    while ( index >= 0 ) {
        if (this.position.equal(occupiedBlocks[index])) {
            this.move(occupiedBlocks); // Вызываем метод move повторно
            return;
        }
        index--;
    }

}








