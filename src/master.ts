// Tipando Objetos

// 1- Mostrar a cidade do usuário

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