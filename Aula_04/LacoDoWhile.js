//Aula 04 - Laço do While

const leia = require('readline-sync');

let numero = leia.questionInt("Digite um numero inteiro para ver sua tabuada: \n");

contador = 1;

do {
    let tabuada = numero * contador;
    console.log(`${numero} x ${contador} = ${tabuada}`);
    contador++;
} while (contador <=10);
