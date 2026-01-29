// pelo menos 1 de for, um de while, um de do while, um de vetor e um de matriz.
// Exercício 3 - Algorítmo que lê a idade de várias pessoas (a leitura termina quando for digitado uma idade negativa) 
// e mostra na tela a quantidade de pessoas com menos de 21 anos e a quantidade de pessoas com mais de 50 anos.


const leia = require("readline-sync");

let idade = 0;
let contadorMenor21 = 0;
let contadorMaior50 = 0;

while(idade >=0){

    idade = leia.questionInt("Digite a idade da pessoa (ou um valor negativo para sair): ");
    if(idade < 21 && idade >=0){
        contadorMenor21++;
    }else if(idade > 50){
        contadorMaior50++;
    }

}
if(idade < 0){
    console.log("Programa encerrado!");
}
console.log(`Quantidade de pessoas com menos de 21 anos: ${contadorMenor21}\nQuantidade de pessoas com mais de 50 anos: ${contadorMaior50}`);