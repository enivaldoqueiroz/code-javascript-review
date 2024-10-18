// Inserir o elemento no body
// createElement
let novoParagrafo = document.createElement("p");
console.log(novoParagrafo);

let texto = document.createTextNode("Este é o conteúdo do paragrafo");

novoParagrafo.appendChild(texto);

// mepear Body
let body = document.querySelector("body");
console.log(body);

body.appendChild(novoParagrafo);

// Inserir o elemento no container

let container =  document.getElementById("container");
console.log(container);

let el = document.createElement("span");
console.log(el);

let textSpan = document.createTextNode("Span Text Teste");
el.appendChild(textSpan);

container.appendChild(el);