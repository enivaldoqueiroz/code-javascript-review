// Exibe a mensagem antes de iniciar o setTimeout
console.log("Antes do setTimeout");

// Função que será executada uma vez após 2000ms (2 segundos)
setTimeout(function () {
    console.log('Testando o setTimeout :>> ');
}, 2000);

// Exibe a mensagem imediatamente após o setTimeout ser configurado
console.log("Depois do setTimeout");

// Variável inicializada com o valor 0
let n = 0;

// Função que será executada repetidamente a cada 50000ms (50 segundos)
setInterval(function () {
    console.log('Testando setInterval :>> ', n++);
}, 50000);

// ********************************************************************
// Monitorar a posição do mouse a cada 2 seg
let mouseX = 0;
let mouseY = 0;

// Função que captura a posição atual do mouse
function capturarPosicaoMouse(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}

// Adiciona um event listener para capturar o movimento do mouse
document.addEventListener('mousemove', capturarPosicaoMouse);

// Função que será executada a cada 2 segundos
function monitorarPosicaoMouse() {
    console.log('Posição do mouse - X: ', mouseX, ' Y: ', mouseY);
}

// Inicia o monitoramento da posição do mouse a cada 2 segundos (2000ms)
setInterval(monitorarPosicaoMouse, 2000);