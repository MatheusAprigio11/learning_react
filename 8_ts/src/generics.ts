// Generics
// f -> tipo G -> x,y

function getArray<T>(items: T[]) {
  return new Array().concat(items)
}

let numberArrays = getArray([1, 2, 3, 4])
let stringArrays = getArray(["Matheus", "Aprigio", "de", "Jesus"])

function merge<T extends object, U extends object>(obj1: T, obj2: U){
  return { ...obj1, ...obj2 }
}

const result = merge(
  {name: "Matheus", age: 19},
  {job: "Apprentice", isActive: true}
)

console.log(result)


//Quando o dado vem de uma tabela ou algo do tipo, utilizar INTERFACE, quando estamos criando algo ali no momento do código, utilizamos TYPE
type Todo = {
  title: string,
  descprition: string,
  completed: boolean
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>){
  return {...todo, ...fieldsToUpdate }
}

const meuTodo: Todo ={
  title: "Teste",
  descprition: "somedescp.",
  completed: false,
}

const todoAtualizado = updateTodo(meuTodo, { completed: true })

console.log(todoAtualizado)

const meuSegundoTodo: Readonly<Todo> = {
  title: "Teste",
  descprition: "somedescp.",
  completed: false,
}

//meuSegundoTodo.title = "outrotitulo"