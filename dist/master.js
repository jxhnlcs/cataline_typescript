"use strict";
// Tipando Objetos
// 1- Mostrar a cidade do usuário
console.log('1- Mostrar a cidade do usuário');
function showCity(user) {
    var _a;
    return (_a = user.address) === null || _a === void 0 ? void 0 : _a.city;
}
const response = showCity({
    name: 'John',
    address: {
        city: 'Feira de Santana',
        uf: 'BA'
    }
});
console.log(response);
// 2- Readonly
console.log('2- Readonly, tá no código');
let user = {
    name: 'John',
    age: 19
};
// 3- Extends, implements
console.log('3- Extends, Implements. tá no código');
class CriarVeiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('vrum');
    }
}
// 4- Pick & Omit
console.log('4- Pick & Omit, tá no código');
// let postpick: PostPick
// let postomit: PostOmit
// postpick.id
// postomit.description
