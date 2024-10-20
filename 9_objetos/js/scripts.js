// Criação de um objeto 'obj' com propriedades 'nome', 'idade', 'profissao', e 'estaTrabalhando'
var obj = {
    nome: "Enivaldo",
    idade: 33,
    profissao: "Programador",
    estaTrabalhando: true
};

console.log('Objeto em JS :>> ', obj); // Exibe o objeto completo no console
console.log('typeof Objeto em JS :>> ', typeof obj); // Exibe o tipo de 'obj', que será 'object'

// Acessando as propriedades do objeto individualmente
console.log('Acesso de propriedade de um objeto :>> ', obj.nome); // Exibe o valor da propriedade 'nome' (Enivaldo)
console.log('Acesso de propriedade de um objeto :>> ', obj.idade); // Exibe o valor da propriedade 'idade' (33)
console.log('Acesso de propriedade de um objeto :>> ', obj.profissao); // Exibe o valor da propriedade 'profissao' (Programador)

// Alterando o valor da propriedade 'nome'
obj.nome = "Lana";

console.log("O meu nome é " + obj.nome); // Exibe a string concatenada com o novo valor da propriedade 'nome' (Lana)

// Adicionando uma nova propriedade 'graduacao' ao objeto 'obj'
obj.graduacao = true;
console.log('Criando propriedade :>> ', obj); // Exibe o objeto atualizado com a nova propriedade 'graduacao'
