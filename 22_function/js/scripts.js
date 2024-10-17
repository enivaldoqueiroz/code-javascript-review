function primeiraFuncao () {
    console.log('Hello World das funções :>> ');
}

primeiraFuncao();

function dizerNome(nome){
    console.log('O nome é {0} :>> ', nome);
}

dizerNome("Enivaldo");
dizerNome("Queiroz");
dizerNome("Lana");

let nomeDoBancoDeDados = "Mila";

dizerNome(nomeDoBancoDeDados);

function soma(a, b) {
    let soma = a + b;
    return soma;
}

let somaUm = soma(2, 5);
console.log('Função soma(2, 5) :>> ', somaUm);

let somaDois = soma(5, 5);
console.log('Função soma(5, 5) :>> ', somaDois);

console.log('Chamando função dentro do console :>> ', soma(4, 5));