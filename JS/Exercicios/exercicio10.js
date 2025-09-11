// Exercício 10: Elabore um programa que lê um número e escreve quantos divisores ele possui.

const input = require(`prompt-sync`)();

let num = parseInt(input(`Introduza um número: `));
let contadorDivisores = 0;

function divisores(num){

    for (let i = 1; i <= num; i++){
        if ((num % i) === 0) {
            contadorDivisores++;
        }
    }

    console.log(`O número ${num} tem ${contadorDivisores} divisores`);

}

divisores(num);