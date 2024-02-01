"use strict";
let isActive;
isActive = true;
console.log(typeof isActive);
let total = 150;
let myName = "Matheus";
let isComplete = false;
let amount = 200;
let username = "Jhon";
console.log(typeof isComplete, typeof amount, typeof username);
let money;
console.log(money);
money = 200;
let numbers = [1, 2, 3];
console.log(typeof numbers);
let user = {
    name: "Matheus",
    age: 50,
};
let rgb = [255, 0, 0];
console.log(typeof rgb, rgb);
function greet(nome) {
    return `Olá, ${nome}`;
}
console.log(greet("jorge"));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function getDirectionMessage(direction) {
    switch (direction) {
        case Direction.Up:
            return "Movendo para cima";
        case Direction.Down:
            return "Movendo para baixo";
        case Direction.Left:
            return "Movendo para esquerda";
        case Direction.Right:
            return "Movendo para direita";
        default:
            return "ficou parado";
    }
}
console.log(getDirectionMessage(Direction.Up));
