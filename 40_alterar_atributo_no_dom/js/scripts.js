// Selecionar o elemento com id "title" e adicionar um atributo de classe
let title = document.querySelector("#title");
title.setAttribute("class", "testendo-atributo");  // Adiciona a classe "testendo-atributo"
console.log('title :>> ', title);  // Log do elemento com o atributo adicionado

// Selecionar o botão com id "btn" e desativá-lo
let btn = document.querySelector("#btn");
btn.setAttribute("disabled", "disabled");  // Adiciona o atributo "disabled" ao botão

// Selecionar o elemento com classe "subtitle" e adicionar o atributo id
let suptitle = document.querySelector(".subtitle");
suptitle.setAttribute("id", "titulo-2");  // Define um novo id "titulo-2" para o elemento

// Remover o atributo id do elemento com id "lista"
let lista = document.querySelector("#lista");
lista.removeAttribute("id");  // Remove o atributo id do elemento
