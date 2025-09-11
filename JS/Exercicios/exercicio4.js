// Exercício 4: Crie um algoritmo que leia um número inteiro, e diga se ele é um número primo ou não.

const input = require(`prompt-sync`)();

let num = parseInt(input(`Intruduza um número inteiro: `));

function numeroPrimo(num){
    if(num < 2){
        console.log(`O número NÃO é primo`);
        return;
    }

    let primo = true;

    for (let i = 2; i < num; i++){
        if((num % i) === 0){
            primo = false;
            break;
        }
    }
    
    if (primo){
        console.log(`O ${num} é primo`);
    } else{
        console.log(`O ${num} NÃO é primo`);
    }
}


numeroPrimo(num);