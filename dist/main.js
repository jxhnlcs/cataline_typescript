"use strict";
// Tipos
////// 1- string, number & boolean
console.log('Descomente os console.log');
let message = 'Hello World';
// console.log(message)
let total = 10.5;
// console.log(total)
let isOpen = false;
// console.log(isOpen)
////// 2- any, void, never
let stock = 89;
stock = null;
// console.log(stock)
let voidStock = undefined;
function showInformation(name) {
    console.log(name);
}
// console.log(showInformation('Nome'))
function error() {
    throw new Error('error');
}
///// 3- array, tuple, enum
let items;
items = [1, 2, 3];
// console.log(items)
let tupleItems;
tupleItems = [1, 'nome', false];
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
let white = Colors.white;
// console.log(white)
///// 4- type union
function showPet(pet) {
    // console.log(pet)
}
showPet('dog');
function displayPet(pet) {
    // console.log(pet)
}
displayPet('cat');
///// 6- type inference
// let msg = 'Cataline'
// window.addEventListener('click', (event) => {
//   console.log(event.target)
// })
