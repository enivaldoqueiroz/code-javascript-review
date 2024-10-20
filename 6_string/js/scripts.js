// Declaração das variáveis 'nome' e 'sobrenome'
var nome = "Enivaldo";
var sobrenome = "Queiroz";

// Concatenação de 'nome' e 'sobrenome' com um espaço no meio para formar o nome completo
var nomeCompleto = nome + " " + sobrenome;

console.log('nome :>> ', nome); // Exibe o valor da variável 'nome' (Enivaldo)
console.log('typeof :>> ', typeof nome); // Exibe o tipo de 'nome' (string)

console.log('sobrenome :>> ', sobrenome); // Exibe o valor da variável 'sobrenome' (Queiroz)
console.log('typeof :>> ', typeof sobrenome); // Exibe o tipo de 'sobrenome' (string)

console.log('nomeCompleto :>> ', nomeCompleto); // Exibe o valor de 'nomeCompleto' (Enivaldo Queiroz)

// Declaração de uma frase como string
var frase = 'Esta é uma frase complexa';
console.log('frase :>> ', frase); // Exibe o valor da variável 'frase'
console.log('frase :>> ', typeof frase); // Exibe o tipo de 'frase' (string)

// Concatenação de 'nome' com a 'frase'
console.log('Concatenação :>> ', nome + " " + frase); // Exibe a concatenação de 'nome' e 'frase'

// Usando document.write para escrever diretamente no documento HTML com aspas duplas e simples
document.write('Ele disse: "Olá"'); // Exibe a frase com aspas duplas
document.write("Ele disse: 'Olá'"); // Exibe a frase com aspas simples
