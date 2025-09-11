// Exercício 2: Ler 10 números, e determinar se o número par e número impar.

const input = require(`prompt-sync`)();

let num=0;

function parImpar10(){

    for (let i=1; i <= 10; i++){

        num = input(`Insira um número: `);

        if ((num % 2) === 0){
            console.log(`O número ${num} é par`)
        } else {
            console.log(`O número ${num} é impar`)
        }
    }
}

parImpar10();