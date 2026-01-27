let numero1 = "1";
let numero2 = 1; 
let numero3 = "10";

console.log(`Comparação igualdade (==) entre string "1" e número 1: ${numero1 == numero2}`); // true, pois o valor é igual após coerção de tipo // string "1" é convertida para número 1

console.log(`Comparação estritamente igual (===) entre string "10" e número 1: ${numero1 === numero2}`); // false, pois o tipo e o valor são diferentes // string "1" não é igual a número 1

if(numero2 < numero3){
    console.log(`Número2 (${numero2}) é maior que Número3 (${numero3})`);

}
