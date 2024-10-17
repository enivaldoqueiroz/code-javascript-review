var obj = {
    nome: "Enivaldo",
    idade: 33,
    profissao: "Programador",
    estaTrabalhando: true
};

console.log('Objeto em JS :>> ', obj);
console.log('typeof Objeto em JS :>> ', typeof obj);

console.log('Acesso de propriedade de um objeto :>> ', obj.nome);
console.log('Acesso de propriedade de um objeto :>> ', obj.idade);
console.log('Acesso de propriedade de um objeto :>> ', obj.profissao);

obj.nome = "Lana";

console.log("O meu nome é " + obj.nome);

obj.graduacao = true;
console.log('Criando propriedade :>> ', obj);