// length - Retorna o tamanho do array
let arr = [1, 2, 3, 4, 5]; // Criando um array inicial
console.log('arr.length :>> ', arr.length); // Output: 5 (tamanho do array)

// push - Adiciona um elemento no final do array
arr.push(6); // Adicionando o número 6 ao final do array
arr.push("Qualquer coisa no array"); // Adicionando uma string ao final do array
console.log('arr.push(6) :>> ', arr); // Output: [1, 2, 3, 4, 5, 6, "Qualquer coisa no array"]

// pop - Remove o último elemento do array
arr.pop(); // Remove o último elemento (a string adicionada anteriormente)
console.log('arr.pop() :>> ', arr); // Output: [1, 2, 3, 4, 5, 6]

// unshift - Insere um elemento no início de uma array
arr.unshift(0); // Adicionando 0 no início do array
arr.unshift("teste"); // Adicionando a string "teste" no início do array
console.log('arr.unshift(0) :>> ', arr); // Output: ["teste", 0, 1, 2, 3, 4, 5, 6]

// shift - Remove o primeiro elemento de um array
arr.shift(); // Remove o primeiro elemento ("teste")
console.log('arr.shift() :>> ', arr); // Output: [0, 1, 2, 3, 4, 5, 6]

// Acessar o último elemento de uma array
console.log('acessar o último elemento de uma array :>> ', arr[arr.length - 1]); // Output: 6

// isArray - Valida se é um array
console.log('Array.isArray(5) - retorna false:>> ', Array.isArray(5)); // Output: false
console.log('Array.isArray(arr) - retorna true :>> ', Array.isArray(arr)); // Output: true

/*
arr.length :>>  5
arr.push(6) :>>  [ 1, 2, 3, 4, 5, 6, 'Qualquer coisa no array' ]
arr.pop() :>>  [ 1, 2, 3, 4, 5, 6 ]
arr.unshift(0) :>>  [ 'teste', 0, 1, 2, 3, 4, 5, 6 ]
arr.shift() :>>  [ 0, 1, 2, 3, 4, 5, 6 ]
acessar o último elemento de uma array :>>  6
Array.isArray(5) - retorna false:>>  false
Array.isArray(arr) - retorna true :>>  true
*/