// Define uma função chamada primeiraFuncao
function primeiraFuncao () {
    console.log('Hello World das funções :>> '); // Exibe uma mensagem no console
}

// Chama a função primeiraFuncao
primeiraFuncao(); // Chama a função e imprime "Hello World das funções"

// Define uma função que recebe um parâmetro nome
function dizerNome(nome){
    console.log('O nome é {0} :>> ', nome); // Exibe o nome recebido como argumento
}

// Chama a função dizerNome com diferentes nomes
dizerNome("Enivaldo"); // Exibe "O nome é {0} :>> Enivaldo"
dizerNome("Queiroz"); // Exibe "O nome é {0} :>> Queiroz"
dizerNome("Lana"); // Exibe "O nome é {0} :>> Lana"

// Define uma variável com o nome do banco de dados
let nomeDoBancoDeDados = "Mila";

// Chama a função dizerNome com o nome do banco de dados
dizerNome(nomeDoBancoDeDados); // Exibe "O nome é {0} :>> Mila"

// Define uma função que realiza a soma de dois números
function soma(a, b) {
    let soma = a + b; // Calcula a soma de a e b
    return soma; // Retorna o resultado da soma
}

// Chama a função soma com dois números e armazena o resultado
let somaUm = soma(2, 5);
console.log('Função soma(2, 5) :>> ', somaUm); // Exibe "Função soma(2, 5) :>> 7"

// Chama a função soma com outros dois números e armazena o resultado
let somaDois = soma(5, 5);
console.log('Função soma(5, 5) :>> ', somaDois); // Exibe "Função soma(5, 5) :>> 10"

// Chama a função soma diretamente dentro do console.log
console.log('Chamando função dentro do console :>> ', soma(4, 5)); // Exibe "Chamando função dentro do console :>> 9"
