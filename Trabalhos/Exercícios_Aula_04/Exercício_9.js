// pelo menos 1 de for, um de while, um de do while, um de vetor e um de matriz.
// Exercício 9 - Algorítmo que lê uma matriz 3x3 de números inteiros e mostra na tela os elementos que estão na diagonal principal, os elementos da diagonal secundária,
// a soma de todos os elementos da diagonal primaria e a soma de todos os elementos da diagonal secundária.



const leia = require("readline-sync");

let matrizRegular_3x3 = Array.from({ length: 3 }, () =>    
    Array.from({ length: 3 }, () => leia.questionInt("Digite um numero: ")) //Jeito fácil e compacto de criar uma matriz 2x3 e preencher com valores do usuário
);
console.table(matrizRegular_3x3);


let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;
console.log("Elementos da diagonal principal:");
for (let i = 0; i < matrizRegular_3x3.length; i++) {
    console.log(matrizRegular_3x3[i][i]); // Elementos da diagonal principal onde linha = coluna. EX: [0][0], [1][1], [2][2]
    somaDiagonalPrincipal += matrizRegular_3x3[i][i];
}
console.log("Elementos da diagonal secundaria:");
for (let i = 0; i < matrizRegular_3x3.length; i++) {
    console.log(matrizRegular_3x3[i][matrizRegular_3x3.length - 1 - i]);// Elementos da diagonal secundaria onde linha + coluna = tamanho da matriz -1. EX: [0][2], [1][1], [2][0]
    somaDiagonalSecundaria += matrizRegular_3x3[i][matrizRegular_3x3.length - 1 - i];
}

console.log(`Soma dos elementos da diagonal principal: ${somaDiagonalPrincipal}
        \nSoma dos elementos da diagonal secundaria: ${somaDiagonalSecundaria}`);

//fim do exercicio 9