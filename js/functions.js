// Функции
// Отрисовка
function circle(x, y , radius, fill = false) {
    q.beginPath();
    q.arc(x, y, radius,0, Math.PI * 2, false);
    (fill) ? q.fill() : q.stroke();
}

let drawBorder = function () {

    q.strokeStyle = "Gray";
    // for (let i = 0; i < widthInBlocks; i++) {
    //     q.moveTo(0,20 * i)
    //     q.lineTo(width,20 * i)
    //     q.moveTo(20 * i,0)
    //     q.lineTo(20 * i,height)
    //     q.stroke();
    // }
    q.fillStyle = "Gray";
    q.fillRect(0, 0, width, blockSize);
    q.fillRect(0, height - blockSize, width, blockSize);
    q.fillRect(0, 0, blockSize, height);
    q.fillRect(width - blockSize, 0, blockSize, height);

}

let drawScore = function () {
    q.font = "18px Courier bold"
    q.fillStyle = "Black";
    q.textAlign = "left";
    q.textBaseline = "top";
    q.fillText(`Счёт: ${score}`, 3, 3)
}

let gameOver = function () {
    playing = false;
    q.font = "60px Courier";
    q.fillStyle = "Black";
    q.textAlign = "center";
    q.textBaseline = "middle";
    q.fillText("Конец игры", width / 2, height / 2);
};


// Обработка событий































// function go() {
//     let gox = document.getElementById('timeArrived');
//     let j = new Date;
//     let seconds = (j.getSeconds() < 10) ? '0' + j.getSeconds() : j.getSeconds();
//     let minutes = (j.getMinutes() < 10) ? '0' + j.getMinutes() : j.getMinutes();
//
//     gox.innerHTML = `
//     ${j.getHours()}:${minutes}:${seconds}`;
//     document.getElementById('freeSpace').innerHTML = `
//     ${j.getHours()}:${minutes}:${seconds * 2}`;
//
// }
// setInterval(go, 1000)
//
// function sizes() {
//     let scr = `x:${window.innerWidth} y:${window.innerHeight} `;
//     let x = document.getElementById("wayNumber");
//     x.innerHTML = scr;
// }
// setInterval(sizes, 1000);
//

// WebStorm
// ctrl + shift + A - выполнить действия S L N - show line numbers y/n
// double shift    например поиск по названию чего-либо и переход к этому\
// можно писать первые буквы слов например a.c.ts для app.component.ts
// alt + enter - контекстное меню
// alt + F7  - поиск вхождений символа слова итд.
// shift + F6 - одновременная замена выделенной и её последюущих вхождений.
// ctrl + shift + f - глобальный поиск
// ctrl + R - окно замен
//   // todo: сделай тото
//  выделяется другим цветом и менеджерится во вкладке TODO alt + 6
// закладки и брейкпоинты, отображаются во вкладке favorites
// ctrl + q - быстрое обращение к документации
// ctrl + click - переход к определению объекта
// LocalHistory - мощная вещь
// // Canvas
// // заполненные прямоугольники
// q.fillRect(10,10, 4, 4) // прямоугольник
// q.fillStyle = "Red" // цвет прямоугольника
// // пустые прямоугольники
// q.strokeRect(10,10,100,20); // только контур прямоугольника
// q.strokeStyle = "deeppink";            // только контур прямоугольника
// q.lineWidth = 4;                       // Толщина линии
// //линии
// q.strokeStyle = "Turquoise";           // цвет линии
// q.lineWidth = 5;                       // Толщина линии
// q.beginPath();                         // Вызов метода рисования нового пути
// q.moveTo(10,10)                  // От этой точки
// q.lineTo(60,60)                  // Рисуем линию
// q.stroke();                           // проявка линий
// q.fill();                             // Заполнение выведенного
// //Окружности
// q.beginPath();                         // Вызов метода рисования нового пути
// q.arc(45, 45, 55,0, Math.PI * 2, false) // окружность
// q.stroke();                           // проявка линий
