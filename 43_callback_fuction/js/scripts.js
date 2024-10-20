// CallBack
function exibir(num){
    console.log('A operação resultou em :>> ', num);
}

function soma(a, b, callback){
    let op = a + b;
    callback(op);
}

function multplicacao(a, b, callback){
    let op = a * b;
    callback(op);
}

soma(2, 2, exibir);

multplicacao(2, 4, exibir);