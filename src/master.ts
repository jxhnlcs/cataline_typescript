// Tipando Objetos

// 1- Mostrar a cidade do usuário

console.log('1- Mostrar a cidade do usuário')

type UF = 'PE' | 'SP' | 'BA'

interface User {
  name: string,
  address?: {
    city: string,
    uf: UF
  }
}

function showCity(user: User) {
  return user.address?.city
}

const response = showCity({
  name: 'John',
  address: {
    city: 'Feira de Santana',
    uf: 'BA'
  }
})

console.log(response)

// 2- Readonly

console.log('2- Readonly, tá no código')

interface newUser {
  readonly name: string
  age: number
}

let user: newUser = {
  name: 'John',
  age: 19
}

// 3- Extends, implements

console.log('3- Extends, Implements. tá no código')

interface Veiculo {
  rodas: number
  acelerar: () => void
  frear?: () => void
}

class CriarVeiculo implements Veiculo{
  rodas: number

  constructor(rodas:number){
    this.rodas = rodas
  }

  acelerar(){
    console.log('vrum')
  }
}

 interface Moto extends Veiculo{
   capacete: boolean
   empinar: () => void
}

// 4- Pick & Omit

console.log('4- Pick & Omit, tá no código')

interface Post {
  id: number
  title: string
  description: string
}

type PostPick = Pick<Post, 'id' | 'title'>
type PostOmit = Omit<Post, 'id' | 'title'>

// let postpick: PostPick
// let postomit: PostOmit

// postpick.id
// postomit.description