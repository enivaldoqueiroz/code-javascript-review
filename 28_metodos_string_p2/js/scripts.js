// toLowerCase e toUpperCase
let frase = "Esta é a frase que vamos manipular";

// O método toUpperCase converte todos os caracteres da string para maiúsculas
console.log('toUpperCase :>> ', frase.toUpperCase()); // Output: "ESTA É A FRASE QUE VAMOS MANIPULAR"

// O método toLowerCase converte todos os caracteres da string para minúsculas
console.log('toLowerCase :>> ', frase.toLowerCase()); // Output: "esta é a frase que vamos manipular"

// trim
let nome = "   Enivaldo    "; // Nome com espaços em branco antes e depois
let nomeTrim = nome.trim(); // Remove os espaços em branco do início e do fim

console.log('nome sem trim :>> ', nome); // Output: "   Enivaldo    "
console.log('nome com trim :>> ', nomeTrim); // Output: "Enivaldo"

// split
// O método split divide uma string em um array, com base em um delimitador especificado
console.log('split :>> ', frase.split(" ")); // Output: Array com as palavras da frase

let tags = "PHP, JavaScript, HTML, CSS";
// Dividindo a string 'tags' em um array usando a vírgula como delimitador
let tagsArr = tags.split(",");
// O tipo do array resultante é 'object' em JavaScript
let typeofTags = typeof tagsArr; 
console.log("Retorno array: ", tagsArr); // Output: ["PHP", " JavaScript", " HTML", " CSS"]
console.log("Retorna o tipo Object: ", typeofTags); // Output: "object"

// lastIndexOf
let fraseDois = "Eu quero a última palavra teste desta frase de teste";
// lastIndexOf retorna o índice da última ocorrência da substring especificada
console.log('lastIndexOf :>> ', fraseDois.lastIndexOf("teste")); // Output: índice da última ocorrência de "teste"

/*
toUpperCase :>>  ESTA É A FRASE QUE VAMOS MANIPULAR
toLowerCase :>>  esta é a frase que vamos manipular
nome sem trim :>>    Enivaldo    
nome com trim :>>  Enivaldo
split :>>  [ 'Esta', 'é', 'a', 'frase', 'que', 'vamos', 'manipular' ]
Retorno array:  [ 'PHP', ' JavaScript', ' HTML', ' CSS' ]
Retorna o tipo Object:  object
lastIndexOf :>>  35
*/