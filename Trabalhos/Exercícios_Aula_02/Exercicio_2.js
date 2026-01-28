//Exercicio 2 da lista
// Entra com a nota 1 --> Entra com a nota 2 --> Entra com a nota 3 --> Entra com a nota 4 --> Calcula a média --> Mostra a média na tela --> Fim
console.log("Exercicio 2 - Cálculo de Média\n");
const leia = require('readline-sync');
let notas = [];
let media;  
let statusAluno;
for (let i = 0; i < 4; i++) {

    notas[i] = leia.questionFloat(`Digite a nota ${i+1}: \n`); //Lê as 4 notas do usuário e armazena no array notas para cálculo do somatório das notas e da média.

}

//console.log("\nNotas inseridas:", notas);

let soma = notas[0] + notas [1] + notas [2] + notas[3];

media = soma / 4; // Cálculo da média somando as 4 notas e dividindo por 4



if (media >= 7){
    statusAluno = "Aprovado(a)";
} else if (media >= 5 && media < 7){
    statusAluno = "Recuperação(a)";    
}else{
    statusAluno = "Reprovado(a)";
}

console.log (`\nA média das notas é: ${media.toFixed(2)} e o(a) aluno(a) está ${statusAluno}`); //Mostra a média das notas na tela.
// Fim do Exercicio 2 da lista

