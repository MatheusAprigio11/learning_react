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