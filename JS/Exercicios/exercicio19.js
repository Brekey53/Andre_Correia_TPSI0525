// Exercícios 19:Escreva um programa que mostre os primeiros 60 números da serie bonatchi.
// 1, 1, 2, 3, 5, 8, 13, 21.
// Como se constrói.
//1+1=2
// 1+2=3
//  2+3=5

function fibonacci(){

    let num1 = 1;
    let num2 = 1;
    let num3 = 0;

    for(let i = 1; i <= 60; i++){
        num3 = num1+num2;
        console.log(`${num1} + ${num2} = ${num3}`);

        num1 = num2;
        num2 = num3;
    }
}

fibonacci();
