for (let i = 10; i > 0; i--) {
    console.log('valor de i :>> ', i);
    if (i == 8) {
        break;
    }    
}

console.log('BREAK :>> ');


let x = 10;
while (x < 100) {
    x +=10;
    if (x === 60 || x === 90) {
        console.log('CONTINUE :>> ');
        continue;
    }
    
    console.log('valores de x :>> ', x);
}