// obj => {}

var arr = [5, "Enivaldo", true, {teste1: 1, teste2: 2,teste3: 3}];

console.log('show arr :>> ', arr);
console.log('arr.length  :>> ', arr.length);
console.log('arr.at (Returns the item located at the specified index.) :>> ', arr.at(1));

// Filtrar apenas os números
const numeros = arr.filter(elemento => typeof elemento === 'number');
console.log(numeros); // Output: [5]

// Filtrar apenas as strings
const strings = arr.filter(elemento => typeof elemento === 'string');
console.log(strings); // Output: ["Enivaldo"]

// Filtrar apenas os objetos
const objetos = arr.filter(elemento => typeof elemento === 'object');
console.log(objetos); // Output: [{teste1: 1, teste2: 2,teste3: 3}]

// Filtrar objetos com a propriedade 'teste1' igual a 1
const objetosComTeste1 = arr.filter(elemento => typeof elemento === 'object' && elemento.teste1 === 1);
console.log(objetosComTeste1); // Output: [{teste1: 1, teste2: 2,teste3: 3}]

function isEven(value) {
    return value % 2 == 0;
}

let filtroArray = [11, 98, 31, 23, 944]

console.log('filter :>> ', filtroArray.filter(isEven));

var arr2 = [2,3,4,5,6];

console.log('Acessar elemento de uma array :>> ', arr[1]);
console.log('Acessar elemento de uma array :>> ', arr2[1]);

arr[4] = 10;
arr[0] = "Teste"
console.log('Inserção de um elemento no array :>> ', arr);
console.log('typeof arr :>> ', typeof arr);