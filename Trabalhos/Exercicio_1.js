


//Exercicio 1 da lista
// Inicio -> Digite o salário: -> Leia o salário -> Digite o abono: -> Leia o abono -> novoSalario -> Mostre o novo salário na tela -> Fim
console.log("Exercicio 1 - Calculo de Novo Salario com Abono\n");
const leia = require('readline-sync');
let salario;
let abono; 
let novoSalario;

salario = leia.questionFloat("Digite o salario: \n"); //Ele lê o salário do usuário, porém se não usarmos um valor float, ele pega como inteiro.
abono = leia.questionFloat("Digite o abono: \n"); //Ele lê o abono do usuário, porém se não usarmos um valor float, ele pega como inteiro.
novoSalario = salario + abono; //Cálculo do novo salário somando o salário com o abono.

console.log(`O novo salario com abono é: ${novoSalario}`); //Mostra o novo s2alário com abono na tela.
// Fim do Exercicio 1 da lista
