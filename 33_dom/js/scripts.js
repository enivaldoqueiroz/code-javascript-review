// Seleciona o primeiro elemento <h1> no documento
let titulo = document.getElementsByTagName('h1')[0];
console.log("document.getElementsByTagName('h1')[0] :>> ", titulo);

// Seleciona todos os elementos <li> e exibe o quarto item (índice 3)
let lis = document.getElementsByTagName('li');
console.log("document.getElementsByTagName('li') :>> ", lis[3]);

// Seleciona o elemento com o id 'paragrafo'
let paragrafo = document.getElementById('paragrafo');
console.log("document.getElementById('paragrafo') :>> ", paragrafo);

// Seleciona todos os elementos com a classe 'item'
let itensDaLista = document.getElementsByClassName('item');
console.log("document.getElementsByClassName('item') :>> ", itensDaLista);

/*
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo</title>
</head>
<body>
    <h1>Título do Documento</h1>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li> <!-- Quarto item, acessado pelo índice 3 -->
        <li>Item 5</li>
    </ul>
    <p id="paragrafo">Este é um parágrafo.</p>
    <ul>
        <li class="item">Item A</li>
        <li class="item">Item B</li>
        <li class="item">Item C</li>
    </ul>
    <script src="seu_script.js"></script>
</body>
</html>
*/