// Selecionar o container
let container = document.querySelector("#container");

// Selecionar o primeiro parágrafo dentro do container
let p = document.querySelector("#container p");

// Remover o parágrafo do container usando removeChild()
container.removeChild(p);

// Selecionar o elemento com a classe 'subtitle'
let subtitle = document.querySelector(".subtitle");

// Remover o elemento subtitle diretamente
subtitle.remove();
