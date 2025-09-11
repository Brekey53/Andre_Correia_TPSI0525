// Exercício 8: Faça um algoritmo que gere a seguinte série: 10, 20, 30, 40, ..... 980, 990, 1000.e outro a fazer 15, 25, 35, 985, 995.(dois ciclos)

function gerarNumeros(){
    for (let i = 10; i <= 1000; i+=10){
        console.log(i);
    }
    for (let i = 15; i <= 1000; i+=10){
        console.log(i);
    }
}

function gerarNumerosIntercalados(){
    for (let i = 10; i <= 1000; i++){
        if ((i%10) === 0){
            console.log(i);
            continue;
        }
        if ((i%5) === 0){
            console.log(i);
        }
    }
}

// caso seja para intercalar os números
// gerarNumerosIntercalados();
gerarNumeros();