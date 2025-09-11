// Exercício 6: Crie um algoritmo que mostre os 10 primeiros números primos.

const input = require(`prompt-sync`)();

//let num = parseInt(input(`Intruduza um número inteiro: `));

let num = 0;

function numeroPrimo(num){
    if(num < 2){
        return false;
    }

    for (let i = 2; i < num; i++){
        if((num % i) === 0){
            return false;
        }
    }

    return true;
}

function primeiros10Primos(){
    let contador = 0;
    let num = 2;

    while (contador < 10){
        if (numeroPrimo(num)){
            console.log(num)
            contador ++;
        }
        num++;
    }
}

primeiros10Primos();