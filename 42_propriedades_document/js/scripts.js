// Acessa o elemento <body> do documento e imprime no console
console.log('document.body :>> ', document.body);

// Acessa o elemento <head> do documento e imprime no console
console.log('document.head :>> ', document.head);

// Acessa todos os links <a> da página e imprime no console (retorna uma coleção de links)
console.log('document.links :>> ', document.links);

// Imprime o primeiro link da coleção de links
console.log('document.links :>> ', document.links[0]);

// Imprime o segundo link da coleção de links (caso exista)
console.log('document.links :>> ', document.links[1]);

// Modifica o texto do primeiro link encontrado na página para "Twitter"
document.links[0].textContent = "Twitter";

// Imprime o URL atual da página
console.log('document.URL :>> ', document.URL);

// Imprime o título atual da página
console.log('document.title :>> ', document.title);

// Altera o título da página para "Aula 42"
document.title = "Aula 42";

// Imprime o título atualizado da página
console.log('document.title :>> ', document.title);
