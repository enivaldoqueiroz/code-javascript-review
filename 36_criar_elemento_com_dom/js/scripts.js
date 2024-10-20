// Criar um novo parágrafo
let novoParagrafo = document.createElement("p");
console.log(novoParagrafo); // Exibe o novo parágrafo no console

// Criar um texto para o parágrafo
let texto = document.createTextNode("Este é o conteúdo do parágrafo");

// Adicionar o texto ao novo parágrafo
novoParagrafo.appendChild(texto);

// Selecionar o body do documento
let body = document.querySelector("body");
console.log(body); // Exibe o body no console

// Inserir o novo parágrafo no body
body.appendChild(novoParagrafo);

// Inserir o elemento no container

// Selecionar o elemento com id 'container'
let container = document.getElementById("container");
console.log(container); // Exibe o container no console

// Criar um novo elemento 'span'
let el = document.createElement("span");
console.log(el); // Exibe o novo span no console

// Criar um texto para o span
let textSpan = document.createTextNode("Span Text Teste");

// Adicionar o texto ao novo span
el.appendChild(textSpan);

// Inserir o novo span no container
container.appendChild(el);
