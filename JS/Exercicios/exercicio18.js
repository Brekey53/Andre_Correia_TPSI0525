// Exercícios 18: Elabore um programa que leia uma entrada e diga quantos números perfeitos existem. Exemplo de numero perfeito em que somando todos os divisores ele da o numero inicial.
// 6=3+2+1 .

const input = require(`prompt-sync`)()

function numerosPerfeitos(){


    let limite = parseInt(input("Introduza um número limite: "));

    console.log(`Números perfeitos até ${limite}:`);

    for (let n = 2; n <= limite; n++) {
        if (numEPerfeito(n)) {
            console.log(`${n}`);
        }
    }


}


function numEPerfeito(num) {

    let soma = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            soma += i;
        }
    }
    return soma === num;
}

numerosPerfeitos();