// Declaração de um array que contém diferentes tipos de elementos (número, string, booleano e objeto)
var arr = [5, "Enivaldo", true, {teste1: 1, teste2: 2, teste3: 3}];

console.log('show arr :>> ', arr); // Exibe o array completo
console.log('arr.length  :>> ', arr.length); // Exibe o tamanho do array (4)
console.log('arr.at (Returns the item located at the specified index.) :>> ', arr.at(1)); // Acessa o elemento na posição 1 (Enivaldo)

// Filtrar apenas os números do array
const numeros = arr.filter(elemento => typeof elemento === 'number');
console.log(numeros); // Output: [5]

// Filtrar apenas as strings do array
const strings = arr.filter(elemento => typeof elemento === 'string');
console.log(strings); // Output: ["Enivaldo"]

// Filtrar apenas os objetos do array
const objetos = arr.filter(elemento => typeof elemento === 'object');
console.log(objetos); // Output: [{teste1: 1, teste2: 2, teste3: 3}]

// Filtrar objetos que contenham a propriedade 'teste1' com valor igual a 1
const objetosComTeste1 = arr.filter(elemento => typeof elemento === 'object' && elemento.teste1 === 1);
console.log(objetosComTeste1); // Output: [{teste1: 1, teste2: 2, teste3: 3}]

// Função personalizada para verificar se um número é par
function isEven(value) {
    return value % 2 == 0;
}

// Declaração de um array de números para aplicar o filtro de números pares
let filtroArray = [11, 98, 31, 23, 944];
console.log('filter :>> ', filtroArray.filter(isEven)); // Output: [98, 944] - Retorna apenas os números pares

// Declaração de outro array de números
var arr2 = [2,3,4,5,6];

// Acessando elementos específicos dos arrays 'arr' e 'arr2'
console.log('Acessar elemento de uma array :>> ', arr[1]); // Exibe o segundo elemento do array 'arr' (Enivaldo)
console.log('Acessar elemento de uma array :>> ', arr2[1]); // Exibe o segundo elemento do array 'arr2' (3)

// Modificando o valor de elementos do array 'arr'
arr[4] = 10; // Adiciona o valor 10 na posição 4 do array
arr[0] = "Teste"; // Modifica o primeiro elemento do array para "Teste"
console.log('Inserção de um elemento no array :>> ', arr); // Exibe o array modificado

// Exibe o tipo de 'arr', que será 'object' (arrays são um tipo de objeto em JavaScript)
console.log('typeof arr :>> ', typeof arr);
