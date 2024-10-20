// Define um array com uma lista de frutas
let lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão'];

// Cria um elemento <ul> para a lista
let listaUl = document.createElement('ul');

// Obtém o elemento <body> do documento
let body = document.getElementsByTagName('body');

// Adiciona o elemento <ul> criado ao <body> da página
body[0].appendChild(listaUl);

// Obtém todos os elementos <ul> do documento
let listaNoBody = document.getElementsByTagName('ul');

// Exibe o primeiro <ul> no console (o que acabamos de adicionar)
console.log(listaNoBody[0]);

// Loop para iterar sobre a lista de frutas
for (let i = 0; i < lista.length; i++) {
    // Cria um novo elemento <li> para cada fruta
    let liFor = document.createElement('li');
    
    // Cria um nó de texto com o nome da fruta
    let textoLi = document.createTextNode(lista[i]);
    
    // Adiciona o texto ao <li>
    liFor.appendChild(textoLi);
    
    // Adiciona o <li> à lista não ordenada (<ul>) no <body>
    listaNoBody[0].appendChild(liFor);
}
