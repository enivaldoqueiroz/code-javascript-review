// Declara uma variável x com let (equivalente a var, mas com escopo de bloco)
let x = 5; // x agora é igual a 5
x = 12; // x é atualizado para 12

// Declara uma constante y
const y = 10; // y é uma constante e não pode ser reatribuída

// Imprime o valor de x no console
console.log('x :>> ', x); // Output: x :>> 12

// Início de um bloco if
if (true) {
    let x = 20; // Declara uma nova variável x com escopo de bloco, que é local a este if

    // Imprime o valor de x dentro do if
    console.log('let x dentro do if :>> ', x); // Output: let x dentro do if :>> 20

    const y = 50; // Declara uma nova constante y, que é local a este if
    console.log('const y :>> ', y); // Output: const y :>> 50
}

// Imprime o valor de x após o bloco if
console.log('x :>> ', x); // Output: x :>> 12, pois a variável x do escopo global não foi afetada

// Início de um loop for
for (let x = 0; x < 10; x++) {
    // Imprime o valor de x dentro do loop
    console.log('x :>> ', x); // Imprime valores de 0 a 9
}
