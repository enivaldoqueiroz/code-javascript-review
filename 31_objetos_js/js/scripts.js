// Definindo um objeto pessoa com propriedades e métodos
let pessoa = {
    nome: "Enivaldo", // Propriedade que armazena o nome da pessoa
    idade: 33, // Propriedade que armazena a idade da pessoa
    // Método que exibe uma mensagem no console
    falar: function() {
        console.log('Olá, tudo bem? :>> ');
    },
    // Método que realiza a soma de dois números
    soma: function(a, b) {
        return a + b;
    }
};

// Acessando e exibindo a propriedade nome do objeto pessoa
console.log('pessoa.nome :>> ', pessoa.nome); // Output: Enivaldo

// Chamando o método falar do objeto pessoa
pessoa.falar(); // Output: Olá, tudo bem? :>> 

// Chamando o método soma do objeto pessoa e armazenando o resultado
let soma = pessoa.soma(2, 2); 
console.log('soma :>> ', soma); // Output: 4

/*
pessoa.nome :>>  Enivaldo
Olá, tudo bem? :>> 
soma :>>  4
*/