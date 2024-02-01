// numero -> number, texto => string, objeto => object => {name: string, age: number}

let isActive: boolean;

isActive = true

console.log(typeof isActive);

let total: number = 150

let myName: string = "Matheus"

// Inferência de tipos

let isComplete = false

let amount = 200

let username = "Jhon"

console.log(typeof isComplete, typeof amount, typeof username)

let money
console.log(money) //undefined
money = 200 //number

//Arrays e objetos
let numbers: number[] = [1, 2 ,3 ]

console.log(typeof numbers)

let user: { name: string; age: number } = {
    name: "Matheus",
    age: 50,
}

//Tuplas
// [n, n, n]
let rgb: [number, number, number] = [255, 0, 0]
console.log(typeof rgb, rgb)

//Funções
function greet(nome: string): string {
return `Olá, ${nome}`
}

console.log(greet("jorge"))

//Enum
export enum Direction {
    Up,
    Down,
    Left,
    Right,
}

export function getDirectionMessage(direction: Direction): string{
    switch(direction){
        case Direction.Up:
            return "Movendo para cima"
        case Direction.Down:
            return "Movendo para baixo"
        case Direction.Left:
            return "Movendo para esquerda"
        case Direction.Right:
            return "Movendo para direita"
        default:
            return "ficou parado"
    }
}

console.log(getDirectionMessage(Direction.Up))
