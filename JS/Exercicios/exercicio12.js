/*
Exercício 12: Elabore um programa que leia quantos números quer que se efetue a soma,
subtrações, divisões, multiplicações e no fim por meio de um acumulador diga quantas
operações foram efetuadas. Exemplo introduzindo o número 60 o programa deve apresentar
60 a somar, dividir multiplicar e subtrair por todos os números menores que ele
*/

const input = require(`prompt-sync`)();

let num = parseInt(input(`Introduza um número inteiro: `));

function operacoesMatematicas(num){
    for (let i = 0; i <= num; i++){
        console.log(`Soma: ${num} + ${i} = ${num+i}`);
        console.log(`Subtração: ${num} - ${i} = ${num-i}`);
        if (i === 0){
            console.log(`Impossivel dividir por 0`);
        } else {
            console.log(`divisão: ${num} / ${i} = ${num/i}`);
        }
        console.log(`Multiplicação: ${num} * ${i} = ${num*i}\n`);
    }
}

operacoesMatematicas(num);