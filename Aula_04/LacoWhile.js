//Aula 04 - Laço For
const leia = require('readline-sync');

let numero = leia.questionInt("Digite um numero inteiro para ver sua tabuada: \n");

contador = 1;

while (contador <=10){
    let tabuada = numero * contador;
    console.log(`${numero} x ${contador} = ${tabuada}`);
    contador++;
}
