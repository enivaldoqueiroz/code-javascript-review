// Declaração das variáveis
var idade = 15;
var possuiCarro = 1; // '1' em JavaScript é considerado um valor "truthy" (verdadeiro)

// Verifica se a idade é maior ou igual a 18 para permitir a carteira de habilitação
if (idade >= 18) {
    console.log('O usuário pode fazer a carteira :>> '); // Não será exibido, pois idade é 15
}

// Verifica se a idade é menor ou igual a 17
if (idade <= 17) {
    console.log('O usuário não pode fazer a carteira :>> '); // Esta mensagem será exibida
}

// Verifica se a variável 'possuiCarro' é "truthy" (não nulo, não zero, etc.)
if (possuiCarro) {
    console.log('O usuário já pode andar de carro :>> '); // Será exibido, pois 'possuiCarro' é 1 (verdadeiro)
}
console.log('Valor da variável possuiCarro :>> ', possuiCarro); // Exibe o valor de 'possuiCarro' no console

// Declaração da variável nome
var nome = "Enivaldo Eni";

// Verifica se o nome é igual a "Enivaldo"
if (nome == "Enivaldo") {
    console.log('O seu nome é  :>> ', nome ); // Não será exibido, pois o nome é "Enivaldo Eni" e não exatamente "Enivaldo"
}

// Realiza uma busca no nome procurando pela string "0"
const nomeIndex = nome.search("0"); // O método 'search' retorna a posição da substring "0" no nome ou -1 se não for encontrada
console.log('nomeIndex :>> ', nomeIndex); // Exibe o índice encontrado (será -1, pois "0" não está presente)

// Verifica se 'nomeIndex' é diferente de -1, ou seja, se a substring foi encontrada
if (nomeIndex !== -1) {
    console.log('Parte do Nome encontrado :>> ', nome); // Não será exibido, pois o índice retornado é -1
}
