// Exercício 4 da lista 01 - Laço condicional if

// Ler 3 palavras que definem as características de um tipo de animal. EX: Vertebrado, mamífero, onívoro -> Homem. 
console.log("Exercício 2 - 3 caracteristicas para achar um animal\n");
const leia = require('readline-sync');

let caracteristica1, caracteristica2, caracteristica3, animal;

console.log("Digite a primeira caracteristica do animal: \n");
console.log("1 - Vertebrado\n2 - Invertebrado\n");

caracteristica1 = leia.question("Digite o numero da primeira característica do animal: \n"); //Lê a primeira característica do animal

if (caracteristica1 == "Vertebrado") { //Vertebrado
    console.log("Digite a segunda caracteristica do animal: \n");
    console.log("1 - Ave\n2 - Mamifero\n");
    caracteristica2 = leia.question("Digite a segunda caracteristica do animal: \n"); //Lê a segunda característica do animal
        if (caracteristica2 == "Ave"){ //Ave
            console.log("Selecione a terceira caracteristica do animal: \n");
            console.log("1 - Carnivoro\n2 - Onivoro\n");
            caracteristica3 = leia.question("Digite a terceira caracteristica do animal: \n"); //Lê a terceira característica do animal
                if (caracteristica3 == "Carnivoro"){ //Carnívoro
                    animal = "Aguia";
                    console.log(`O animal eh: ${animal}`);
                }else if (caracteristica3 == "Onivoro"){ //Onívoro
                    animal = "Pomba";
                    console.log(`O animal eh: ${animal}`);
                }else{
                    console.log("Caracteristica invalida! Por favor, escolha uma caracteristica valida.");
                }


        }else if (caracteristica2 == "Mamifero"){ //Mamífero
            console.log("Digite a terceira caracteristica do animal: \n");
            console.log("1 - Onivoro\n2 - Herbivoro\n");
            caracteristica3 = leia.question("Digite a terceira caracteristica do animal: \n"); //Lê a terceira característica do animal
                if (caracteristica3 == "Onivoro"){ //Onívoro
                    animal = "Homem";
                    console.log(`O animal eh: ${animal}`);
                }else if (caracteristica3 == "Herbivoro"){ //Herbívoro
                    animal = "Vaca";
                    console.log(`O animal eh: ${animal}`);
                }else{
                    console.log("Caracteristica invalida! Por favor, escolha uma caracteristica valida.");
                }
            }else{
            console.log("Caracteristica invalida! Por favor, escolha uma caracteristica valida.");
        }
            
}else if (caracteristica1 == "Invertebrado") { //Invertebrado
    console.log("Digite a segunda caracteristica do animal: \n");
    console.log("1 - Inseto\n2 - Anelideo\n");
    caracteristica2 = leia.question("Digite a segunda caracteristica do animal: \n");
        if (caracteristica2 == "Inseto"){ //Inseto
            console.log("Digite a terceira caracteristica do animal: \n");
            console.log("1 - Hematofago\n2 - Herbivoro\n");
            caracteristica3 = leia.question("Digite a terceira caracteristica do animal: \n");
            if (caracteristica3 == "Hematofago"){ //Hematofago
                animal = "Pulga";
                console.log(`O animal eh: ${animal}`);
            }else if (caracteristica3 == "Herbivoro"){ //Herbívoro
                animal = "Lagarta";
                console.log(`O animal eh: ${animal}`);
            }else{
                console.log("Caracteristica invalida! Por favor, escolha uma caracteristica valida.");
            }
        }else if (caracteristica2 == "Anelideo"){ //Anelideo
            console.log("Digite a terceira caracteristica do animal: \n");
            console.log("1 - Hematofago\n2 - Onivoro\n");
            caracteristica3 = leia.question("Digite a terceira caracteristica do animal: \n");
            if (caracteristica3 == "Hematofago"){ //Hematofago
                animal = "Sanguessuga";
                console.log(`O animal eh: ${animal}`);
            }else if (caracteristica3 == "Onivoro"){ //Onívoro
                animal = "Minhoca";
                console.log(`O animal eh: ${animal}`);
            }else{
                console.log("Caracteristica invalida! Por favor, escolha uma caracteristica valida.");
            }

        }else{
            console.log("Caracteristica invalida! Por favor, escolha uma caracteristica valida.");
        }


} else{
    console.log("Caracteristica invalida! Por favor, escolha uma caracteristica valida.");
} // Fim do Exercício 4 da lista 1 de if else