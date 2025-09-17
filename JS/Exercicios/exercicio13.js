// Exercício 13: Elabore um programa que leia um número e mostre a tabuada. (multiplicar de 1 a 10)

const input = require(`prompt-sync`)();

let num = parseInt(input(`Introduza um número inteiro: `));

function tabuadaNum(num){

    for (let i=1; i <= 10; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

tabuadaNum(num);