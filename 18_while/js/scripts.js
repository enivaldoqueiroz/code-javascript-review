// Inicializa a variável x com 0
let x = 0;

// Loop while que imprime valores de x enquanto x for menor ou igual a 5
while (x <= 5) {
    console.log('Print x :>> ', x); // Exibe o valor atual de x
    x++; // Incrementa x em 1
}

// Inicializa um array com alguns elementos
let arr = ['teste', 'testando', 'a', 'b'];
let y = 0; // Inicializa y com 0

// Loop while que imprime os elementos do array arr
while (y <= 3) {
    console.log('array :>> ', arr[y]); // Exibe o elemento atual do array
    y++; // Incrementa y em 1
}

// Inicializa a string 'palavra'
let palavra = "Enivaldo";
let i = 0; // Inicializa i com 0

// Loop while que imprime cada letra da palavra
while (i < 8) {
    console.log('Exibindo cada letra :>> ', palavra[i]); // Exibe a letra atual
    i++; // Incrementa i em 1
}

// Inicializa z com o comprimento da palavra
let z = palavra.length;

// Loop while que imprime cada letra da palavra em ordem reversa
while (z >= 0) {
    console.log('Exibindo cada letra :>> ', palavra[z]); // Exibe a letra atual
    z--; // Decrementa z em 1
}
