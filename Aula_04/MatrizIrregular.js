// No javascript, uma matriz é representada como um array de arrays. Ou seja, um empilhamento de vetores.
// Cada elemento da matriz é acessado por dois índices: o índice da linha e o índice da coluna.

let matriz = [
    [1, 2, 3],    // Linha 0
    [4, 5, 6]     // Linha 1
];




console.log(matriz[0].length);

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) { // Note que aqui usamos matriz[linha].length para obter o tamanho correto de cada linha. 
                                                                    // Sem isso, o programa só encontra 2 linhas.]

        console.log(`Elemento na posicao [${linha}][${coluna}]: ${matriz[linha][coluna]}`);// acessando cada elemento da matriz, por linha e coluna.

    }
}