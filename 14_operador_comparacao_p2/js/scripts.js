/*
= (Operador de atribuição) -  é usado para atribuir valores a uma variável em JavaScript.

== (Igual a ou Equal to) - é usado para comparação entre duas variáveis, independentemente do tipo de dados da variável.

=== (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.
*/

let numero = 5;

// Compara o valor
if (numero == 5){
    console.log('Compara o valor da variavel :>> ', numero, typeof numero);
    console.log('O numero é :>> ', numero, typeof numero);
}

// Compara o tipo da variavel
if ('number' === typeof 5){
    console.log('Compara o tipo da variavel :>> ', numero, typeof numero);
    console.log('O numero é :>> ', numero, typeof numero);
}

console.log('typeof numero :>> ', typeof numero);
console.log('typeof numero :>> ', typeof '5');


if (numero !== '5') {
    console.log('Não é o número 5 do tipo number :>> ');
}