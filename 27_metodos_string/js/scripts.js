// length
let nome = "Enivaldo"; // Declaração de uma string

// A propriedade length retorna o comprimento da string
console.log('length nome.length :>> ', nome.length); // Output: 8 (número de caracteres em "Enivaldo")
console.log('length Enivaldo.length :>> ', "Enivaldo".length); // Output: 8

// indexOf
// Acessando o caractere na posição 2 (começando do 0)
console.log('nome[2] :>> ', nome[2]); // Output: 'i' (terceiro caractere de "Enivaldo")

let frase = "O rato roeu a roupa do rei de Roma";
// indexOf retorna a posição da primeira ocorrência de uma substring
console.log('indexOf :>> ', frase.indexOf("roeu")); // Output: 10 (posição onde "roeu" começa)

// slice
// O método slice extrai uma parte da string entre os índices fornecidos
let roeu = frase.slice(7, 11);
console.log('Retorna uma parte da string :>> ', roeu); // Output: "roeu" (parte extraída da frase)

// replace
// O método replace substitui a primeira ocorrência de uma substring por outra
let novaFrase = frase.replace("roeu", "teste");
console.log('Retorno a palavra substituída :>> ', novaFrase); // Output: "O rato teste a roupa do rei de Roma"

/*
length nome.length :>>  8
length Enivaldo.length :>>  8
nome[2] :>>  i
indexOf :>>  10
Retorna uma parte da string :>>  roeu
Retorno a palavra substituída :>>  O rato teste a roupa do rei de Roma
 */