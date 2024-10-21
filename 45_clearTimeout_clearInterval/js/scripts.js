// clearTimeout na prática
let x = 0;

let myTimeout = setTimeout(function() {
    console.log("0 x é 0");
}, 1500);

x = 5;

if (x > 0){
    console.log(myTimeout);
    clearTimeout(myTimeout);
    console.log("O x passou de 0");
}

// clearSetInterval na prática
let myInterval = setInterval(function() {
    console.log("Imprimindo interval");
}, 500);

setTimeout(function() {
    console.log("Não precisamos mais repetir");
    console.log(myInterval);
    clearInterval(myInterval);
}, 1500);