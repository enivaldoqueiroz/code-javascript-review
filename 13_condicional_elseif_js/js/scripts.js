// Declaração da variável 'nome'
var nome = "Enivaldo";

// Verifica se o nome é "Pedro"
if (nome == "Pedro") {
    console.log('O nome dele é Pedro :>> '); // Não será exibido, pois 'nome' é "Enivaldo"
} 
// Verifica se o nome é "Enivaldo"
else if (nome == "Enivaldo") {
    console.log('O nome é :>> ', nome); // Será exibido, pois 'nome' é "Enivaldo"
} 
// Se nenhuma das condições anteriores for verdadeira, entra no else
else {
    console.log('Ele possui outro nome! :>> '); // Não será executado
}

// Declaração da variável 'idade'
var idade = 19;

// Verifica se a idade é maior que 20
if (idade > 20) {
    console.log('Ele pode entrar na festa :>> ', idade); // Não será exibido, pois 'idade' é 19
} 
// Verifica se a idade é maior ou igual a 18
else if (idade >= 18) {
    console.log('Ele só pode entrar com autorização :>> '); // Será exibido, pois 'idade' é 19
}

// Verifica novamente o valor de 'nome' para testar outra estrutura condicional
if (nome == "Enivaldo") {
    console.log('Entrando no IF :>> '); // Será exibido, pois 'nome' é "Enivaldo"
} else {
    console.log('Entrando no ELSE :>> '); // Não será executado
}
