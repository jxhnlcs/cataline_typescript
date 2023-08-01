// Tipos

////// 1- string, number & boolean


console.log('Descomente os console.log')

let message: string = 'Hello World'

// console.log(message)

let total: number = 10.5

// console.log(total)

let isOpen: boolean = false

// console.log(isOpen)



////// 2- any, void, never


let stock: any = 89
stock = null

// console.log(stock)

let voidStock: void = undefined

function showInformation( name: string): void{
  console.log(name)
}

// console.log(showInformation('Nome'))

function error(): never {
  throw new Error('error')
}



///// 3- array, tuple, enum


let items: number[]

items = [1, 2, 3]

// console.log(items)

let tupleItems: [number, string, boolean]

tupleItems = [1, 'nome', false]

enum Colors {
  white = '#fff',
  black = '#000'
}

let white: Colors = Colors.white
// console.log(white)



///// 4- type union


function showPet(pet: 'dog' | 'cat' | 'zebra'){
  // console.log(pet)
}

showPet('dog')



///// 5- type aliases


type Pet = 'dog' | 'cat' | 'zebra'

function displayPet(pet: Pet){
  // console.log(pet)
}

displayPet('cat')



///// 6- type inference


// let msg = 'Cataline'

// window.addEventListener('click', (event) => {
//   console.log(event.target)
// })