//Exercicio 2 da lista
//  CALCULO = (n1 * n2) – (n3 * n4)
console.log("Exercicio 4 - Calculo da diferença entre os produtos\n");
console.log("A formula do calculo é: CALCULO = (n1 * n2) – (n3 * n4)\n");
const leia = require('readline-sync');

let n1, n2, n3, n4;

let multiplicacao_n1_n2, multiplicacao_n3_n4;

n1 = leia.questionFloat("Digite o valor do numero 1: \n");
n2 = leia.questionFloat("Digite o valor do numero 2: \n");
n3 = leia.questionFloat("Digite o valor do numero 3: \n");
n4 = leia.questionFloat("Digite o valor do numero 4: \n");


multiplicacao_n1_n2 = n1 * n2; //Cálculo do produto entre n1 e n2
multiplicacao_n3_n4 = n3 * n4; //Cálculo do produto entre n3 e n4

let calculo = multiplicacao_n1_n2 - multiplicacao_n3_n4; //Cálculo da diferença entre os produtos

console.log(`O resultado do cálculo é: ${calculo}`); //Mostra o resultado do cálculo na tela.
// Fim do Exercicio 4 da lista