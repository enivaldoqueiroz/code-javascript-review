// Função para criar um ponto na posição do clique
function criarPonto(event) {
    // Cria um novo elemento div
    let ponto = document.createElement('div');

    // Define o estilo do ponto
    ponto.style.width = '10px';
    ponto.style.height = '10px';
    ponto.style.backgroundColor = 'red';
    ponto.style.position = 'absolute';
    ponto.style.borderRadius = '50%';

    // Coloca o ponto na posição do clique
    ponto.style.left = `${event.clientX}px`;
    ponto.style.top = `${event.clientY}px`;

    // Adiciona o ponto ao body
    document.body.appendChild(ponto);
}

// Adiciona um event listener para capturar os cliques do mouse
document.addEventListener('click', criarPonto);
