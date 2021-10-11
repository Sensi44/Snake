let canvas = document.getElementById("canvas");
let q = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

// Переменные
let blockSize = 20;
let widthInBlocks = width / blockSize;    //25
let heightInBlocks = height / blockSize;  //25
let score = 0;






let directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
}

$("body").keydown( function (event) {
    let newDirection = directions[event.keyCode];
    if (newDirection !== undefined) {
        snake.setDirection(newDirection)
    }
})



let snake = new Snake();
let apple = new Apple();

let playing = true;
let animationTime = 150;


let gameLoop = function () {
    q.clearRect(0, 0, width, height);
    drawScore();
    snake.move();
    snake.draw();
    apple.draw();
    drawBorder();

    // Устанавливается в false функцией gameOver
    if (playing) {
        setTimeout(gameLoop, animationTime);
    }
};

// Начинаем игровой цикл
gameLoop();























