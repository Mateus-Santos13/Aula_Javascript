const leia = require('readline-sync');
let numeros = [5, 10, 15, 20, 25];

let cores = Array(5);

for (let i = 0; i < numeros.length; i++) {

    console.log(`Elemento na posicao ${i}: ${numeros[i]}`);


}

console.table(numeros);



for (let i = 0; i < cores.length; i++) {

    cores[i] = leia.question(`Digite a cor para a posicao ${i}: `);

}

console.table(cores);

console.table(numeros.sort((a,b) => a - b));

console.log("Qual a posição do elemento 5 do vetor numeros?", numeros.indexOf(5));

