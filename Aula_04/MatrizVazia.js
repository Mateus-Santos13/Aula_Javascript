const leia = require("readline-sync");
//Como criar uma matriz vazia em JavaScript

//let matriz = new Array(2);//definindo uma matriz com 2 linhas
/*
for (let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(3);//definindo 3 colunas para cada linha
}
// Agora, matriz é uma matriz 2x3 (2 linhas e 3 colunas).
// [][][]
// [][][]
console.table(matriz);


for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) { // Note que aqui usamos matriz[linha].length para obter o tamanho correto de cada linha. 
                                                                    // Sem isso, o programa só encontra 2 linhas.]

        matriz[linha][coluna] = leia.questionInt(`Digite o valor para a posicao [${linha}][${coluna}]: `);
        console.table(matriz);
    }
}
 */

let matrizInteiros = Array.from({ length: 2 }, () =>    
    Array.from({ length: 3 }, () => leia.questionInt("Digite um numero: ")) //Jeito fácil e compacto de criar uma matriz 2x3 e preencher com valores do usuário
);

console.table(matrizInteiros);