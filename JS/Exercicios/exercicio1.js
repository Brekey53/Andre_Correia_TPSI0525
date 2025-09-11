
// Exercício 1: Crie um algoritmo que mostre os 30 primeiros números ímpares E pares. (como diz 30 primeiros ímpares E pares coloquei os 60 primeiros números)


const input = require(`prompt-sync`)();

function parImpar(){
    for (let i = 1; i <= 60; i++){
        if ((i % 2) === 0){
            console.log(`o numero ${i} é par`);
        } else {
            console.log(`o numero ${i} é impar`);
        }
    }
}

parImpar();