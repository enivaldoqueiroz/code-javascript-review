let idade = 16;
let nome = "Enivaldo";

if (nome == "Enivaldoo" && idade == 16) {
    console.log('O Enivaldo pode entrar na aula de esgrima :>> ');
} else {
    console.log(`Este não é o ${nome} :>> `);
}

if (1 == 1 && 3 > 2 && true) {
    console.log('Passou na validação :>> ');
}

if ((1 == 1 && 3 > 2) && false) {
    console.log('Passou na validação :>> ');
}