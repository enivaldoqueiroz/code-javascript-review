// Seleciona o elemento com o id 'title' e o armazena na variável 'title'
let title = document.querySelector("#title");
console.log(title);

// Altera o conteúdo HTML do elemento 'title'
title.innerHTML = "Teste o texto alterado";

// Seleciona o primeiro elemento com a classe 'subtitle' e o armazena na variável 'subtitle'
let subtitle = document.querySelector(".subtitle");
console.log(subtitle);

// Altera o conteúdo de texto do elemento 'subtitle' usando textContent
subtitle.textContent = "Testando o textContent";
