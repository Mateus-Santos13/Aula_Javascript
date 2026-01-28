// Exercício 1 da lista 01 - Laço condicional if

//Início -> Digite o número 1: -> Leia o número 1 -> digite o número 2: -> Leia o número 2 -> digite o número 3: -> Leia o número 3
// -> Some número 1 + número 2 -> Se soma número 1 + número 2 for maior que número 3 -> Soma de número 1 + número 2 é maior que número 3
// -> Senão se -> Soma de número 1 + número 2 é menor que número 3 -> senão Soma de número 1 + número 2 é igual a número 3 -> Fim
console.log("Exercício 1 - Comparação de Números\n");
const leia = require('readline-sync');

let numero1, numero2, numero3, soma;

numero1 = leia.questionInt("Digite o número 1: \n"); //Lê o número 1 do usuário
numero2 = leia.questionInt("Digite o número 2: \n"); //Lê o número 2 do usuário
numero3 = leia.questionInt("Digite o número 3: \n"); //Lê o número 3 do usuário

soma_1e2 = numero1 + numero2;

if (soma_1e2 > numero3){
    console.log(`A soma de ${numero1} + ${numero2} eh maior que ${numero3}`); //Mostra que a soma de número 1 + número 2 é maior que número 3
} else if (soma_1e2 < numero3){
    console.log(`A soma de ${numero1} + ${numero2} eh menor que ${numero3}`); //Mostra que a soma de número 1 + número 2 é menor que número 3
}else {
    console.log(`A soma de ${numero1} + ${numero2} eh igual a ${numero3}`); //Mostra que a soma de número 1 + número 2 é igual a número 3
}
