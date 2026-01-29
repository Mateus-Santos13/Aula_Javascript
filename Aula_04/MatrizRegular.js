// No javascript, uma matriz é representada como um array de arrays. Ou seja, um empilhamento de vetores.
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