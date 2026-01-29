// pelo menos 1 de for, um de while, um de do while, um de vetor e um de matriz.
// Exercício 2 - Algorítmo que lê 10 números inteiros pelo teclado e mostra na tela quantos números são pares e quantos são ímpares.
const leia = require("readline-sync");



let contadorPares = 0;
let contadorImpares = 0;

for (let i = 1; i <=10 ; i++) {
    
let numero = leia.questionInt(`Digite o ${i} numero inteiro: `);

    if(numero %2 === 0){
        contadorPares++;
    }else{
        contadorImpares++;
    }
}


console.log(`Quantidade de numeros pares: ${contadorPares}\nQuantidade de numeros impares: ${contadorImpares}`);
// fim do exercicio 2