// length - Retorna o tamanho do array
let arr = [1,2,3,4,5];
console.log('arr.length :>> ', arr.length);

// push - Adiciona um elemnto no final do array
arr.push(6);
arr.push("Qualquer coisa no array");
console.log('arr.push(6) :>> ', arr);

// pop - Remova o ultimo elemento do array
arr.pop();
console.log('arr.pop() :>> ', arr);

// unshift - Inserte um elemento no inicio de uma array
arr.unshift(0);
arr.unshift("teste");
console.log('arr.unshift(0) :>> ', arr);

// shift - Remove o primero elemento de um array
arr.shift();
console.log('arr.shift() :>> ', arr);

// acessar o último elemento de uma array
console.log('acessar o último elemento de uma array :>> ', arr[arr.length - 1]);

// isArray - Valida se é um array
console.log('Array.isArray(5) - retorna false:>> ', Array.isArray(5));
console.log('Array.isArray(arr) - retorna true :>> ', Array.isArray(arr));