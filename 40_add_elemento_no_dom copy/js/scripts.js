// Acrescentar um filho com JS

let el = document.createElement("div");
el.classList = "div-criada";

console.log(el);

// inserindo elemento filho
let container = document.querySelector("#container");
container.appendChild(el);

// inserBefore - Insere antes
let el2 = document.createElement("div");
el2.classList = "div-before";

el2.textContent = "div-before";

let el3 =  document.querySelector("#container .div-criada");
console.log(el3);
el3.textContent = "div-criada";

container.insertBefore(el2, el3);