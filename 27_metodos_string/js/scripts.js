// length
let nome = "Enivaldo";

console.log('length nome.length :>> ', nome.length);
console.log('length Enivaldo.length :>> ', "Enivaldo".length);

// indexOf
console.log('nome[2] :>> ', nome[2]);

let frase = "O rato roeu a roupa do rei de Roma";
console.log('indexOf :>> ', frase.indexOf("roeu"));

// slice
let roeu = frase.slice(7, 11);
console.log('Retorna um parte da string :>> ', roeu);

// replace
let novaFrase = frase.replace("roeu", "teste");
console.log('Retorno a palavra substuida :>> ', novaFrase);