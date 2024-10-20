// Declaração de variáveis x e y com valores iniciais
let x = 1; // x é uma variável com escopo de bloco
let y = 3; // y é uma variável com escopo de bloco

// Imprime os valores de x e y no console
console.log(x, y); // Output: 1 3

// Define uma função chamada teste
function teste(){
    let z = 0; // z é uma variável local a esta função

    console.log(z); // Imprime o valor de z (0)
    console.log(x); // Imprime o valor de x (1), que é acessível dentro da função
}

// Chama a função teste
teste(); // Output: 0, 1

// Define outra função chamada testando
function testando(){
    let z = 5; // z é uma nova variável local a esta função

    console.log(z); // Imprime o valor de z (5)
}

// Chama a função testando
testando(); // Output: 5

// Verifica o escopo de var
if (true) {
    var p = 5; // p é uma variável com escopo de função ou global
}

// Imprime o valor de p no console
console.log(p); // Output: 5, pois p é acessível fora do bloco if
