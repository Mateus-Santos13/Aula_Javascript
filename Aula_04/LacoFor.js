//Aula 04 - Laço For
const leia = require('readline-sync');

let numero = leia.questionInt("Digite um numero inteiro para ver sua tabuada: \n");

for (let i = 1; i <=10; i++){
    let tabuada = numero * i;
    console.log(`${numero} x ${i} = ${tabuada}`);
}
