let numero1 = 10;
let numero2 = 5;




if(numero1 > 9){
numero1 += numero2; // Equivalente a numero1 = numero1 + numero2 // Como a variável é global, o valor atualizado pode ser usado fora do bloco if 
// Se a variável fosse declarada com let ou const dentro do bloco if, não seria possível usar o valor atualizado fora do bloco
}



console.log(numero1); // Saída: 15
