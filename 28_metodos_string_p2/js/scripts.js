// toLowerCase e toUpperCase
let frase = "Esta é a frase que vamos manipular";

console.log('toUpperCase :>> ', frase.toUpperCase());

console.log('toLowerCase :>> ', frase.toLowerCase());

// trim
let nome = "   Enivaldo    "
let nomeTrim = nome.trim();

console.log('nome sem trim :>> ', nome);
console.log('nome com trim :>> ', nome.trim());

// split
console.log('split :>> ', frase.split(" "));

let tags = "PHP, JavaScript, HTML, CSS";
let tagsArr = tags.split(",");
let typeofTags = typeof tagsArr;
console.log("Retorno array: ",tagsArr);
console.log("Retorna o tipo Object: ", typeofTags);

// lastIndexOf
let fraseDois = "Eu quero a última palavra teste desta frase de teste";

console.log('lastIndexOf :>> ', fraseDois.lastIndexOf("teste"));