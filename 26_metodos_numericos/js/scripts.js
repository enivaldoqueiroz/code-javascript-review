// Exibindo o uso de parseFloat
// parseFloat converte uma string em um número de ponto flutuante
console.log("parseFloat('12.999') :>> ", parseFloat('12.999')); // Output: 12.999
console.log("parseFloat('12.999') :>> ", parseFloat('12.999')); // Output: 12.999
console.log("Number.parseFloat('12.999') :>> ", Number.parseFloat('12.999')); // Output: 12.999

// Exibindo o uso de parseInt
// parseInt converte uma string em um número inteiro
console.log("parseInt('10') :>> ", parseInt('10')); // Output: 10
console.log("parseInt('16.96') :>> ", parseInt('16.96')); // Output: 16 (desconsidera a parte decimal)

// Exibindo o uso de toFixed
// toFixed formata um número usando notação de ponto fixo
console.log('23.51515151.toFixed(1) :>> ', 23.51515151.toFixed(4)); // Output: 23.5152 (arredondado para 4 casas decimais)

// Exibindo o uso de isNaN (is not a number)
// isNaN verifica se um valor é NaN
console.log('isNaN("teste") retorna true :>> ', isNaN("teste")); // Output: true (string não é um número)
console.log('isNaN(10) retorna false :>> ', isNaN(10)); // Output: false (10 é um número)

// Exibindo as propriedades MAX_VALUE e MIN_VALUE
// Number.MAX_VALUE representa o maior número que pode ser representado em JavaScript
console.log('Number.MAX_VALUE :>> ', Number.MAX_VALUE); // Output: 1.7976931348623157e+308
// Number.MIN_VALUE representa o menor número positivo que pode ser representado em JavaScript
console.log('Number.MIN_VALUE :>> ', Number.MIN_VALUE); // Output: 5e-324

// Exibindo Infinity
// O valor infinito em JavaScript é representado por Infinity
console.log('Infinity number:>> ', 2.7976931348623157e+308); // Output: 2.7976931348623157e+308



/*
parseFloat('12.999') :>>  12.999
parseFloat('12.999') :>>  12.999
Number.parseFloat('12.999') :>>  12.999
parseInt('10') :>>  10
parseInt('16.96') :>>  16
23.51515151.toFixed(1) :>>  23.5152
isNaN("teste") retorna true :>>  true
isNaN(10) retorna false :>>  false
Number.MAX_VALUE :>>  1.7976931348623157e+308
Number.MIN_VALUE :>>  5e-324
Infinity number:>>  2.7976931348623157e+308
*/