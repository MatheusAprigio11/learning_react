//Definindo interclasses
interface User {
	id: number;
	name: string;
	isActive: boolean;
}

//Utilizando interface
const myUser: User = {
	id: 1,
	name: "Matheus",
	isActive: false,
};

// Classes
class Person implements User{
  id: number;
  name: string;
  isActive: boolean;

  constructor(id:number, name:string, isActive:boolean) {
    this.id = id;
    this.name = name;
    this.isActive = isActive;
  }

  greet(isNew: boolean) {
    console.log(`Olá meu nome é ${this.name}`)
    if(isNew) {
      console.log("E sou novo por aqui")
    }
  
  }
}

const personData = new Person(14, "Joigi", true)

console.log(personData)

personData.greet(true)