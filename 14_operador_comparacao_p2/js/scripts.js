/*
= (Operador de atribuição) - é usado para atribuir valores a uma variável em JavaScript.

== (Igual a ou Equal to) - é usado para comparação entre duas variáveis, independentemente do tipo de dados da variável.

=== (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.
*/

// Atribuindo o valor 5 à variável 'numero'
let numero = 5;

// Compara o valor usando '=='
if (numero == 5) {
    console.log('Compara o valor da variável :>> ', numero, typeof numero); // Será exibido, pois 'numero' é 5
    console.log('O numero é :>> ', numero, typeof numero); // Exibe o número e seu tipo (number)
}

// Compara o tipo da variável usando '==='
if ('number' === typeof 5) {
    console.log('Compara o tipo da variável :>> ', numero, typeof numero); // Será exibido, pois 'typeof 5' é 'number'
    console.log('O numero é :>> ', numero, typeof numero); // Exibe o número e seu tipo
}

// Exibe o tipo da variável 'numero'
console.log('typeof numero :>> ', typeof numero); // Exibe 'number'

// Exibe o tipo da string '5'
console.log('typeof numero :>> ', typeof '5'); // Exibe 'string'

// Verifica se 'numero' não é igual a '5' do tipo string
if (numero !== '5') {
    console.log('Não é o número 5 do tipo number :>> '); // Será exibido, pois 'numero' é do tipo number e '5' é do tipo string
}
