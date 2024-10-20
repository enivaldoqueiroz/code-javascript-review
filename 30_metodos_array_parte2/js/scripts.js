// splice - Remove ou Adiciona um elemento no meio de uma array
let arr = [1, 2, 3, 4, 5];

// Adiciona o número 999 na posição 2 (terceiro elemento), sem remover nenhum elemento (0)
arr.splice(2, 0, 999);
console.log('arr.splice(2, 0, 999); :>> ', arr); // Output: [1, 2, 999, 3, 4, 5]

// Remove 1 elemento na posição 4 (quinto elemento)
arr.splice(4, 1);
console.log('arr.splice(4, 1) :>> ', arr); // Output: [1, 2, 999, 3, 5]

// indexOf - Retorna o valor do índice do array
console.log('arr.indexOf(5) :>> ', arr.indexOf(5)); // Output: 4 (índice do número 5)

// join - Adiciona todos os elementos de um array em uma string, separados pelo separador especificado.
let arr2 = ["O", "rato", "roeu", "a", "roupa"];
console.log(arr2.join(" ")); // Output: "O rato roeu a roupa"

// reverse - Inverte os elementos de um array in place (no próprio array).
let arr2Reverse = arr2.reverse();
console.log(arr2Reverse.join(" ")); // Output: "roupa a roeu rato O"

/*
arr.splice(2, 0, 999); :>>  [ 1, 2, 999, 3, 4, 5 ]
arr.splice(4, 1) :>>  [ 1, 2, 999, 3, 5 ]
arr.indexOf(5) :>>  4
O rato roeu a roupa
roupa a roeu rato O
*/