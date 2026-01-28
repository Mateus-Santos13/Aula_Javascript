

//Exercicio 2 da lista
// SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS
console.log("Exercicio 3 - Cálculo do salario bruto\n");
const leia = require('readline-sync');

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido;
salarioBruto = leia.questionFloat("Digite o salario bruto: \n");
adicionalNoturno = leia.questionFloat("Digite o adicional noturno: \n");
horasExtras = leia.questionFloat("Digite o valor das horas extras: \n");
descontos = leia.questionFloat("Digite o valor dos descontos: \n");

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos; //Cálculo do salário líquido conforme a fórmula acima.
console.log(`O salario liquido é de: ${salarioLiquido}`); //Mostra o salário líquido na tela.
// Fim do Exercicio 3 da lista