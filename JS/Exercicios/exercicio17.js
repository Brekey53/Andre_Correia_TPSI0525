// Exercícios 17: Elabore um programa que determine os múltiplos de 5 mas não múltiplos de 3 …. De 1 a 1000 deve ser a sequência.

const input = require(`prompt-sync`)()

function multiplosComRegras(){

    for(let i=1; i<=1000; i++){
        if( i % 3 === 0){
            continue;
        } else if (i % 5 === 0){
            console.log(i);
        }
    }

}

multiplosComRegras();