let startX = 0;
let startY = 0;
let isDrawing = false;

// Função para criar uma linha na tela
function desenharLinha(event) {
    if (!isDrawing) {
        // Armazena as coordenadas do primeiro clique
        startX = event.clientX;
        startY = event.clientY;
        isDrawing = true; // Indica que o primeiro clique foi feito
    } else {
        // Cria uma nova div para a linha
        let linha = document.createElement('div');

        // Define o estilo da linha
        linha.style.position = 'absolute';
        linha.style.backgroundColor = 'black';
        linha.style.height = '2px';

        // Calcula a distância e a rotação da linha
        let endX = event.clientX;
        let endY = event.clientY;
        let distancia = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
        let angulo = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

        // Define a largura e rotação da linha
        linha.style.width = `${distancia}px`;
        linha.style.transform = `rotate(${angulo}deg)`;
        linha.style.transformOrigin = '0 0'; // Origem da transformação para o início da linha

        // Posiciona a linha no ponto inicial
        linha.style.left = `${startX}px`;
        linha.style.top = `${startY}px`;

        // Adiciona a linha ao body
        document.body.appendChild(linha);

        // Reseta a flag para permitir desenhar outra linha
        isDrawing = false;
    }
}

// Adiciona um event listener para capturar os cliques do mouse
document.addEventListener('click', desenharLinha);
