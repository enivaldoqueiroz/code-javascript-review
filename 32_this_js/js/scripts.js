console.log('this :>> ', this);
// alert("Olá");
// this.alert("Olá 2");

let data = {
    nome: "Enivaldo",
    idade: 32
}

// let jsonData = {key1: 'value1', key2: 'value2'};

// const url = "https://example.org/products.json";
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(jsonData)
// }
// const response = fetch(url, options);

// console.log('response :>> ', response);

let pessoa = {
    nome:  "Enivaldo",
    idade: 32,
    falar: function(){
        console.log('Olá, tudo bem? :>> ');
    },
    dizerNome: function(){
        console.log('O meu nome é ' + this.nome);
    },
    aniversario: function(){
        this.idade += 1;
    },
    saudacao: function(){
        return 'Sr. ' + this.nome;
    }
};

pessoa.dizerNome();
pessoa.aniversario();

console.log(pessoa.idade);
console.log(pessoa.saudacao());