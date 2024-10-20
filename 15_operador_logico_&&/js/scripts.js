// Declaração das variáveis 'idade' e 'nome'
let idade = 16;
let nome = "Enivaldo";

// Verifica se o nome é "Enivaldoo" e a idade é 16
if (nome == "Enivaldoo" && idade == 16) {
    console.log('O Enivaldo pode entrar na aula de esgrima :>> '); // Esta condição não será verdadeira
} else {
    // Caso a condição anterior não seja verdadeira, esta mensagem será exibida
    console.log(`Este não é o ${nome} :>> `); // Será exibido, pois o nome não é "Enivaldoo"
}

// Verifica múltiplas condições usando '&&'
if (1 == 1 && 3 > 2 && true) {
    console.log('Passou na validação :>> '); // Esta condição é verdadeira, então esta mensagem será exibida
}

// Verifica múltiplas condições com uma condição falsa
if ((1 == 1 && 3 > 2) && false) {
    // Esta condição não será verdadeira devido ao 'false'
    console.log('Passou na validação :>> '); // Não será exibido
}
