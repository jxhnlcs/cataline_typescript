"use strict";
// Tipando Objetos
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
