/*
**JSON**

- JSON - JavaScript Object Notation;
- Um formato de representação de dados;
- Mais simples que XML, que é utilizado para fins parecidos;
- Utiliza o formato de chave e valor;
- É leve para ser enviado por requições;
- Muito utilizado para API e também arquivos de configurações;

**TIPOS DE DADOS**

- O JSON aceita diversos tipos de dados;
- Strings - "Olá Mundo";
- Número - 1 ou 12.54;
- Array - [1,2,3];
- Objetos - {"nome": "Enivaldo"};
- Dados nulos - null;
*/

const objs = [
    {
        "nome": "Enivaldo",
        "idade": 30,
        "esta_trabalhando": true,
        "detalhes_profissao": {
            "profissao": "Programar",
            "empresa": "Empresa-X"
        },
        "hobbies": [
            "Programar",
            "Correr",
            "Ler"
        ]
    },
    {
        "nome": "Mila",
        "idade": 20,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissao": null,
            "empresa": null
        },
        "hobbies": [
            "Jogar",
            "Academia"
        ]
    }
]

// console.log(objs);

// JSON.stringify(objs) - Converter objeto para json
const jsonData = JSON.stringify(objs);
console.log(jsonData);
console.log(typeof jsonData);
console.log("»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");

// JSON.parse(jsonData) - Converter json para objeto
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);
console.log("»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");

objData.map((pessoa) => {
    console.log(pessoa.nome, pessoa.idade);
});