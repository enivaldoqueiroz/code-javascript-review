// Declaração de uma variável inteira
var numero = 5;
console.log(numero); // Exibe o valor da variável 'numero' (5)
console.log(typeof numero); // Exibe o tipo de 'numero' (number)

// Declaração de uma variável de ponto flutuante
var float = 5.32;
console.log(float); // Exibe o valor da variável 'float' (5.32)
console.log(typeof float); // Exibe o tipo de 'float' (number)

// Declaração de uma variável string que contém um número
var textoComNumero = '523';
console.log(textoComNumero); // Exibe o valor da string '523'
console.log(typeof textoComNumero); // Exibe o tipo de 'textoComNumero' (string)

// Exemplo de concatenação de um número com uma string
var bizarrisNoJavaScript = 23 + '523';
console.log("23 + '523' :>> '", bizarrisNoJavaScript); // Exibe '23523' devido à concatenação

// Exibindo o valor e o tipo de NaN (Not a Number)
console.log('NaN :>> ', NaN); // Exibe NaN
console.log('typeof NaN :>> ', typeof NaN); // Exibe o tipo de NaN (number)

// Exibindo o valor e o tipo de +Infinity e -Infinity
console.log('+Infinity :>> ', +Infinity); // Exibe +Infinity
console.log('+Infinity :>> ', typeof +Infinity); // Exibe o tipo de +Infinity (number)
console.log('-Infinity :>> ', -Infinity); // Exibe -Infinity
console.log('-Infinity :>> ', typeof -Infinity); // Exibe o tipo de -Infinity (number)
