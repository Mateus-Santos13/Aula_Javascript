//Exemplo de switch com calculadora simples
const leia = require("readline-sync");

console.log("\n==============================================================");
console.log("\n             Calculadora Simples com Switch Case              ");
console.log("\n==============================================================");
console.log("\nSoma (+)                                                      ");
console.log("\nSubtracao (-)                                                 ");
console.log("\nMultiplicacao (*)                                             ");
console.log("\nDivisao (/)                                                   ");
console.log("\n==============================================================");

let numero1 = leia.questionFloat("Digite o primeiro numero: ",
                                    {limitMessage: "Por favor, digite um numero float."});
let numero2 = leia.questionFloat("Digite o segundo numero: ",  
                                    {limitMessage: "Por favor, digite um numero float."});
let operacao = leia.keyIn("Digite a operacao desejada: ",
                                    {limitMessage: "Por favor, digite o caractere da operacao."});

switch (operacao) {
    case "+": 
        console.log(`\nO resultado da soma entre ${numero1} e ${numero2} é: ${numero1 + numero2}\n`);
        break;
    case "-":
        console.log(`\nO resultado da subtracao entre ${numero1} e ${numero2} é: ${numero1 - numero2}\n`);
        break;
    case "*":
        console.log(`\nO resultado da multiplicacao entre ${numero1} e ${numero2} é: ${numero1 * numero2}\n`);
        break;
    case "/":
        if (numero2 === 0) {
            console.log("\nErro: Divisao por zero nao e permitida.\n");
        } else {
            console.log(`\nO resultado da divisao entre ${numero1} e ${numero2} é: ${numero1 / numero2}\n`);
        }
        break;
    default:
        console.log("\nOperacao invalida! Por favor, escolha uma operacao valida.\n");
        break;
}