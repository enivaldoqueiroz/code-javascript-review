// Seleciona todos os elementos com a classe 'item' e os exibe no console
let itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);

// Seleciona todos os <li> dentro do elemento com o id 'lista2'
let itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery);

// Seleciona todos os elementos com a classe 'item' dentro do elemento com o id 'lista'
let itensQuery2 = document.querySelectorAll('#lista .item');
console.log(itensQuery2);

// Seleciona o primeiro elemento com o id 'lista'
let lista = document.querySelector('#lista');
console.log(lista);

// Seleciona o primeiro <ul> no documento
let primeiraLista = document.querySelector('ul');
console.log(primeiraLista);

// Seleciona o primeiro <span> dentro do elemento com o id 'paragrafo'
let span = document.querySelector('#paragrafo span');
console.log(span);

/*
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo</title>
</head>
<body>
    <ul id="lista2">
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
    </ul>
    <div id="lista">
        <ul>
            <li class="item">Item A</li>
            <li class="item">Item B</li>
        </ul>
    </div>
    <p id="paragrafo">Este é um parágrafo com <span>um span</span>.</p>
    <script src="seu_script.js"></script>
</body>
</html>

*/