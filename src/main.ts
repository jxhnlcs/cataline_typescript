// string, number & boolean

console.log('Descomente os console.log')

let message: string = 'Hello World'

// console.log(message)

let total: number = 10.5

// console.log(total)

let isOpen: boolean = false

// console.log(isOpen)

// any, void, never

let stock: any = 89
stock = null

// console.log(stock)

let voidStock: void = undefined

function showInformation( name: string): void{
  console.log(name)
}

// console.log(showInformation('John'))

function error(): never {
  throw new Error('error')
}