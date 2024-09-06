// VARIÁVEIS E FUNÇÕES
let userName = getFirstName ("Márcio Fabrício Leitão");

function getFirstName(name) {
    let FirstName = name.split(" ") [0]
    return FirstName
}

let saldoVitorias = 91;
let nivel;

// ESTRUTURA DE DECISÃO
if (saldoVitorias <= 10) {
    nivel="Ferro";
} else if (saldoVitorias>=11 && saldoVitorias<=20) {
    nivel="Bronze";
} else if (saldoVitorias>=21 && saldoVitorias <=50) {
    nivel="Prata";
} else if (saldoVitorias>=51 && saldoVitorias<=80) {
    nivel="Ouro";
} else if (saldoVitorias>=81 && saldoVitorias<=90) {
    nivel="Diamante";
} else if (saldoVitorias>=91 && saldoVitorias<=100) {
    nivel="Lendário";
} else if (saldoVitorias>=101) {
    nivel="Imortal";
} 


// RESULTADO
console.log(`O Herói de nome ${userName}, tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`);