// Hoisting - içamento
console.log('sobrenome içamento :>> ', sobrenome); 
// Exibe 'undefined' porque a declaração de 'sobrenome' foi içada, mas a atribuição acontece depois desta linha

var nome = null; // 'nome' é declarado e inicializado com 'null'
var sobrenome = "Queiroz"; // 'sobrenome' é declarado e inicializado com "Queiroz"

console.log('nome :>> ', nome); // Exibe 'null', que é o valor inicial de 'nome'
console.log('sobrenome :>> ', sobrenome); // Exibe 'Queiroz', pois já foi atribuído

nome = "Enivaldo"; // Atribui um novo valor à variável 'nome'

console.log(nome); // Exibe 'Enivaldo', que é o valor atualizado de 'nome'
