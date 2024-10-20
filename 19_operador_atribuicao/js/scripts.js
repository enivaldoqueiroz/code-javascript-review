// Inicializa as variáveis x e y
let x = 1;
let y = 2;

// Exibe os valores iniciais de x e y
console.log('Valor de x :>> ', x); // Exibe 1
console.log('Valor de y :>> ', y); // Exibe 2

// Soma: atribui a soma de x e y a x
console.log('Soma: x = x + y :>> ', x = x + y); // x agora é 3

// Soma utilizando o operador de atribuição
console.log('Subtração: x += y :>> ', x += y); // x agora é 5 (3 + 2)

// Subtração: atribui a diferença entre x e y a x
console.log('Subtração: x -= y :>> ', x -= y); // x agora é 3 (5 - 2)

// Multiplicação: atribui o produto de x e y a x
console.log('Multiplicação: x *= y :>> ', x *= y); // x agora é 6 (3 * 2)

// Divisão: atribui o quociente de x e y a x
console.log('Divisão: x /= y :>> ', x /= y); // x agora é 3 (6 / 2)

// Incremento: pós-incrementa x (x é exibido antes de ser incrementado)
console.log('Loops: x++ :>> ', x++); // Exibe 3, depois x se torna 4

// Decremento: pós-decrementa x (x é exibido antes de ser decrementado)
console.log('Loops: x-- :>> ', x--); // Exibe 4, depois x se torna 3

// Loop while que continua enquanto x for menor ou igual a 100
while (x <= 100) {
    console.log('x :>> ', x); // Exibe o valor atual de x
    x *= 2; // Multiplica x por 2
}

// Exibe o valor final de x após o loop
console.log('Valor de x :>> ', x); // Exibe o valor final de x
