// Exercício 3: Ler a nota de 10 alunos, calcular a media e mostrar essa média.

const input = require(`prompt-sync`)();

function mediaAlunos(){
    let notaTotal = 0;

    for (let i=1; i <= 10; i++){
        let nota = parseFloat(input(`Insira a nota do ${i}° aluno: `));
        notaTotal += nota;
    }
    let media = notaTotal / 10;
    console.log(`A média dos alunos é ${media}`);
}

mediaAlunos();