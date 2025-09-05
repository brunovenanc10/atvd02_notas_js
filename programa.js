   
const totalAulas = parseInt(prompt("Digite o número total de aulas"));
const faltas = parseInt(prompt("Digite o número de faltas do aluno"));
const p1 = parseFloat(prompt("digite a nota do p1:"));
const p2 = parseFloat(prompt("digite a nota do p2"));

const percentualPresenca = ((totalAulas - faltas) / totalAulas) * 100;

const media = (p1 + p2) / 2;

let situacao = "";
let notaRecuperacao = "Não foi feita";


if (percentualPresenca < 75 ) {
    situacao = "Reprovado por falta";
}else {
    if(media >= 7){
        situacao = "aprovado";
    } else if (media >= 5 && media < 7){
        notaRecuperacao = parseFloat(prompt("Digite a nota da prova de recuperação"));
        const novaMedia = (media + notaRecuperacao) / 2;

        if (novaMedia >= 6) {
            situacao = "Aprovado após recuperação";
        } else {
            situacao = "Reprovado após recuperação";
        }
    } else {
        situacao = "Reprovado por nota"

    }    

}

console.log ("---Resultado---");
console.log (`Número de aulas do semestre: ${totalAulas});`);
console.log (`Número de faltas do aluno no semestre: ${faltas}`);
console.log (`Percentual de presença do aluno no semestre: ${percentualPresenca.toFixed(2)}%`);
console.log (`Primeira nota: ${p1}`);
console.log (`Segunda nota: ${p2}`);
console.log (`Nota complementar (recuperação) : ${notaRecuperacao}`);
console.log (`Situação final: ${situacao}`);



