// Loop for que começa em 10 e decrementa até 1
for (let i = 10; i > 0; i--) {
    console.log('valor de i :>> ', i); // Exibe o valor atual de i

    // Se i for igual a 8, sai do loop
    if (i == 8) {
        break; // Interrompe o loop
    }    
}

// Exibe uma mensagem indicando que o loop foi interrompido
console.log('BREAK :>> ');

// Inicializa a variável x com 10
let x = 10;

// Loop while que continua enquanto x for menor que 100
while (x < 100) {
    x += 10; // Incrementa x em 10

    // Se x for 60 ou 90, pula para a próxima iteração do loop
    if (x === 60 || x === 90) {
        console.log('CONTINUE :>> '); // Exibe mensagem ao usar continue
        continue; // Ignora a execução do código restante no loop para esta iteração
    }
    
    // Exibe o valor atual de x se não for 60 ou 90
    console.log('valores de x :>> ', x); 
}
