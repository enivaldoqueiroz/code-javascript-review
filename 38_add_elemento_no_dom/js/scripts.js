// Criar um novo elemento div
let el = document.createElement("div");
el.classList = "div-criada";  // Adiciona uma classe ao elemento

console.log(el);  // Log do novo elemento

// Inserir o novo elemento div no container
let container = document.querySelector("#container");
container.appendChild(el);  // Adiciona el como filho do container

// Criar outro novo elemento div
let el2 = document.createElement("div");
el2.classList = "div-before";  // Adiciona uma classe ao segundo elemento

el2.textContent = "div-before";  // Define o texto do novo elemento

// Selecionar o primeiro elemento criado para inserir o segundo antes dele
let el3 = document.querySelector("#container .div-criada");
console.log(el3);  // Log do elemento que será o próximo filho

el3.textContent = "div-criada";  // Atualiza o texto do primeiro elemento

// Inserir el2 antes de el3 dentro do container
container.insertBefore(el2, el3);
