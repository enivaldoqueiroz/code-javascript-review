// Exibe o contexto atual, geralmente refere-se ao objeto global ou ao contexto de execução
console.log('this :>> ', this);

// Criando um objeto `data` com propriedades nome e idade
let data = {
    nome: "Enivaldo",
    idade: 32
};

// Exemplo de um objeto JSON que poderia ser enviado para um servidor
// let jsonData = {key1: 'value1', key2: 'value2'};

// URL para onde o fetch poderia ser enviado
// const url = "https://example.org/products.json";
// Configuração para a requisição POST
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(jsonData)
// }
// Executando a requisição fetch (comentada)
// const response = fetch(url, options);

// Exibe a resposta da requisição (comentada)
// console.log('response :>> ', response);

// Definindo um objeto `pessoa` com propriedades e métodos
let pessoa = {
    nome: "Enivaldo", // Propriedade nome
    idade: 32, // Propriedade idade
    // Método que exibe uma mensagem de saudação
    falar: function() {
        console.log('Olá, tudo bem? :>> ');
    },
    // Método que exibe o nome da pessoa usando o 'this'
    dizerNome: function() {
        console.log('O meu nome é ' + this.nome);
    },
    // Método que aumenta a idade da pessoa em 1
    aniversario: function() {
        this.idade += 1;
    },
    // Método que retorna uma saudação personalizada
    saudacao: function() {
        return 'Sr. ' + this.nome;
    }
};

// Chamando o método para dizer o nome da pessoa
pessoa.dizerNome(); // Output: O meu nome é Enivaldo

// Chamando o método para incrementar a idade da pessoa
pessoa.aniversario(); 

// Exibindo a nova idade da pessoa após o aniversário
console.log(pessoa.idade); // Output: 33

// Exibindo a saudação gerada pelo método saudacao
console.log(pessoa.saudacao()); // Output: Sr. Enivaldo

/*
this :>>  <contexto atual>
O meu nome é Enivaldo
33
Sr. Enivaldo
*/