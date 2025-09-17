// Exercício 14: Altere o programa anterior para que mostre todas as tabuadas de 1 a 100. (ciclos for).

const input = require(`prompt-sync`)();

let num = parseInt(input(`Introduza um número inteiro: `));

function tabuadaNumAte100(num){

    for (let i=1; i <= 100; i++){
        console.log(`${num} * ${i} = ${num*i}`);
       
        if (i % 10 === 0){
            console.log();
        }
    }
}

tabuadaNumAte100(num);