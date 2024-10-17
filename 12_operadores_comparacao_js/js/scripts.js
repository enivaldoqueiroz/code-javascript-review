var idade = 15;
var possuiCarro = 1;

if (idade >= 18) {
 console.log('O usuario pode fazer a carteira :>> ');
}

if (idade <= 17) {
    console.log('O usuario não pode fazer a carteira :>> ');
}

if (possuiCarro) {
    console.log('O usuario já pode andar de carro :>> ');
}
console.log('valor da variavel possuiCarro :>> ', possuiCarro);

var nome = "Enivaldo Eni";

if (nome == "Enivaldo") {
    console.log('O seu nome é  :>> ', nome );
}

const nomeIndex = nome.search("0");
console.log('nomeIndex :>> ', nomeIndex);

if (nomeIndex !== -1) {
    console.log('Parte do Nome encontrado :>> ', nome);
}