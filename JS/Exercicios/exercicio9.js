//  Exercício 9: Escreva um programa que solicite um número ao utilizador até que o valor deste esteja entre os valores 1 e 100. (Use o ciclo do ... while)

const input = require(`prompt-sync`)();


function numerosComWhile(){
    let num = parseFloat(input(`Introduza um número: `));
    
    while  (num < 1 || num > 100 ){
        num = parseFloat(input(`Número fora do esperado! Introduza um número novamente: `));
    }

    console.log(`Muito bem, tinha de ser um número entre 1 e 100`);
}

numerosComWhile();