// Exercícios 15: Elabore um programa que escreva no ecrã todas as linhas de código ASCII(0 a 255)
// e o código correspondente. Dispor de 20 em 20 com a condição de continuação ou saída do programa.

const input = require(`prompt-sync`)();

function escreverLinhasDeCodigoASCII(){

    for (let i = 0; i <= 255; i++) {
        // String.fromCharCode() serve para dar o equivalente do numero passado em argumento para char equivalente em ASCII
        console.log(i + " = " + String.fromCharCode(i));
    }

}

escreverLinhasDeCodigoASCII();
