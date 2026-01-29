// pelo menos 1 de for, um de while, um de do while, um de vetor e um de matriz.
// Exercício 7 - Algorítmo que lê 10 números e armazena em um vetor. Depois, o programa mostra na tela todos os elementos dos índices impares do vetor,
// todos os elementos do vetor que são numeros pares, a soma de todos os elementos do vetor e a média dos elementos armazenados.


const leia = require("readline-sync");

let vetorNumeros = new Array(10);

for (let i = 0; i < vetorNumeros.length; i++) { //Lê 10 números inteiros e adiciona eles ao vetor criado anteriormente.
    vetorNumeros[i] = leia.questionInt(`Digite o ${i + 1} numero inteiro: `);
}

console.log("Elementos nos indices pares do vetor:"); //Verifica se o indice do vetor é impar, se for, exibe o elemento respectivo ao vetor na tela.
for (let i = 0; i < vetorNumeros.length; i++) {
    if (i % 2 !== 0) {
        console.log(`Indice [${i}]: ${vetorNumeros[i]}`);
    }
}
console.log("Elementos pares do vetor:"); //Verifica se o elemento do vetor é par, se for, exibe o elemento respectivo ao vetor na tela.
for (let i = 0; i < vetorNumeros.length; i++) {
    if (vetorNumeros[i] % 2 === 0){
        console.log(`Elemento: ${vetorNumeros[i]}`);
    }
}

let soma = 0;
for (let i = 0; i < vetorNumeros.length; i++) { //Calcula a soma de todos os elementos do vetor
    soma += vetorNumeros[i];
}
let media = soma / vetorNumeros.length; //Calcula a média dos elementos do vetor

console.log(`Soma de todos os elementos do vetor: ${soma}`);
console.log(`Média dos elementos armazenados no vetor: ${media}`);
//fim do exercicio 7