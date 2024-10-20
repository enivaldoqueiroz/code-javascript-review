// Criar um novo elemento h3
let el = document.createElement("h3");
el.classList = "testando-classe";  // Adiciona uma classe ao novo elemento

let texto = document.createTextNode("Este é o texto do H3");  // Cria um texto
el.appendChild(texto);  // Adiciona o texto ao h3

console.log('el :>> ', el);  // Log do novo elemento h3

// Selecionar o elemento que quero substituir
let title = document.querySelector("#title");  // Assume que existe um elemento com id "title"
console.log('title :>> ', title);  // Log do elemento que será substituído

// Selecionar o pai do elemento title
let pai = title.parentNode;  // Obtém o nó pai do elemento title

// Substituir o elemento title pelo novo h3
pai.replaceChild(el, title);  // Substitui o elemento title pelo novo elemento h3
