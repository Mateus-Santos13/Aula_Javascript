const leia = require('readline-sync');

let continua = "S";
while (continua == "S") {
    
    console.log("================================\n");
    console.log("      Calculadora While        \n");
    console.log("================================\n"); 
    console.log("Escolha a operacao desejada:\n");
    console.log("Adicao (+)\n");
    console.log("Subtracao (-)\n");
    console.log("Multiplicacao (x)\n");
    console.log("Divisao (/)\n");
    console.log("================================\n"); 
    let num1 = leia.questionFloat("Digite o primeiro numero: \n");
    let operacao = leia.keyIn("Digite o simbolo da operacao desejada: \n");
    let num2 = leia.questionFloat("Digite o segundo numero: \n");

    switch (operacao) {
        case "+":
            console.log(`O resultado da adicao entre ${num1} e ${num2} é: ${num1 + num2}`);
            break;// No javascript, uma matriz é representada como um array de arrays. Ou seja, um empilhamento de vetores.
// Cada elemento da matriz é acessado por dois índices: o índice da linha e o índice da coluna.

let matriz = [
    [1, 2, 3],    // Linha 0
    [4, 5, 6],    // Linha 1
    [7, 8, 9]     // Linha 2
];

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz.length; coluna++) {
        console.log(`Elemento na posicao [${linha}][${coluna}]: ${matriz[linha][coluna]}`);// acessando cada elemento da matriz, por linha e coluna.

    }
}
        case "-":
            console.log(`O resultado da subtracao entre ${num1} e ${num2} é: ${num1 - num2}`);
            break;
        case "x":
            console.log(`O resultado da multiplicacao entre ${num1} e ${num2} é: ${num1 * num2}`);
            break;
        case "/":
            if (num2 == 0) {
                console.log("Erro: Divisao por zero nao e permitida.");
            } else {
                console.log(`O resultado da divisao entre ${num1} e ${num2} é: ${num1 / num2}`);
            }
            break;
        default:
            console.log("Operacao invalida! Por favor, escolha uma operacao valida.");
            break;
    }
    continua = leia.keyIn("Deseja realizar outra operacao? (S/N): \n").toUpperCase();
}


