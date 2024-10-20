// Declaração das variáveis para armazenar a idade atual e a idade mínima necessária
var idade = 16;
var idadeMinima = 18;

console.log('Antes do if :>> '); // Exibe uma mensagem indicando que está antes das condições

// Verifica se a idade é maior que a idade mínima
if (idade > idadeMinima) {
    console.log('Pode fazer a carteira de habilitação :>> '); // Se for maior que 18, exibe a mensagem
}

// Verifica se a idade é maior que 15
if (idade > 15) {
    console.log('Precisa esperar 3 anos ainda :>> '); // Como idade é 16, esta condição será verdadeira e a mensagem é exibida
}

console.log('Depois do if :>> '); // Exibe uma mensagem indicando que o código após as condições foi alcançado
