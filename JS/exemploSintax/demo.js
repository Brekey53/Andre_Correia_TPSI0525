// npm install prompt-sync
const input = require(`prompt-sync`)();

let nome = ``;

nome = input(`intruduzir nome: `);

console.log(`Olá, ${nome}!`);

function adivinhaNome(nomeAdivinha){
    let op = ``;

    do{
        let nomeIntroduzido = input(`introduzir o nome a adinhar: `);
        if (nomeAdivinha === nomeIntroduzido){
            console.log(`Adivinhou o nome!`);
            break;
        } else{
            op = input(`Errou! Tentar novamente? (s - sim | n - não): `);
        }

    } while (op === "s")
}

adivinhaNome(`andre`);