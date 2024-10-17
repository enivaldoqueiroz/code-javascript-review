let lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão'];

let listaUl = document.createElement('ul');

let body = document.getElementsByTagName('body');

// console.log('body :>> ', body[0]);

body[0].appendChild(listaUl);

let listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for (let i = 0; i < lista.length; i++) {

    let liFor = document.createElement('li');
    let textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);

    listaNoBody[0].appendChild(liFor);
}