let x = 5; // é igual a var x = 5;
x = 12;

const y = 10;

console.log('x :>> ', x);

if (true) {
    let x = 20;
    
    console.log('let x dentro do if :>> ', x);

    const y = 50;
    console.log('const y :>> ', y);
}

console.log('x :>> ', x);

for (let x = 0; x < 10; x++) {
    console.log('x :>> ', x);
    
}