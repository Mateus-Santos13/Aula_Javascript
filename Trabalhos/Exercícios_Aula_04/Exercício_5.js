// pelo menos 1 de for, um de while, um de do while, um de vetor e um de matriz.
// Exercício 5 - Algorítmo que lê números inteiros do usúario até que o usuário digite 0. Ao final, o programa deve mostrar a soma de todos os números positivos.

const leia = require("readline-sync");

let numero = 0;
let somaPositivos = 0;


do{
    numero = leia.questionInt("Digite um numero inteiro (ou 0 para sair): ");

    if(numero > 0){
        somaPositivos += numero;
    }else if(numero < 0){
        console.log("Numero negativo nao sera somado!");
    }

}while(numero !== 0);

console.log(`A soma de todos os numeros positivos digitados e: ${somaPositivos}`);