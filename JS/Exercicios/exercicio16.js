// Exercícios 16: Elabore um programa que constitua a média de 30 números pares que sejam introduzidos. Validando a entrada de números inteiros entre 1 e 50.

const input = require(`prompt-sync`)();

function media30Numeros(){

    
    //let continuar = true;
    let contador = 0;
    let soma = 0;

    while (contador < 30){
        let num = parseInt(input(`Introduza um numero par inteiro entre 1 e 50: `));

        if(num >= 1 && num <= 50 && num % 2 === 0){
            soma += num;
            contador++;
        } else {
            console.log(`Número não corresponde aos requisitos! Tente de novo.\n`);
        }
        
    }

    console.log(`A média dos 30 números inseridos é ${soma/30}`);

}

media30Numeros();