// Declaração das variáveis 'idade' e 'nome'
let idade = 16;
let nome = "Enivaldo";

// Verifica se o nome é "Enivaldoo" ou se a idade é 13
if (nome == "Enivaldoo" || idade == 13) {
    // Esta condição não será verdadeira, pois ambas as partes são falsas
    console.log('O Enivaldo pode entrar na aula de esgrima :>> ');
} else {
    // Caso a condição anterior não seja verdadeira, esta mensagem será exibida
    console.log(`Este não é o ${nome} :>> `); // Será exibido, pois o nome não é "Enivaldoo" e a idade não é 13
}
