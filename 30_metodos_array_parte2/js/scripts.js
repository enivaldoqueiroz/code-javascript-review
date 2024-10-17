// splice - Remove ou Adiciona um elemento no meio de uma array
let arr = [1,2,3,4,5];

arr.splice(2, 0, 999);
console.log('arr.splice(2, 0, 999); :>> ', arr);

arr.splice(4, 1);

console.log('arr.splice(4, 1) :>> ', arr);

// indexOf - Retorna o valor do indice do array
console.log('arr.indexOf(5) :>> ', arr.indexOf(5));


// join - Adds all the elements of an array into a string, separated by the specified separator string.
let arr2 = ["O", "rato", "roeu", "a", "roupa"];
console.log(arr2.join(" "));

// reverse - Reverses the elements in an array in place.
let arr2Reverse = arr2.reverse()
console.log(arr2Reverse.join(" "));