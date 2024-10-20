// 1º Seleciona o elemento com id "title"
let title = document.querySelector("#title");

// 2º Adiciona os estilos ao elemento
title.style.color = "red";  // Define a cor do texto como vermelho
title.style.backgroundColor = "yellow";  // Define a cor de fundo como amarelo

// Adicionar vários estilos de uma só vez usando cssText
let subtitle = document.querySelector(".subtitle");
subtitle.style.cssText = "color: blue; background-color: pink; font-size: 50px";
