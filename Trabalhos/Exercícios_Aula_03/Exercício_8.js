// Exercício 8 da lista 01 - Laço condicional switch

// Algorítmo para simular operações básicas de uma conta bancária. O saldo deve iniciar em R$ 1.000,00. As operações são as seguintes:
// Código operação | Operação
// 1                 Saldo
// 2                 Saque
// 3                 Depósito
// 4                 Sair
console.log("Exercício 8 - Simulador de operações bancárias\n");
const leia = require('readline-sync');  
let operacao, saldo = 1000.00, saque, deposito;

console.log("======================================================================================\n");
console.log("        Bem-vindo ao Banco JS! Escolha uma das operacoes abaixo para continuar:\n       ");
console.log("======================================================================================\n");
console.log(`                       Seu saldo atual é: ${new Intl.NumberFormat(`pt-BR`,{style: `currency`, currency: `BRL`}).format(saldo)}\n`);
console.log("======================================================================================\n");
console.log("                1 - Saldo | 2 - Saque | 3 - Deposito | 4 - Sair\n                       ");

operacao = leia.questionInt("Digite o numero da operacao desejada: \n"); //Lê a operação desejada pelo usuário


if (operacao < 1 || operacao > 4){
    console.log("Operacao invalida! Por favor, escolha uma operacao valida.");
    return; //Encerra o programa se a operação for inválida
}

switch (operacao){
    case 1: //Saldo
        console.log(`Seu saldo atual é: ${new Intl.NumberFormat(`pt-BR`,{style: `currency`, currency: `BRL`}).format(saldo)}`);
    break;
    case 2: //Saque
        saque = leia.questionFloat("Digite o valor do saque: \n");
        if (saque > saldo){
            console.log("Saldo insuficiente para realizar o saque!");
        }else{
            saldo -= saque;
            console.log(`Saque realizado com sucesso! Seu saldo atual é: ${new Intl.NumberFormat(`pt-BR`,{style: `currency`, currency: `BRL`}).format(saldo)}`);
        }
    break;
    case 3: //Depósito
        deposito = leia.questionFloat("Digite o valor do deposito: \n");
        saldo += deposito;
        console.log(`Deposito realizado com sucesso! Seu saldo atual é: ${new Intl.NumberFormat(`pt-BR`,{style: `currency`, currency: `BRL`}).format(saldo)}`);
    break;
    case 4: //Sair
        console.log("Obrigado por usar o Banco JS! Até a próxima.");
    break;
    default: //Operação inválida
        
    break;
}



